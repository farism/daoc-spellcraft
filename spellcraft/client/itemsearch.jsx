ItemSearch = ReactMeteor.createClass({

  templateName: 'ItemSearch',

  mixins: [React.addons.LinkedStateMixin],

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
      value: this.props.value,
      index: -1,
      selected: -1,
      focused: false,
      results: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if(nextProps.value != this.state.value){
      this.setState({ value: nextProps.value });
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    if(this.refs.list){
      var list = React.findDOMNode(this.refs.list);
      var option = list.childNodes[this.state.index];
      if(list && option) {
        if(option) option.focus();
        var listRect = list.getBoundingClientRect();
        var optionRect = option.getBoundingClientRect();
        if (optionRect.bottom > listRect.bottom || optionRect.top < listRect.top) {
          list.scrollTop = (option.offsetTop + option.clientHeight - list.offsetHeight);
        }
      }
    }

    if(prevState.value != this.state.value){
      var val = this.state.value;
      var results = val.length < 4 ? [] : Items.find({ location: this.props.location, itemname: new RegExp(val, 'gi') }).fetch();
      this.setState({ results: results, index: -1, selected: -1 });
      this.props.onChange(val);
    }
  },

  render: function() {
    return (
      <div className="item-search">
        <input ref="input" type="text" placeholder="Search for item" valueLink={this.linkState('value')} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} />
        {this.state.focused && this.state.results.length ? (
          <ul ref="list">
            {this.state.results.map(function(result, i){
              var cx = classNames({
                'hover': i == this.state.index,
                'selected': i == this.state.selected,
              })
              return (
                <li className={cx} onClick={this.onClickResult.bind(this, i)} key={i}>
                  <div className={'item-search-name ' + result.realm}>{result.itemname}</div>
                  <div className="item-search-bonuses">
                    {result.dropitem.map(function(bonus){
                      return GetBonusAbbreviation(bonus);
                    }).join(', ')}
                  </div>
                </li>
              );
            }.bind(this))}
          </ul>
        ) : ''}
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

  onKeyDown: function(e) {
    var i = this.state.index;
    if(e.keyCode == 38){
      this.setState({ index: i - 1 < 0 ? this.state.results.length - 1 : i - 1 });
    } else if(e.keyCode == 40){
      this.setState({ index: i + 1 > this.state.results.length - 1 ? 0 : i + 1 });
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
    var result = this.state.results[i];
    if(result){
      this.setState({ selected: i, value: result.itemname });
      this.props.onSelect(result);
    }
  }

});