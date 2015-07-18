ItemSearch = ReactMeteor.createClass({

  templateName: 'ItemSearch',

  getDefaultProps: function() {
    return {
      location: ''
    }
  },

  getInitialState: function() {
    return {
      index: -1,
      selected: -1,
      focused: false,
      results: []
    }
  },

  componentDidUpdate: function(prevProps, prevState){
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
  },

  render: function() {
    return (
      <div className="item-search">
        <input ref="input" type="text" placeholder="Search for item" onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} onChange={this.onChange} />
        {this.state.focused && this.state.results.length ? (
          <ul ref="list">
            {this.state.results.map(function(result, i){
              var cx = classNames({
                'hover': i == this.state.index,
                'selected': i == this.state.selected,
              })
              return <li className={cx + ' ' + result.realm} onClick={this.onClickResult.bind(this, i)} key={i}>{result.itemname}</li>
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
    }.bind(this), 100);
  },

  onKeyDown: function(e) {
    var i = this.state.index;
    if(e.keyCode == 38){ 
      this.setState({ index: i - 1 < 0 ? this.state.results.length - 1 : i - 1 });
    } else if(e.keyCode == 40){
      this.setState({ index: i + 1 > this.state.results.length - 1 ? 0 : i + 1 });
    } else if(e.keyCode == 13){
      this.setState({ index: -1, selected: i, focused: false });
      this.onSelect(i);
    }
  },

  onClickResult: function(i, e) {
    this.onSelect(i);
  },

  onChange: function(e) {
    var val = $(e.target).val();
    var results = val.length < 4 ? [] : Items.find({ location: this.props.location, itemname: new RegExp(val, 'gi') }).fetch();
    this.setState({ results: results, index: -1, selected: -1 });
  },

  onSelect: function(i) {
    var result = this.state.results[i];
    if(result && this.props.onSelect){
      this.setState({ selected: i });
      this.props.onSelect(result, i);
    }
  }

});