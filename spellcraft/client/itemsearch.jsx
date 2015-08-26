ItemSearch = React.createClass({

  mixins: [ReactMeteorData, React.addons.LinkedStateMixin],

  getDefaultProps: function() {
    return {
      location: '',
      value: '',
      onSelect: function(){},
      onChange: function(){}
    }
  },

  getInitialState: function() {
    return {
      index: -1,
      selected: -1,
      focused: false
    }
  },

  getMeteorData: function() {
    var name = this.props.slot.itemName;

    if(name.length > 3){
      Meteor.subscribe('itemsearch', this.props.slot.slot, name);
    }

    return {
      results: name.length > 3 ? Items.find().fetch() : []
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(this.refs.list){
      var list = React.findDOMNode(this.refs.list);
      var option = list.childNodes[this.state.index];
      if(list && option) {
        var listRect = list.getBoundingClientRect();
        var optionRect = option.getBoundingClientRect();
        if (optionRect.bottom > listRect.bottom || optionRect.top < listRect.top) {
          list.scrollTop = (option.offsetTop + option.clientHeight - list.offsetHeight);
        }
      }
    }
  },

  render: function() {
    return (
      <div className="item-search">
        <input ref="input" type="text" placeholder="Search for item" value={this.props.slot.itemName} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} onKeyDown={this.onKeyDown} />
        {this.state.focused && this.data.results.length ? (
          <ul ref="list">
            {this.data.results.map(function(result, i){
              var cx = classNames({
                'hover': i == this.state.index,
                'selected': i == this.state.selected,
              })
              return (
                <li className={cx} onClick={this.onClickResult.bind(this, i)} key={i}>
                  <div className={'item-search-name ' + result.realm}>{result.itemname}</div>
                  <div className="item-search-bonuses">
                    {(result.dropitem || []).map(function(bonus){
                      return GetBonusAbbreviation(bonus);
                    }).join(', ')}
                  </div>
                </li>
              );
            }.bind(this))}
          </ul>
        ) : '' }
      </div>
    );
  },

  onFocus: function(e) {
    this.setState({ focused: true });
  },

  onBlur: function(e) {
    setTimeout(function(){
      this.setState({ focused: false });
    }.bind(this), 200);
  },

  onChange: function(e) {
    Slots.update({ id: this.props.slot.id }, { $set: { itemName: e.target.value } });
  },

  onKeyDown: function(e) {
    var i = this.state.index;
    if(e.keyCode == 38){
      this.setState({ index: i - 1 < 0 ? this.data.results.length - 1 : i - 1 });
    } else if(e.keyCode == 40){
      this.setState({ index: i + 1 > this.data.results.length - 1 ? 0 : i + 1 });
    } else if(e.keyCode == 13){
      this.setState({ selected: i });
      $(React.findDOMNode(this.refs.input)).blur();
      this.onSelect(i);
    }
  },

  onClickResult: function(i, e) {
    this.onSelect(i);
  },

  onSelect: function(i) {
    var result = this.data.results[i];

    if(result){
      Slots.update({ id: this.props.slot.id }, { $set: { itemName: result.itemname } });

      Bonuses.find({ slotid: this.props.slot.id }).map(function(bonus){
        var itembonus = result.dropitem[bonus.index];
        if(itembonus){
          itembonus.amount = parseInt(itembonus.amount, 10);
        } else {
          itembonus = GetDefaultBonus(this.props.slot.id, bonus.index);
        }
        Bonuses.update({ _id: bonus._id }, { $set: itembonus });
      }.bind(this));

      this.setState({ selected: i });
    }
  }

});