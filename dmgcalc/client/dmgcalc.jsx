DamageCalculator = React.createClass({

  mixins: [ReactMeteorData, React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      level: 50,
      relics: 1,
      weapon_dps: 16.5,
      armor_quality: 100,
      armor_condition: 100,
      resists: 26
    };
  },

  getMeteorData: function() {
    return {};
  },

  render: function() {
    var classes = Object.keys(Classes);
    var weapons = [];
    for(var clss in Classes){
      weapons = weapons.concat(Object.keys(Classes[clss]));
    };
    weapons = _.unique(weapons).sort();

    return (
      <div id="app">
        <Nav ref="nav" />
        <div id="damage-calculator" className="container-fluid">
          <div className="row">
            <div className="col-xs-4">
              <p>You</p>

              <label>Class
                <select valueLink={this.linkState('class')}>
                  <option>- select -</option>
                  {classes.map(function(clss, i){
                    return <option value={clss} key={i}>{clss}</option>
                  })}
                </select>
              </label>
              <br/>
              <label>Char Level
                <input valueLink={this.linkState('level')} />
              </label>
              <br/>
              <label>Strength Relics
                <input valueLink={this.linkState('relics')} />
              </label>
              <br/>
              <label> Strength
                <input valueLink={this.linkState('strength')} />
              </label>
              <br/>
              <label> Dexterity
                <input valueLink={this.linkState('dexterity')} />
              </label>
              <br/>
              <label> Quickness
                <input valueLink={this.linkState('quickness')} />
              </label>
              <label> Haste
                <input valueLink={this.linkState('haste')} />
              </label>
              <label> Celerity
                <input valueLink={this.linkState('celerity')} />
              </label>
              <label> ToA Melee Speed
                <input valueLink={this.linkState('toa_haste')} />
              </label>
              <label> ToA Melee Damage
                <input valueLink={this.linkState('toa_melee')} />
              </label>
              <label> ToA Style Damage
                <input valueLink={this.linkState('toa_style')} />
              </label>
              <br/>
              <br/>

              <p>Weapon</p>

              <label>
                <span />
                <input type="checkbox" checkedLink={this.linkState('weapon_2h')} value="1" /> Two Handed
              </label>
              <label>Weapon
                <select valueLink={this.linkState('weapon')}>
                  <option>- select -</option>
                  {weapons.map(function(weapon, i){
                    return <option value={weapon} key={i}>{weapon}</option>
                  })}
                </select>
              </label>
              <label> Weapon DPS
                <input valueLink={this.linkState('weapon_dps')} />
              </label>
              <br/>
              <label> Weapon Speed
                <input valueLink={this.linkState('weapon_speed')} />
              </label>
              <br/>
              <label> Weapon Spec
                <input valueLink={this.linkState('weapon_spec')} />
              </label>
            </div>
            <div className="col-xs-4">
              <p>Enemy</p>
              <label> Char Level
                <input valueLink={this.linkState('enemy_level')} />
              </label>
              <br/>
              <label>Armor
                <select valueLink={this.linkState('armor_absorb')}>
                  <option>- select -</option>
                  <option value="0">Cloth</option>
                  <option value="0.1">Leather</option>
                  <option value="0.19">Studded</option>
                  <option value="0.27">Chain</option>
                  <option value="0.35">Plate</option>
                </select>
              </label>
              <br/>
              <label> Armor AF
                <input valueLink={this.linkState('armor_af')} />
              </label>
              <br/>
              <label> Armor Quality
                <input valueLink={this.linkState('armor_quality')} />
              </label>
              <br/>
              <label> Armor Condition
                <input valueLink={this.linkState('armor_condition')} />
              </label>
              <br/>
              <label> ToA AF
                <input valueLink={this.linkState('toa_af')} />
              </label>
              <br/>
              <label> Spec AF Buff
                <input valueLink={this.linkState('spec_af_buff')} />
              </label>
              <br/>
              <label> Absorb Buff
                <input valueLink={this.linkState('absorb_buff')} />
              </label>
              <br/>
              <label> Melee Resist
                <input valueLink={this.linkState('resists')} />
              </label>
            </div>
            <div className="col-xs-4">
              <p>Results</p>
              <button onClick={this.calculate}>Calculate</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  calculate: function(){
    var f = Math.floor;
    var max = Math.max;
    var min = Math.min;
    var s = this.state;

    //you
    var level = parseInt(s.level || 0);
    var relics = parseInt(s.relics || 0);
    var strength = parseInt(s.strength || 0, 10);
    var dexterity = parseInt(s.dexterity || 0, 10);
    var quickness = parseInt(s.quickness || 0, 10);
    var weapon_type = WeaponStats[s.weapon] || 0;
    var damagetable = (Classes[s.class] || {})[s.weapon] || 0;
    var weapon_dps = parseFloat(s.weapon_dps || 0);
    var weapon_spec = parseInt(s.weapon_spec || 0);
    var weapon_speed = parseFloat(s.weapon_speed || 0);
    var haste = parseInt(s.haste || 0, 10) / 100;
    var celerity = parseInt(s.celerity || 0, 10) / 100;
    var toa_melee_speed = parseInt(s.toa_haste || 0, 10) / 100;
    var toa_melee_damage = parseInt(s.toa_melee || 0, 10) / 100;
    var toa_melee_style = parseInt(s.toa_style || 0, 10) / 100;

    //enemy
    var enemy_level = parseFloat(s.enemy_level || 0);
    var absorb = parseFloat(s.armor_absorb || 0);
    var af = parseFloat(s.armor_af || 0);
    var quality = parseInt(s.armor_quality || 0, 10) / 100;
    var condition = parseInt(s.armor_condition || 0, 10) / 100;
    var toa_af = parseInt(s.enemy_toa_af || 0, 10);
    var spec_af = parseInt(s.spec_af_buff || 0, 10);
    var absorb = parseInt(s.absorb_buff || 0, 10) / 100;
    var resists = parseInt(s.resists || 0, 10) / 100;

    var stats = 0;
    if(weapon_dps == 0){
      stats = Math.floor(strength / 2);
    } else if(weapon_dps == 1){
      stats = Math.floor(dexterity / 2);
    } else {
      stats = Math.floor((strength / 2 + dexterity / 2) / 2);
    }

    var armor = (20 + (af + (spec_af / 5) + (toa_af / 5)) * quality * condition) / (1 - absorb);
    var modifier = level * damagetable / 10 * (1 + 0.01 * stats) * (0.9 + 0.1 * max(1, relics)) * (0.75 + 0.5 * min(enemy_level + 1, weapon_spec - 1) / (enemy_level + 1) + 0.01 * f(Math.random() * 49)) / armor * (1 - absorb) * (1 - resists);
    var twohandbonus = 1.0;
    if(s.weapon_2h){
      twohandbonus = 1.1 + (0.005 * weapon_spec);
    }
    var dps = f(f(f(f(f(weapon_dps * weapon_speed * 10) * (0.94 + weapon_speed * 0.03)) /** (1 + 0.01 * MYTHICALDPS)*/)) * twohandbonus) * (1 + 0.01 * toa_melee_speed) / 10;
    var swing_speed = f(f(f(weapon_speed * 100 * (1 - (min(250, quickness) - 50) / 500)) * (1 - haste - celerity)) * (1 - toa_melee_speed)) / 100;
    var base_damage = max(3, modifier) * swing_speed;
    //var style_damage = (STYLE_BASE + (weapon_spec - STYLE_LEVEL) * STYLE_GROWTH) * swing_speed * modifier / 10 + base_damage * toa_melee_style;
    console.log(modifier, base_damage);
  }

});


//(20 + (ITEM_USEABLE_AF + (ENEMY_SPEC_AF_BONUS / 5) + (ENEMY_TOA_AF_BONUS / 5)) * ITEM_QUALITY * ITEM_CONDITION) / (1 - ITEM_ABSORB)