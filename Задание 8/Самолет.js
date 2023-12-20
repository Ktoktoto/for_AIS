(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Самолет_atlas_1", frames: [[647,952,348,59],[998,724,236,55],[0,0,1283,722],[0,724,645,343],[647,724,349,226],[997,952,173,94],[0,1069,110,53],[647,1013,94,94]]},
		{name:"Самолет_atlas_2", frames: [[0,0,1283,723],[0,725,1283,723]]},
		{name:"Самолет_atlas_3", frames: [[0,1131,1444,838],[0,0,1110,1129]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Лого1 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Лого2 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Ночь30 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Рассвет = function() {
	this.initialize(ss["Самолет_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Самолет_1 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.день20 = function() {
	this.initialize(ss["Самолет_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.закат20 = function() {
	this.initialize(ss["Самолет_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.облако1 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.облако2 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.облако3 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.солнце = function() {
	this.initialize(ss["Самолет_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Star1 = function() {
	this.initialize(ss["Самолет_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.солнце();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,1110,1129), null);


(lib.Анимация27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.облако2();
	this.instance.setTransform(-86.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-47,173,94);


(lib.Анимация26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.облако2();
	this.instance.setTransform(-86.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-47,173,94);


(lib.Анимация25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.облако3();
	this.instance.setTransform(-55,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-26.5,110,53);


(lib.Анимация24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.облако3();
	this.instance.setTransform(-55,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-26.5,110,53);


(lib.Анимация23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Star1();
	this.instance.setTransform(-47,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-47,94,94);


(lib.Анимация22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Star1();
	this.instance.setTransform(-29.75,-29.75,0.633,0.633);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-29.7,59.5,59.5);


(lib.Анимация21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Star1();
	this.instance.setTransform(-47,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-47,94,94);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.облако1();
	this.instance.setTransform(-174.5,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-113,349,226);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.облако1();
	this.instance.setTransform(-174.5,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-113,349,226);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Самолет_1();
	this.instance.setTransform(-322.5,-171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-171.5,645,343);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Самолет_1();
	this.instance.setTransform(-322.5,-171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-171.5,645,343);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Лого1();
	this.instance.setTransform(-174,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-29.5,348,59);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Лого2();
	this.instance.setTransform(-118,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-27.5,236,55);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Самолет_1();
	this.instance.setTransform(-322.5,-171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-171.5,645,343);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Самолет_1();
	this.instance.setTransform(-322.5,-171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-171.5,645,343);


(lib.облако3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация24("synched",0);
	this.instance.setTransform(55,26.5);

	this.instance_1 = new lib.Анимация25("synched",0);
	this.instance_1.setTransform(-151.7,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-151.7},49,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.7,0,316.7,53);


(lib.облако2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация26("synched",0);
	this.instance.setTransform(86.5,47);

	this.instance_1 = new lib.Анимация27("synched",0);
	this.instance_1.setTransform(-123.5,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},43).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-123.5},43,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,0,383,94);


(lib.облако1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация13("synched",0);
	this.instance.setTransform(174.5,113);

	this.instance_1 = new lib.Анимация14("synched",0);
	this.instance_1.setTransform(-126.75,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},62).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-126.75},62,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.2,0,650.2,226);


(lib.звезда = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1___копия
	this.instance = new lib.Анимация21("synched",0);
	this.instance.setTransform(47,47);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация22("synched",0);
	this.instance_1.setTransform(46.75,46.75);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация23("synched",0);
	this.instance_2.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true,x:46.75,y:46.75},8).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},8).to({_off:true,x:47,y:47},8).wait(1));

	// Слой_1
	this.instance_3 = new lib.Анимация21("synched",0);
	this.instance_3.setTransform(47,47);

	this.instance_4 = new lib.Анимация22("synched",0);
	this.instance_4.setTransform(46.75,46.75);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация23("synched",0);
	this.instance_5.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},8).to({state:[]},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:46.75,y:46.75},8).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},8).to({_off:true,x:47,y:47},8).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,94.2,94.2);


(lib.Солнце = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ3();
	this.instance.setTransform(555,564.5,1,1,0,0,0,555,564.5);

	this.instance_1 = new lib.солнце();
	this.instance_1.setTransform(1205.45,113.35,1,1,99.77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-78.2,1301,1285.5);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-322.5,-171.5,645,343), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-322.5,-171.5,645,343), null);


// stage content:
(lib.Самолет = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,41,59];
	// timeline functions:
	this.frame_0 = function() {
		playSound("звууксамолета");
	}
	this.frame_41 = function() {
		playSound("Авиасейлс");
	}
	this.frame_59 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_10);
		
		function fl_ClickToGoToWebPage_10() {
			window.open("https://www.aviasales.ru/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(18).call(this.frame_59).wait(147));

	// Самолет2
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(1602.5,32.5);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.setTransform(711.8,292.5);
	this.instance_1._off = true;

	this.movieClip_1 = new lib.Символ1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(711.8,292.5);
	this.movieClip_1._off = true;

	this.movieClip_2 = new lib.Символ2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(-322.5,826.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.movieClip_1}]},13).to({state:[{t:this.movieClip_2}]},35).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(1).to({x:1599.8922,y:33.2613},0).wait(1).to({x:1596.1095,y:34.3655},0).wait(1).to({x:1591.105,y:35.8264},0).wait(1).to({x:1584.8312,y:37.6579},0).wait(1).to({x:1577.2407,y:39.8737},0).wait(1).to({x:1568.2869,y:42.4875},0).wait(1).to({x:1557.9244,y:45.5125},0).wait(1).to({x:1546.1109,y:48.9611},0).wait(1).to({x:1532.8077,y:52.8446},0).wait(1).to({x:1517.9818,y:57.1725},0).wait(1).to({x:1501.6077,y:61.9525},0).wait(1).to({x:1483.6695,y:67.1889},0).wait(1).to({x:1464.1637,y:72.8831},0).wait(1).to({x:1443.1014,y:79.0316},0).wait(1).to({x:1420.5117,y:85.626},0).wait(1).to({x:1396.4441,y:92.6518},0).wait(1).to({x:1370.9717,y:100.0877},0).wait(1).to({x:1344.1925,y:107.905},0).wait(1).to({x:1316.2316,y:116.0674},0).wait(1).to({x:1287.2408,y:124.5304},0).wait(1).to({x:1257.3975,y:133.2422},0).wait(1).to({x:1226.9022,y:142.1444},0).wait(1).to({x:1195.9735,y:151.1731},0).wait(1).to({x:1164.843,y:160.2607},0).wait(1).to({x:1133.7481,y:169.3379},0).wait(1).to({x:1102.9245,y:178.3359},0).wait(1).to({x:1072.5994,y:187.1884},0).wait(1).to({x:1042.985,y:195.8334},0).wait(1).to({x:1014.2728,y:204.2151},0).wait(1).to({x:986.6307,y:212.2844},0).wait(1).to({x:960.2,y:220},0).wait(1).to({x:932.7777,y:228.0037},0).wait(1).to({x:906.9006,y:235.5564},0).wait(1).to({x:882.6385,y:242.6377},0).wait(1).to({x:860.0373,y:249.2343},0).wait(1).to({x:839.1216,y:255.3389},0).wait(1).to({x:819.8981,y:260.9496},0).wait(1).to({x:802.3582,y:266.069},0).wait(1).to({x:786.4814,y:270.7029},0).wait(1).to({x:772.2375,y:274.8602},0).wait(1).to({x:759.5892,y:278.5519},0).wait(1).to({x:748.4935,y:281.7904},0).wait(1).to({x:738.9038,y:284.5893},0).wait(1).to({x:730.7713,y:286.9629},0).wait(1).to({x:724.0454,y:288.926},0).wait(1).to({x:718.6752,y:290.4933},0).wait(1).to({x:714.6101,y:291.6798},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({y:255.7},15).to({y:292.5},14).to({y:323.2},13).to({_off:true,y:292.5,mode:"independent"},13).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(149).to({_off:false},13).to({_off:true,x:-322.5,y:826.35},35,cjs.Ease.sineInOut).wait(9));

	// самолет1
	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.setTransform(1602.5,32.5);

	this.instance_3 = new lib.Анимация6("synched",0);
	this.instance_3.setTransform(176.5,891.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},70).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:1596.031,y:36.3969},0).wait(1).to({x:1588.7781,y:40.766},0).wait(1).to({x:1580.7341,y:45.6116},0).wait(1).to({x:1571.8916,y:50.9382},0).wait(1).to({x:1562.2434,y:56.7502},0).wait(1).to({x:1551.782,y:63.0521},0).wait(1).to({x:1540.4999,y:69.8483},0).wait(1).to({x:1528.3899,y:77.1433},0).wait(1).to({x:1515.4443,y:84.9416},0).wait(1).to({x:1501.6556,y:93.2478},0).wait(1).to({x:1487.0165,y:102.0663},0).wait(1).to({x:1471.5193,y:111.4017},0).wait(1).to({x:1455.1565,y:121.2585},0).wait(1).to({x:1437.9205,y:131.6413},0).wait(1).to({x:1419.8039,y:142.5546},0).wait(1).to({x:1400.7991,y:154.0029},0).wait(1).to({x:1380.8985,y:165.9909},0).wait(1).to({x:1360.0947,y:178.5229},0).wait(1).to({x:1338.3801,y:191.6036},0).wait(1).to({x:1315.7474,y:205.2374},0).wait(1).to({x:1292.189,y:219.4288},0).wait(1).to({x:1267.6976,y:234.1822},0).wait(1).to({x:1242.2659,y:249.502},0).wait(1).to({x:1215.8865,y:265.3927},0).wait(1).to({x:1188.5523,y:281.8586},0).wait(1).to({x:1160.2562,y:298.904},0).wait(1).to({x:1130.9911,y:316.533},0).wait(1).to({x:1100.75,y:334.75},0).wait(1).to({x:1069.5278,y:353.5576},0).wait(1).to({x:1037.3162,y:372.9613},0).wait(1).to({x:1004.1084,y:392.965},0).wait(1).to({x:969.8981,y:413.5726},0).wait(1).to({x:934.679,y:434.7879},0).wait(1).to({x:898.4448,y:456.6147},0).wait(1).to({x:861.1896,y:479.0565},0).wait(1).to({x:822.9076,y:502.1168},0).wait(1).to({x:783.5933,y:525.799},0).wait(1).to({x:743.2412,y:550.1063},0).wait(1).to({x:701.8463,y:575.0417},0).wait(1).to({x:659.4037,y:600.6083},0).wait(1).to({x:615.9088,y:626.8088},0).wait(1).to({x:571.3573,y:653.6457},0).wait(1).to({x:525.7452,y:681.1216},0).wait(1).to({x:479.0688,y:709.2385},0).wait(1).to({x:431.3247,y:737.9986},0).wait(1).to({x:382.5101,y:767.4036},0).wait(1).to({x:332.6223,y:797.455},0).wait(1).to({x:281.6591,y:828.1543},0).wait(1).to({x:229.6187,y:859.5023},0).to({_off:true},1).wait(156));

	// Слой_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADOlEQBqhrBvhNQBvhMBNgUQBJgUgFArQgHAuhoBgQhfBXgpBtQgPAngaCEQgRBZgnAnQg2A1iBANQjrAYlBDrQhlBKhhBVIhMBHQRzy5j/ESg");
	this.shape.setTransform(1520.2191,201.0184);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqvJMIAWgUQAYgWAWgZIAqgwIAvg0IAvgyICri3QBchhBPhQIAqgoIAkggIAkgeIA0gqIA4gxIA0g0IAggcIAigiQBahfgzA3IgEAFIAcgeIAkgiIAjghIAegbQAQgPAQgNQAXgUAYgRIAbgTQApgaAlgPQAVgJAUgFQAWgHAUgDIAIgBQAqgHAQALQAMAJgCASQgBATgPAZQgMAVgVAYQgQAUgXAWIgRASIgdAlIgkA5QgPAZgPAbQgPAcgNAdIgCACQgJASgMAjIgUA5IgIAoIgFASIgFATQgPAygZAfQgLAPgMAKQgVASgfAOQgWAJgZAHIgwAMIgtAJIgNADIg9APQglAKgoAPQgkAMgnAQQimBEjAB/QhMAxhKA2IgiAYIgRALIgKAHIgDACIgJAIIgLAKQgLAJgNAHQgOAJgMAKIATgUg");
	this.shape_1.setTransform(1501.9143,212.202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArKJKIAYgUQAagWAXgbQATgUAYggQAXgbAZgcIAwg1ICzjAQBihnBUhQQAYgXAVgTQAUgQAUgMQAUgOATgLIA2gfIAyghIAqglQASgLARgPQAUgSARgRIAugwIgIAHIApgqIAkgkIAkgkIAdgfQAQgRAPgNQAYgWAZgSQAOgLAOgJQArgbAngLQAWgIAVgDQAWgFAVAAIAIABQAqgDAQAOQAMAIgBAUQgBATgOAbQgKAWgVAaQgSAVgYAWIgMATIgVAmIgeA8QgNAbgQAcIghA6IgBACQgMASgPAhQgKAYgQAeQgDATgGAXIgFASIgHATQgTAxgdAfQgLAOgPAKQgWARghANIgyAQIgxANIgvAMIgNAEQghAMgcAIIhQAcIhOAeQixBHjKB4QhSAuhQAzIgkAVIgRAJIgLAFIgCABIgIAFIgIAHQgKAHgOAFQgPAFgKAIQAIgLALgJg");
	this.shape_2.setTransform(1483.654,223.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ArkJJQALgJAPgKQAbgVAYgdQASgTAaglQAXgdAagdIAzg5QBqh0BRhVQBmhsBZhSQAagZAXgRQAVgQAWgKQAWgMAUgHIA4gUIAtgRIAfgWQATgJAUgPQAUgRATgTIA2g5QAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAqgtQAVgWARgQIAkgnQANgOAPgTQAQgTAPgOQAXgYAagTQAOgLAPgKQAugcAqgJQAWgGAWAAQAVgDAWADIAJACQApACAQAPQAMALgBATQABAVgNAbQgKAZgVAbQgRAXgZAXIgJASIgOAnQgIAdgOAiQgMAdgRAeQgSAegSAcIgCACQgOASgSAgQgMAVgVAdQgCAUgGAXIgHAUIgJASQgVAygiAdQgNANgQAKQgXAQgkAMIg0AQIgzAOQgXAGgZAJIgNAFQgiARgbAIIhSAgIhSAfQi9BJjUBxQhXAthWAuIgnAUIgRAGIgKACIgDAAIgFAEIgHAEQgJAFgPABQgPADgKAFQAIgLANgKg");
	this.shape_3.setTransform(1465.351,234.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ar+JKQALgJARgKQAcgUAZgfQARgSAcgqQAXgeAbggIA1g7QBwh9BThWQBrhxBehUQAdgaAXgRQAXgPAYgIQAXgJAVgEQAkgHAXgBQAdgFALADQASgKADADQATgGAWgPQAWgSAUgUQBUhXgXAVIAGgIIAsgvIAngoQAUgVAQgUQAOgPAOgUQAQgWAOgPQAXgZAbgVQAPgMAQgJQAwgeAsgFQAXgFAXADQAVgBAWAGIAJADQAoAGARASQAMALAAATQABAXgLAbQgJAbgVAdQgSAZgaAXIgFASQgCATgEAVQgDAfgMAjQgLAfgTAfQgSAggVAbIgCADQgQASgWAdQgOAUgYAbQgBAWgIAXIgIAUIgKATQgZAxgnAcQgNANgSAJQgZAPgmAMIg2APQgbAGgaAJQgXAHgZAMIgOAFQgkAWgaAIQgmARguATIhWAgQjHBLjeBrIi5BWIgpAQQgKADgJABIgJgBIgCAAIgEABIgFACQgIADgPgCQgRgBgIAEQAIgNAOgJg");
	this.shape_4.setTransform(1447.079,244.9054);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ArwJpIgKgDIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBABgBAAQgGAAgRgFQgRgEgHABQAIgNAPgJQAMgJASgJQAegTAagiQAPgRAegvQAYgfAcgiIA3g+QB3iFBThYQBwh0BkhYQAfgaAZgQQAYgPAagGQAYgHAWAAQAngCAWAFQAdACAGAMQAOgDgDALQAUgEAYgPQAXgRAVgWQBShWgMAMIAMgQIAugyIAngqQAVgXAQgUQANgQAPgXQAPgYAOgPQAXgbAcgXQAPgMARgKQAygeAugCQAZgDAXAFQAVABAXAJIAJAFQAoAJARAUQAMANAAATQADAZgLAcQgIAcgVAeQgSAbgbAYIgCASQADATgBAVQADAhgLAlQgKAhgTAgQgUAhgXAbIgDADQgSASgZAbQgPATgdAZQgBAWgJAYIgJAVIgLATQgcAxgsAbQgOAMgTAJQgbAOgoALIg4AOQgdAHgbAJQgXAIgaAOIgNAHQgnAagXAIQgnAUgwAUIhaAiQjSBNjoBkIjEBQQgaAKgSAEIgNABIgGAAg");
	this.shape_5.setTransform(1428.824,256.1354);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AsRJ1QgGgDgDgCIgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgXgKQgSgHgGgBQAHgOARgJQAMgJAUgJQAggSAbgkQAOgQAgg0QAXghAegjIA5hCQB9iMBVhaQB1h5BphaQAhgbAagQQAagNAcgEQAagFAXADQApAEAWAKQAcAKABAUQALADgKAUQAVgBAagQQAYgRAXgXQBQhTgDAAIATgYIAvgzIApgtQAVgYAQgWQANgQAOgZQAPgaAOgQQAWgdAdgXQAQgNASgKQA1ggAwABQAZgBAYAHQAVADAXANIAKAGQAnAOASAWQALANACAUQADAagKAcQgHAfgVAfQgSAdgcAYIACASQAHATADAWQAHAigJAnQgIAjgVAiQgUAigbAbIgCACIgwAsQgSARgiAXQABAWgKAaQgEAKgGALIgNAUQgfAwgxAaQgOALgWAJQgcANgqAKIg7AOQgeAHgbALQgYAIgaARIgOAIQgoAegWAJQgnAWgyAVQgoAQg1ATQjfBPjxBeQhoAmhoAkQgcAJgSADIgEAAQgJAAgHgCg");
	this.shape_6.setTransform(1410.561,267.6733);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AsxKCQgHgFgCgEIgBgBQgBgCADgEQACgFgCgBQgEgEgTgLQgTgKgEgEQAGgOASgKQANgIAVgIQAigSAcgmQANgPAig5QAXgiAfgmIA7hEQCDiVBXhaQB6h/BuhcQAjgcAbgPQAcgNAegBQAagDAaAGQArAKAVAQQAcARgDAcQAGAKgQAcQAWACAcgRQAZgQAYgZQBOhQAHgLIAbggIAwg2IAqguQAVgaAQgXQAMgQAPgcQAPgcANgQQAWggAegYQAQgNATgLQA3ghAzAEQAZABAZAKQAVAFAYAPIAKAIQAnASARAYQAMAPACAUQAEAbgIAdQgHAhgUAhQgTAegdAZIAGARQALATAGAXQAMAkgHApQgGAkgWAkQgWAigdAbIgDADIg1AqQgUAQgmAUQABAXgKAbIgMAWQgGALgIAJQgiAvg1AaQgQAKgXAIQgeAMgsAKQgjAGgbAHQgfAIgcALQgYAKgbASIgNAJQgqAjgVAJQgnAZg0AWQgpAQg4AUInlCpQhuAkhtAgQgeAIgTACQgMAAgIgEg");
	this.shape_7.setTransform(1392.3279,279.2031);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("As9KVQgNgBgIgFQgHgGgBgFIgBgDQgBgCAFgGQADgGgCgDQgCgFgUgPQgUgNgDgGQAGgPATgJQANgIAXgIQAjgSAdgnQAMgPAkg9QAXgkAggnIA9hHQCKieBYhbQB/iEB0heQAlgeAcgNQAegNAfABQAcAAAbAJQAuAPAVAWQAbAZgIAkQACARgXAkQAYAEAegQQAagQAagaQBLhPASgVIAhgoIAyg4IAqgxQAWgbAQgYQAMgRAOgeQAPgeANgRQAWgiAfgZQAQgOATgLQA6giA1AHQAbACAZANQAVAIAZASIAKAIQAmAXASAaQALAQADAUQAFAdgHAeQgGAigUAjQgTAggfAZQAGAIAEAJQAQAUAJAXQASAlgGArQgFAmgXAlQgWAkggAaIgEADQgZASghAWQgVAPgrARQACAZgMAbQgFAMgIALQgHALgJAKQgkAvg6AYQgRAKgYAHQggALgvAJQgkAGgbAHQgiAIgcAMQgYALgbAUIgOALQgrAngUAJQgnAbg2AXQgqARg7AVQj1BUkGBRQhyAhhzAdQgeAHgTAAIgDAAg");
	this.shape_8.setTransform(1374.071,290.6911);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AtdKkQgNgCgIgHQgHgHgBgHIgBgDQAAgDAFgHQAFgIgBgEQgCgIgUgRQgVgQgCgIQAGgQAUgJQANgIAZgIQAlgRAegpQALgOAmhCQAXgmAhgpIA/hKQCQilBahcQCEiKB5hgQAngfAdgMQAfgMAiADQAeACAcAMQAwAVAUAbQAaAggMAtQgCAYgdAsQAZAHAggRQAbgQAbgbQBKhMAbghIAogvIAzg7IAsgyQAXgdAPgZQALgSAPggQAOggAMgSQAWgkAggaQARgOAUgMQA9giA3AJQAbAEAaAQQAVAJAZAVIALAKQAmAbASAcQALARADAVQAGAegGAeQgEAlgVAkQgUAhgfAaIAOARQAUAUAMAYQAXAmgEAtQgDAogYAnQgYAlgiAaIgEACQgbATglAUQgXAMgvAQQACAagMAcQgGAMgIAMQgIALgKAKQgoAug+AXQgSAJgaAHQghAKgxAIQgnAGgbAHQgjAIgcANQgZAMgcAXIgOALQgsArgTAKQgoAeg4AYQgpASg+AVQkBBXkQBKQh4Afh5AZQgbAGgTAAIgIgBg");
	this.shape_9.setTransform(1355.825,302.2115);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AuAKzQgOgDgIgJQgHgIgBgIIAAgDQABgEAGgJQAGgJAAgFQgBgKgWgVQgVgTgBgLQAGgQAVgJQAOgHAagIQAngQAfgsQAKgNAnhGQAXgoAjgrIBBhNQCXitBaheQCKiOB+hiQApggAfgMQAggLAkAFQAfAEAeAPQAyAbAUAhQAZAogQA0QgHAfgjA0QAaAKAigRQAcgPAdgdQBHhKAlgrIAvg4IA1g9IAsg0QAYgeAPgbQALgSAOgiQAPgjALgSQAWgmAhgbQARgPAVgMQA/gkA5ANQAcAGAbASQAVALAaAYIALAMQAlAfASAeQALASAEAVQAIAfgFAgQgEAmgVAlQgUAkggAaQAKAIAIAIQAYAVAPAYQAcAogCAvQgBApgaApQgYAmglAaIgFACQgdATgoARQgZAMgzAOQADAbgOAdQgGAMgJAMQgIALgLALQgrAthDAWQgTAIgbAGQgjAKgzAHQgpAGgcAGQgkAJgdAOQgZAMgcAZIgOANQgvAwgQAKQgpAgg6AZQgqAThBAWQkMBZkaBEQh+Ach+AWQgXADgQAAIgSgBg");
	this.shape_10.setTransform(1337.8567,313.7403);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AupLCQgOgFgJgKQgHgJAAgJIABgEQAAgFAIgLQAHgKAAgGQABgMgXgYQgXgXABgMQAGgSAWgJQAOgGAcgIQAogPAgguQAJgMAqhMQAXgoAjgtQAXgcAtg0QCdi2BchfQCOiTCEhkQArghAggLQAigLAlAIQAhAGAfATQA0AfAUAoQAZAvgVA9QgKAlgqA9QAbAMAkgSQAdgPAegeQBGhIAug2IA2g/IA2g/QAfgkAPgTQAYgfAPgcQALgTAOgkQAOglALgTQAWgnAhgdQATgQAVgMQBBglA8ARQAdAHAbAUQAVAOAbAbIALANQAkAjATAgQALAUAFAVQAIAggEAgQgDAogVAnQgUAlghAbIAVARQAdAUATAZQAhAqgBAwQAAAsgbApQgZAngoAaIgEADQggARgrAQQgbALg3AMQAEAcgPAeQgHAMgJANQgJALgMAKQguAthIAVQgTAIgeAGQglAIg1AHQgqAFgcAGQgmAJgdAPQgZANgdAcIgPANQgwA1gPAKQgpAig8AbQgrAThEAXQkXBbkkA9QiDAbiFASQgSACgOAAQgQAAgLgCg");
	this.shape_11.setTransform(1320.5483,325.2896);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AvTLQQgPgFgIgMQgIgKABgLIABgEQABgGAJgMQAIgMABgHQACgOgYgbQgYgaACgPQAGgSAYgJQAOgGAegIQApgOAhgwQAIgLArhRQAYgqAkgvQAXgcAvg3QCji9BehgQCTiZCJhmQAtgiAhgKQAkgLAnAKQAiAJAhAWQA2AlAUAtQAYA3gZBFQgPAsgwBFQAcAOAmgRQAegPAgggQBDhFA5hBIA8hHIA4hCQAggmAPgTQAYggAPgdQAKgTAOgnQAPgnAKgTQAVgqAjgeQATgQAWgNQBEgmA+AUQAdAIAdAYQAUAPAbAfIAMANQAkAoASAiQAMAVAFAVQAJAigDAhQgCAqgVAoQgUAngiAcQANAHAMAJQAhAVAWAZQAmArACAzQABAtgcArQgbAogqAYIgFADQgiATguAOQgcAJg8AKQAEAdgPAeQgIAOgKAMQgJAMgNAKQgxAshNAVQgUAGgfAGQgnAHg3AGQgtAFgcAGQgnAJgeAQQgZAOgeAeIgOAPQgyA5gOAKQgpAlg+AcQgsAUhHAXQkiBdkuA3QiJAYiKAPQgPACgNAAQgUAAgOgFg");
	this.shape_12.setTransform(1303.269,336.8287);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Av8LfQgQgGgIgOQgIgMABgLIABgFQACgHAKgOQAKgNABgIQADgRgZgdQgYgeADgRQAFgSAZgJQAPgGAfgHQArgOAigzQAHgJAthWQAYgrAlgxQAXgdAxg5QCqjFBfhiQCYieCOhoQAvgjAjgKQAlgJApAMQAkAKAiAaQA5AqATA0QAXA9geBOQgSAzg3BNQAdARAogSQAggOAhgiQBBhCBChMIBEhQIA5hDQAhgoAPgTQAZgiAOgeQAKgUAOgpQAOgpAKgUQAWgsAjgfQATgRAXgMQBGgnBBAWQAeAKAdAaQAVASAcAhIAMAPQAjAsATAlQALAVAGAWQAKAjgCAiQgBAsgVApQgVApgjAcIAdAQQAlAVAaAaQArAsADA1QADAvgdAsQgcApgtAZIgFADQgkASgxAMQgfAIhAAJQAFAdgQAfQgIAOgLANQgKAMgNAKQg1ArhRAUQgVAGghAFQgoAGg6AGQguAEgdAGQgpAJgeARQgaAPgeAgIgOAQQg0A9gMALQgqAnhAAeQgsAUhKAYQkuBgk4AwQiOAWiQALIgXABQgaAAgPgGg");
	this.shape_13.setTransform(1285.992,348.3895);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AwmLuQgQgIgIgPQgKgQAFgPQACgIAMgPQAKgPACgJQAEgTgZghQgaggAFgTQAEgUAbgJQAPgFAhgHQAtgNAjg1QAFgIAvhbQAYgtAngzQAWgdAzg8QCwjMBhhkQCdijCUhqQAxgkAjgJQAngJAsAPQAlAMAjAdQA7AwATA5QAWBFgiBWQgXA6g8BVQAeATAqgSQAggOAjgiQA/hBBMhXICFidQAjgpAOgUQAagjAOgfQAJgVAOgrQAOgrAKgVQAghHBFglQBIgoBDAZQAfAMAeAdQAUATAdAlQAsA6AWAtQAcA8AAA3QgBAugUArQgVArglAcQBAAbAnAlQAxAuAFA2QAEAxgeAuQgdApgvAZQgoAVg4ALQghAGhFAHQAGAegRAgQgQAcgdAWQg3ArhXASQgwALhtAJQgxAEgdAGQgrAJgeASQghAUgmAwQg2BBgLALQgqAqhBAfQguAVhMAYQnKCPnbAYIgTABQgeAAgSgIg");
	this.shape_14.setTransform(1268.6952,359.937);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AxmNbIgRgEQgSgGgKgMIgCgBQgMgOACgNQAAgEAEgHIAFgIQAFgJABgHIAAgEQgBgIgFgNQgIgKgOgOQgOgLgHgLQgKgOACgNQACgRAQgKIAPgHIAQgGIAegLIAEgCQALgEAKgJQAggXAfgsIAMgWIA1hTIAPgUQAZglAogoIAGgFQAhgeAvgyIAEgEQAigkAmgkIBQhOQAUgUAVgSQAbgWARgSIA5gzIAmghIAUgSIAjgeIAhgfIAcgbIAcgbQAbgZAegVQAZgUAfgTIA6gnIAogeIAMgJQAegWAZgRIAVgLQAUgIAVgBQAUgCAYAEIAXAEQAcAKAgAQQBAAmAdAsIADAEQAJAPAEAPQAIAkACAsQgBAPgDAOQgCAWgQAWQgVAbgpAkIgBACQAQAJAmgPIAHgDIAZgMQAagPAbgXIAnghQBDgtA/hEQArgtA/huIAUgeQAWgjAOgSQAIgKAHgHQATgUARgQIAQgUQAQgRATgpIAGgLQAPgiANgWQAihDA+gyIAPgKQBNg8A9AZIAHAEQAdAPAZAmQASAYAXAqIAEAHQAhBAARAwQAMAnAGAfQAFAfgFAcQgCANgDANQgMAigRAhIgIANQgQAZgRATQgMANgNAKIAsAiQAVASAVAVIAKAKQARAUALASQAUAiAAAnIgBAEQAAAkgSAlQgIAPgLAPQghAug0AeQgtAbg8APQgnAMhIALQAAAUgIAUIgFAMIgHANIgBABIgFALIgHANQgJASgPARQgQASgVAQQgZAWgjAPQgSAHgVAHQgRAFgXAEQgtAKg+AGIgcADIhJAGIgMACIgDABIgLACQgHACgHAEQgHACgHAFQgUAKgRANQgNAJgPAOQgZAXgbAdIgFAGQgeAfgUARQgRAQgIAEQgMAIgMAGQgNAKgTAGIgkAOIgfAMIgMAFQgYAJgaANIhFAhIgBAAQgjASgiAOQgjARgjANQgkAPglAMQgiAKgiAGQghAFgegBQgeAGgigGIhuAAQgiALgnAIQgmAHgoAFQiqAWirANIgdABQgQAAgNgBg");
	this.shape_15.setTransform(1244.1398,369.8245);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ay2PDIgUgDQgUgFgMgKIgBgBQgPgMgBgLQgCgDADgFIACgGQACgHgBgGIAAgEIgLgUIgZgRIAAAAQgQgIgKgKQgMgOABgQQABgTASgMQAGgEAKgEIASgHQAOgGARgJIAEgDQAKgFAKgMQAggeAjgxIAPgWIBAhYIARgVQAfgkAxgpIAGgFQAtgeAygyIAFgEQAlgjAxgpIBchQQAYgUAagSQAigWASgRQAhgbAigZQAUgRAYgRIAYgTQAWgQASgPQAUgQATgSIAegeIAfgeQAegbAigWQAbgUAngTQAlgUAdgUQAZgPAVgRIANgLQAegZAagXIAVgPQAUgNAWgDQAWgGAZABIAaACQAeAGAlALIABAAQBGAeAoAjIADADQANALAFANIAcBIQAEAOAAANQAGATgPANQgUAQgwAZIgCABQAFABAmgQIAJgEIAbgNQAegQAggWIAtggQBVgnBDhFQAzgzAyiBIATgiQAVgpAOgUQAJgLAJgGQAVgTAXgLQALgIAJgIQAVgNAZgoIAIgLQASghASgaQAnhGBDg/IAPgNQBWhQA7AcIAGAFQAcATAUAuQAOAdAUAvIACAJQAaBJAOA2IANBOQAEAjgKAeQgDAOgGAMQgSAlgVAiIgJANQgTAdgTAUIgaAbQAQAWAUAVQAUAUAVAaIALAMQASAYAKAUQATAmgFArIgBAFQgDAngXAoQgJARgMAQQgnAzg5AjQgyAfhAAVQgsAShMAQQgDAUgLAVIgHAMIgIANIgBACIgEANIgFAPQgHAUgMATQgNAWgSAUQgVAegkATQgSAKgXAIQgTAHgaAGQgyANhEAIIgeADIhRAGIgOABIgEABIgLADQgIACgIAFQgGAEgHAGQgUANgTAPIgeAbIg7A6IgGAFQgiAggZAPQgUAQgKACIgbALQgNAJgXAAQgUADgUAGQgQAEgTAHIgOAFQgaAKgdAPQghASgmAaIgCAAQgkAaghARQgjAYgkASQgmAUgpAOQgnAPglADQgkAEgggIQgcAEgkgSQg1gNg9gHQgiARgsAKQgpAJguAGQi9AYi+ASQgbADgWAAIgQAAg");
	this.shape_16.setTransform(1219.6171,379.7592);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A0uQpQgWgDgOgJIgCgBQgRgJgFgJQgCgCABgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIgCgKIgCgDQgHgFgHgPQgLgCgSgIQgTgFgMgKQgOgNAAgSQAAgWATgNQAHgFALgEIATgIQAQgHAQgNQACAAACgEQAKgGAKgPQAgglAng0IARgZQAdglAtg3IAWgVQAigkA7gpIAIgFQA4ggA1gwIAFgEQApgjA6gsIBqhUQAagTAggSQAqgXARgQIBOg1QAWgRAdgSIAbgTQAagRAUgQQAXgRAUgTQAPgOASgTQAUgUAOgOQAhgdAngXQAdgTAtgUQAsgUAggUQAcgQAXgUIAPgMQAegbAageIAWgTQAVgRAWgGQAWgJAcgCQAOgCAOAAIBLAKIABAAQBNAWAyAZIAEACQAPAIAJAKQAOAYAfAoQAGALAEAJQAhgQAhgVIA0ggQBmgeBIhIQA7g4AliTQAIgUAJgTQAVgxAOgUQAJgMALgGQAZgSAbgFIAZgNQAbgJAfgmIAJgLIAsg/QAshJBIhMIAQgPQBehmA5AgIAGAHQAaAWAPA3QAMAhAOA1IACAKQATBTAJA7QAFA0AEAjQADAmgPAgQgFAOgJAOIgvBJIgKAOQgXAggUAWIgcAeQALAaARAZIApA3IALAOQATAcAJAVQASAqgJAwIgBAGQgHApgbAsQgLASgOARQgtA4g9AoQg2AlhEAaQgyAXhQAUQgHAWgOAVIgIAMQgEAHgEAIIgCACQgCAHgBAHQgDAIgBAJQgEAWgIAXQgKAZgPAYQgSAkglAYQgSANgZALQgVAIgbAIQg5AQhJAJIghADQgzAEgnABIgQACIgDAAQgHABgGADQgIADgIAGQgHAEgHAIIgnAjIghAeQgfAfgiAfIgHAGQgmAhgfAOQgWAOgNABQgPAFgPACQgNAHgagEQgXgBgVAFQgTACgUAHIgQAFQgeALgfASQgiAVgnAhIgCABQglAiggAUQglAfglAWQgoAZgtASQgrARgoACQgnACghgQQgbADglgeQg2gYhAgQQgjAXgxANQgrALg0AGImiAyQgoAFggAAIgWgCg");
	this.shape_17.setTransform(1196.9,389.6784);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A2TSSQgZgCgQgHIgCgBQgUgHgHgGQgEgBgBgDQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBgBIgHgGIgDgDQgJgEgJgPQgMACgUgFIgBAAQgUgCgOgKQgRgMgCgVQAAgYAUgPQAIgFALgFIAWgJQAQgJARgPQABgBADgEQAJgIALgRQAegsAsg5IATgaQAigoA0g4IAYgVQAoglBEgoIAIgGQBEghA4guIAGgFQAsgjBEgwQBHg0AxgiQAdgTAkgSQAzgXAQgQIBYg1QAZgRAhgTIAfgTQAegTAVgQQAagSAWgUQAQgPAUgXQAVgXAQgOQAkggAsgWQAegTA1gUQAygUAigUQAfgRAagXIAQgOQAegcAcgmIAWgWQAVgWAWgIQAYgMAegGIAdgEIBTABIABAAQBUAPA9AOIAEACQATAEAKAHQAOAPAhAcIAZgMQAngSAngWIA7gfQB3gXBMhJQBFg+AWimIARgqQASg5AQgVQAKgNANgFQAagQAigBIAcgJQAigFAkglIALgLQAageAbgkQAwhNBNhYIAQgRQBoh8A1AkQAEADADAFQAXAaAKBAQAJAlAKA6IABAMQAMBcAFBBQABA6ADAlQADApgUAjQgHAPgLANQgfAngaAlIgLAQQgaAjgVAXIgfAhQAFAgAQAcQAQAbAZAlIAKAPQAUAgAJAXQAQAugNA0IgCAHQgKAsgfAvQgNAUgPARQgyA+hBAtQg7AqhJAfQg3AchUAaQgKAVgRAWIgKANQgFAHgEAIIgCAEQgDAHgBAIQgBAIAAAKQAAAZgGAZQgHAdgMAcQgOAsglAcQgUAQgaAMQgWALgfAIQg/AUhOAKIgkAEQg2AFgsAAIgRABIgEAAIgOAEQgJAEgIAIQgHAEgHAKIgoAoIgjAjQgiAigmAgIgIAGQgqAigkAMQgYANgQAAQgRADgQABQgOAGgdgJQgZgFgXADQgVABgWAHIgSAFQghAMgfAVQgmAYgoAoIgBABQgnAqggAYQglAlgmAaQgqAfgwAVQgwAVgrgBQgrAAgigWQgaABgngrQg1gihEgYQgjAcg2AQQgvANg6AHQjjAajkAeQgsAGgjABIgYAAg");
	this.shape_18.setTransform(1174.3133,399.6287);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Am7UCQgvgCgkgdQgXgBgpg2Qg2gvhHggQgjAig8ATQgxAPhAAHQj2Adj4AjQguAHgoADIgZAAQgcAAgSgGIgCAAIghgJQgFAAgCgCIgGgBQgHAAgFgDIgEgCQgMgCgJgRQgPAGgVgCIgBAAQgWABgRgJQgTgLgDgYQgCgaAXgRQAHgFANgGIAXgKQASgKAQgTQACAAACgGQAJgJALgUQAegyAwg9IAVgcQAngtA6g3IAbgWQAtglBNgpIAKgFQBPgiA7guIAGgEQAwgjBNgzQBRg4A1ghQAggTApgTQA7gXAQgOIBjg2QAagRAmgUIAigUQAigTAWgRQAegTAYgWQAQgQAXgZQAXgZARgQQAmgiAxgYQAggSA9gUQA4gTAkgVQAjgSAcgZIAPgQQAhgeAdgtQALgOAKgMQAWgaAWgLQAZgPAggJQAPgFARgDQAigBA4gFIABAAICiALIAFABQAXABAMAEIAXAPQAEgKASgIIALgFIAkgQQAqgTAsgWIBBgeQCJgQBRhLQBNhDAJi4QAHgZAIgXQARg/ARgWQAKgOAPgFQAdgPAnAEQARgBAQgEQAngBAqgkIANgKQAdgdAfgpQA2hQBRhlIARgTQBwiRA0AnQADAEADAGQAWAdAFBJQAFAqAGA/IgBANQAFBmACBGQgDBBADAmQABAtgZAlQgJAPgMAOQgmApgdAmIgNARQgdAmgWAYIghAlQAAAlANAgQAOAeAbAqIALARQAUAkAIAZQAQAxgSA5IgCAIQgNAugkAzQgPAVgQATQg3BChGAyQhAAvhNAkQg9AihYAeQgNAXgUAWIgLAOQgHAHgEAJIgBADQgEAJAAAIQgBAJACALQADAbgEAdQgDAggKAgQgKAzgmAhQgTASgdAPQgYAMghAKQhFAXhTALIgnAEQg6AFgwgBIgTABIgEABQgIABgHADQgKAFgIAJQgHAFgHAMIgqAuIgkAmQglAmgrAhIgIAGQgvAjgpALQgaALgSgBQgTACgSgCQgOAEghgOQgagIgZABQgXAAgZAHIgTAGQgkAMghAYQgoAbgpAvIgBACQgoAxgfAcQgmAsgnAeQgsAlg0AXQgwAWgrAAIgHAAg");
	this.shape_19.setTransform(1151.7688,410.4192);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AngV1QgxgEgmglQgWgCgrhDQg1g5hLgpQgkAohAAWQg1ARhGAHQkJAekLApQgxAIgrAEIgcACQgeABgUgEIgCAAIgngEIgKAAIgIABQgKACgHgCIgFgBQgPgCgKgRQgQAKgXAAIgBABQgZADgTgIQgVgLgEgaQgDgcAYgTQAIgGAOgGIAYgLQATgMARgVIADgHQAJgKALgXQAeg5A0hCIAXgdQAtgxA/g3IAfgXQAxgkBXgpIAKgGQBbgjA+gsIAHgFQAzgiBXg3QBZg7A7ghQAigTAugTQBDgYAQgNIBtg2QAdgRAqgVIAlgVQAmgUAYgQQAhgVAZgXQASgQAZgdQAYgcASgQQApgkA3gZQAhgSBEgUQA+gUAngVQAmgUAdgaQAKgIAIgJQAhghAegzIAWgeQAWgfAWgNQAagTAigMQAQgGASgEIBigOIABgBQBigBBRgFIAGAAQAagCAOABQAYAIBMAhIAgASQAnAIgMgVQgPgfhPgSIgCAAQgqgjApgTIAMgFIAmgRIBegqQAkgQAkgOQCagIBWhOQBWhIgFjKQAGgcAIgYQAQhHARgXQAMgOAQgFQAggOAsAJQATABASgCQAuACAvghIAPgKQAggdAkgtQA7hTBVhyIASgWQB5imAxAqQADAFADAHQAUAhAABRQACAvABBEIgBAPIgFC7QgGBIACAnQAAAxgdAnQgLAPgPAPQgsAqggAnIgOASQghAqgWAZIgkApQgGApAMAkQAMAhAcAvIALAUQAWAnAHAbQAOA1gWA+IgDAIQgQAxgoA3QgQAWgSAUQg9BGhKA4QhFA0hRApQhDAohbAiQgRAYgXAXQgIAHgEAHQgIAIgEAJIgCAEQgDAJAAAJQAAAJACAMQAGAeAAAfQAAAkgHAlQgGA5gnAmQgUAUgfASQgZANgjAMQhLAahZANIgpAEQg/AGg1gCQgNgBgHABIgFABQgIABgIAEQgKAFgIAKQgHAGgIAOQgUAagWAZQgRAVgVAVQgoAqgvAiIgJAHQgzAjgvAJQgcALgUgDQgVAAgUgDQgNADglgTQgdgMgaAAQgZgCgbAGIgVAGQgmAOglAbQgpAegqA2IgBACQgpA5gfAgQgnAygoAiQgtArg4AaQgxAYgtAAIgMAAg");
	this.shape_20.setTransform(1129.7277,421.4707);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AoKXnQg1gFgngsQgUgEgthPQg1hFhPgxQgkAthFAZQg4AThMAIQkcAgkeAvQg1AIgvAGIgeACQghADgUgCIgEAAQgbgBgRABIgNADIgKADQgNAEgJgBIgGgBQgSAAgLgSQgSANgYAEIgBAAQgbAHgVgIQgYgKgFgcQgEgfAZgUQAIgHAQgGIAZgNQAVgNAQgYIAEgIQAIgLALgbQAdg/A5hGIAZgfQAyg1BFg3QAQgMASgLQA2glBggpIALgFQBmglBCgrIAHgEICYheQBig9A/giQAlgSA0gTQBKgYAQgMIB3g3QAfgRAvgWIApgVQApgVAagRQAkgVAbgZQASgRAbgfQAbgfATgRQArgnA8gZQAkgSBLgVQBEgUApgVQAqgUAfgeIASgSQAigjAfg6QAMgTALgPQAXgjAVgPQAbgWAkgQQARgHATgGIBqgWIABAAQBqgJBbgQIAGAAIAtgIQAbADBbAfIAnAQQAvAFgLgeQgOgqhWgeIgCABQg1gsApgUIAMgGQATgJAXgJIBmgqQAngQAogOQCrgBBbhPQBehOgTjdQAGgeAHgaQAPhOASgXQAMgQATgEQAhgNAyAOQAVADAUAAQA0AGA1ggIARgKQAkgcAogxQBAhWBaiAIASgXQCCi8AuAuQAEAFACAIQASAlgFBaQAAAzgEBKIgCAPIgQDLQgKBOABApQAAA0gjApQgMARgRAOQg0AsgiApIgQATQgkAtgXAaIgmAsQgMAvAKAnQALAkAdA1IAMAVQAWArAGAdQAOA5gbBCIgDAJQgUA0gsA6QgSAXgUAXQhBBKhPA9QhKA5hVAuQhJAtheAoQgVAYgZAXQgKAIgFAHQgIAIgFAJIgBAFQgEAKABAKQAAAKAEANQAJAgADAiQADAngFApQgCBBgnApQgVAYghATQgbAQglANQhRAeheANQgWADgWACQhCAGg6gDIgWAAIgFAAQgJACgIAEQgLAGgIAMQgHAGgIAPQgUAegXAcQgSAXgXAXQgrAtgyAjIgKAHQg4AlgzAHQgfAJgXgEQgXgBgVgGQgNACgogYQgfgPgcgCQgbgEgeAHIgWAGQgqAPgmAdQgrAigrA9IgBACQgqBBgeAjQgoA5gpAnQgwAwg7AdQgzAaguAAIgQgBg");
	this.shape_21.setTransform(1108.2506,432.5383);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ao3ZaQg4gIgogzQgTgFguhbQg2hRhTg5QgkAzhKAcQg7AVhRAIQkwAikxA0IhqARIggADQgkAEgXAAIgDAAQgeABgUAEIgQAEIgMAFQgRAHgKAAIgHAAQgVABgLgTQgUARgbAHIAAAAQgeAKgXgHQgbgKgFgfQgGghAbgWQAJgHAQgHIAcgOQAVgOAQgbIAEgJQAIgNALgdQAdhGA9hKIAcggQA2g6BLg3IAlgYQA7gkBpgqIANgFQBxglBEgrIAJgEICkhhQBshBBDggQAogTA5gSQBSgaAQgKQA7gYBGgfQAhgRAzgYIAtgWQAugVAbgRQAmgXAegbQASgRAegiQAdghATgSQAugpBBgaQAlgSBTgUQBKgUAsgWQAsgWAigfQALgKAJgLQAjglAghAIAWgmQAXgnAXgSQAagZAngUQASgIAUgIIBygdIABgBQBwgRBmgZIAHgCIAzgNQAegEBpAeQAcAKASAEQA4ACgKgnQgNg1hfgpIgBABQhBg1ApgVIAOgHIAtgTIBugrQAqgPArgOQC9AHBfhSQBmhTggjvQAFghAGgcQAPhVASgYQANgRAVgDQAkgMA4ATQAXAFAWACQA5AJA6geIAUgKQAngaAtg2QBEhaBfiMIATgaQCLjRArAyQAEAGACAIQAQApgKBiQgDA4gIBPIgDARQgRCCgKBYQgOBUAAAsQgBA2goAsQgOARgTAPQg6AtglAqIgRAUIhABMQgWAZgSAXQgRAzAIAsQAIAnAfA5IAMAXQAXAvAGAfQAMA9geBHIgFAJQgWA2gyA+QgTAZgVAYQhHBPhUBBQhOA/hZA0QhOAxhjAtQgYAZgcAYQgLAIgFAGQgJAJgFAKIgCAFQgEALACALQAAAKAGAOQAMAjAGAlQAGAqgCAtQABBIgnAvQgVAagkAVQgcARgoAPQhXAhhjAPIgvAFQhGAGg+gEQgQgBgIABIgFABQgKABgIAFQgMAGgJANQgGAIgIARQgUAggYAfQgUAYgXAaQguAwg2AlIgLAGQg8Amg5AGQghAIgZgGQgZgCgWgIQgOAAgsgdQghgTgegDQgcgFggAHIgXAGQguAPgoAhQgtAkgsBFIgBACQgrBJgeAnQgoA/gqArQgyA1g+AgQg2AdgwAAIgUgBg");
	this.shape_22.setTransform(1087.0208,443.5842);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ApkbMQg8gKgpg6QgRgGgxhoQg1hchXhBQgkA4hPAfQg+AXhYAJQlCAjlFA6IhxATIgiAEQgmAFgYACIgEAAQghAEgXAGIgSAHIgQAGQgTAJgMABIgIABQgXACgNgUQgVAVgdAKIgBAAQgfANgagHQgdgIgHgiQgGgkAcgXQAJgHASgIQATgJAKgGQAXgQAQgeIAEgKQAHgOALggQAdhMBBhPIAegiQA7g9BRg4QAUgMAVgMQA/glBzgpIANgFQB9gnBHgpIAJgEICyhlQB1hDBIghQAqgTA+gSQBagaAQgJQA/gYBMggIBbgpIAxgXQAxgWAdgRQApgYAfgcQAUgTAfgkQAfgkAVgSQAxgtBFgaQAogRBZgVQBRgUAugWQAwgXAkgiIAVgWQAjgnAhhIQAMgXALgSQAYgsAWgUQAbgcApgXQATgKAWgJIB5glIABgBQB4gZBvgjIAIgCQAkgMAUgIQAhgJB5AcQAfAIAWADQBAgBgJgvQgNhBhmg0IgBABQhNg+AqgWIAPgHQAVgKAagKIB2gsQAugPAugNQDPAOBkhUQBuhYgukCQAFgjAFgeQAOhcATgZQANgSAXgDQAngKA9AXQAZAIAYADQA/ANBAgdIAVgJQArgZAyg6QBJheBjiZIAUgcQCTjmAqA1QADAGACAKQAPAsgPBrQgHA9gMBUIgEASQgZCMgOBdQgRBbAAAtQgDA6gsAuQgQASgWAPQhAAvgoArQgKALgIAKIhFBRQgXAagTAZQgXA4AGAvQAHAqAgA/IAMAZQAYAzAGAgQAKBBgiBMIgGAKQgZA5g2BBIgrAzQhNBUhYBHQhTBDhdA5QhUA3hmAyQgcAZgfAZQgMAJgGAGQgJAJgFAKIgDAGQgDALACAMQABALAHAPQAPAlAIAoQAKAuABAxQAFBPgoAzQgWAdglAXQgfATgqAQQhdAlhoAPQgZAEgZACQhKAHhDgFIgZgBIgFABQgKACgJAFQgNAHgJAOQgGAIgJATQgTAkgaAhQgUAbgZAbQgxA0g5AlIgMAHQhAAng+AEQgkAGgbgGQgbgEgYgKQgOgBgvgiQgkgWgfgGQgegGgiAHIgZAHQgxAQgqAjQgvAogtBLIgBADQgsBRgdAqQgqBGgrAvQgzA7hCAjQg4AfgyAAQgMAAgLgCg");
	this.shape_23.setTransform(1065.8534,454.6564);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AqSc+Qg/gLgqhCQgQgHgyh1Qg2hmhahKQglA+hUAhQhBAZhdAKQlWAklXBAIh4AVIglAGIhCAKIgEAAQgkAGgZAIIgWAJIgSAJQgWALgOACIgJABQgaADgOgUQgXAZgeAMIgBABQghAPgdgGQgfgIgIgkQgHgmAdgZQAKgIATgIQAUgKAKgGQAYgRAQghIAEgLQAHgPALgjQAchTBGhTIAggkQBBhBBWg4QAVgNAXgLQBEglB8gpIAOgGQCJgoBKgnIAKgFQBAgiB/hGQB9hHBNggQAugTBCgSQBigaAQgJQBDgXBSghIBigqIA0gXQA1gXAfgSQAsgYAhgeQAUgTAigoQAhgnAVgSQA0gvBLgbQApgRBhgVQBWgUAxgXQAzgXAmglQAMgLAKgMQAkgqAihOIAXguQAZgvAWgXQAcggArgaQAUgLAXgLQAqgQBWgdIACgBQB/ghB6gtIAIgDQAogPAVgLQAlgOCHAZQAkAIAYABQBIgDgIg4QgLhNhug+IgBAAQhYhHAqgWIAQgHQAVgLAdgKQA+gYBAgVQAxgQAygMQDfAWBphWQB3heg8kUQAEgmAFgfQANhkATgaQAPgSAYgDQApgJBDAcQAbAKAaAFQBGARBFgbIAXgKQAugYA3g+QBOhhBoimIAUgfQCcj7AnA5QADAHACAKQANAwgUB0QgKBBgRBZIgEAUQggCVgSBjQgVBigBAuQgDA+gyAwQgRASgYAQQhHAwgrAtQgLALgJALIhIBVQgZAcgUAbQgdA8AFAzQAFAuAhBEIANAaQAZA3AEAiQAKBFgnBQIgGALQgdA7g6BFQgWAcgYAaQhSBYhdBMQhYBJhhA+QhaA9hqA2QgfAagiAaQgNAIgGAHQgKAJgGALIgCAHQgEALADANQABALAIARQATAnALArQANAxADA1QAJBWgoA4QgXAfgnAaQggAVgsARQhkAohtARIg0AGQhPAIhHgHQgRgBgJAAIgGABQgLACgKAGQgMAHgKAQQgGAIgJAVQgUAngaAkQgVAdgaAcQg0A4g9AmIgNAIQhFAnhDADQgmAFgegIQgcgFgagMQgNgDgzgmQgmgbghgGQgggIgkAHIgbAGQg0ARgsAmQgxArgtBTIgCADQgtBZgdAtQgqBNgsA0Qg1BAhGAmQg7Ahg0AAQgNAAgNgDg");
	this.shape_24.setTransform(1044.7144,465.713);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ArAexQhCgNgshJQgOgJg0iBQg2hyhdhSQgmBEhZAkQhEAbhjAKQlpAmlrBFIh+AYIgnAHIhHAMIgEABQgmAIgdALIgYALIgUALQgaANgPADIgLACQgdAEgOgVQgZAdgfAPIgBABQgkASgfgFQgigIgIgnQgJgoAfgaQAKgJAUgJQAWgKAKgHQAZgSAQgkIAEgMQAGgQAMgnQAchZBKhXIAhglQBGhGBdg4IAvgZQBJglCFgpIAPgFQCUgpBNgnIALgFQBEghCIhKQCHhKBRggQAwgTBIgSQBpgbAQgHQBIgXBYghIBpgsIA3gYQA5gXAggSQAvgaAjggQAVgTAkgqQAjgqAWgTQA2gyBRgbQAqgRBpgVQBcgUAzgXQA3gZAogmQANgMAKgNQAlgsAjhWIAXgxQAZg1AXgZQAdgiAsgdQAWgOAYgMQArgTBdghIABgBQCGgpCEg3IAKgEQArgSAXgOQAogUCWAXQAnAHAcAAQBRgGgIhBQgKhYh1hJIgBAAQhkhQArgXIAQgIQAXgLAegLQBCgYBEgVQA0gQA1gMQDxAdBuhYQCAhjhKkmQADgpAFghQAMhrATgaQAPgUAbgDQAsgHBIAhQAdAMAcAHQBMAUBKgZIAagJQAxgYA7hCQBThkBsizIAVghQClkRAlA8QADAIACALQALAzgZB9QgNBGgWBfIgFAVQgnCfgWBoQgYBogCAwQgFBBg2AyQgTATgaAQQhOAyguAuIgVAXIhMBaQgbAegUAcQgjBCADA3QADAwAiBJIAOAdQAZA7AEAjQAJBJgsBVIgGALQggA+g+BJIgyA4QhXBdhhBRQhdBOhmBDQhfBChuA7QgiAbglAaQgOAJgHAHQgLAKgGALIgCAHQgEAMAEAOQABAMAJARQAWAqAOAuQAQA0AGA6QANBdgpA8QgXAigqAcQghAWguATQhqAshyARQgcAFgcACQhSAIhMgIQgSgBgKAAIgGABQgMACgKAGQgNAIgKARQgGAKgJAWQgUAqgbAnQgVAfgcAeQg3A8hBAnIgOAHQhJAohIACQgoADgggJQgfgGgbgPQgOgEg2grQgogegigIQghgJgoAGQgOADgOAEQg4ASguApQgzAuguBaIgCADQgtBhgdAxQgrBUgtA3Qg3BGhJAoQg+Ajg2AAQgPAAgOgCg");
	this.shape_25.setTransform(1023.6181,476.7611);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EgLuAgjQhGgPgthQQgMgLg2iMQg2h+hhhaQglBKhfAnQhHAdhpAKQl8Aol+BKIiFAbIgpAIIhLAPIgFABQgoAKggAOIgcANIgWAMQgdAPgRAFIgLACQggAGgPgWQgbAgghASIgBABQgmAVghgEQgkgHgKgpQgKgrAhgcQAKgJAVgKQAYgKAKgIQAagUAQgnIAEgMQAGgSALgpQAchgBOhcIAkgmQBLhKBig4QAZgNAagMQBOglCOgqIAQgFQCfgqBRgmIALgFQBHghCShNQCQhNBWggQAzgSBNgTQBxgbAQgGQBMgXBegiIBvgtIA7gYQA9gZAhgSQAzgbAkghQAWgUAmgtQAlgsAXgVQA5gzBVgcQAtgQBwgWQBjgUA0gXQA7gaAqgpQANgNALgOQAmguAkhcQAMgeALgYQAag5AWgbQAegnAvgfQAWgPAZgNQAtgWBjgnIACgBQCNgxCOhBIAKgEQAvgWAZgRQArgZClAVQArAGAfgBQBZgJgHhKQgJhjh9hUIgBgBQhvhZArgXIARgJQAYgLAggLQBGgaBIgVQA4gPA4gMQEDAlByhaQCIhphXk4IAGhPQALhyAUgbQAQgUAdgDQAugGBNAmQAfAOAfAIQBRAZBRgYIAbgJQA1gWA/hIQBYhnBxjAIAWgjQCukmAhBAQAEAIABANQAJA2geCGQgPBKgaBkIgHAXQguCogaBtQgcBwgDAxQgFBFg7A0QgVATgcARQhVAzgwAvQgNANgKAMIhRBeQgcAggVAeQgoBGABA7QABAzAkBPIAOAeQAaA/ADAlQAIBMgwBaIgHAMQgjBBhDBMIg1A7QhcBhhmBXQhiBThqBIQhkBIhyA/QglAcgoAbQgPAJgIAHQgMAKgGAMIgCAHQgEANAEAOQACANALASQAZAtARAwQATA4AIA+QARBkgqBBQgXAkgsAfQgjAYgxAUQhwAvh3ATIg6AHQhWAIhRgIQgTgCgKAAIgGABQgNACgKAHQgOAIgKATQgGAKgKAYQgTAtgcApQgXAigdAfQg6BAhFAoIgOAIQhOAohNAAQgrADgigKQghgJgcgQQgOgFg6gxQgqghgkgKQgjgLgqAHQgOADgQAEQg7ATgvAsQg1AxgvBhIgCADQgvBpgcA1QgsBaguA7Qg5BMhNArQg/Alg4AAQgRAAgQgDg");
	this.shape_26.setTransform(1002.5214,487.8211);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgMcAiVQhKgQguhYQgLgMg3iZQg2iIhlhjQgmBPhjAqQhKAfhvALQmPApmRBRIiNAcIgqAJIhQATIgFABQgrAMgjAQIgeAQIgZAOQggARgSAGIgNACQgjAHgPgWQgdAkgjAVIgBABQgpAYgjgEQgmgGgLgsQgLgtAigdQALgKAWgKQAZgMAKgIQAcgVAPgqIAEgNIAShAQAahmBThgQARgTAVgVQBQhOBog4QAagOAcgMQBTglCXgpIASgFQCqgsBUgkIALgFQBLghCbhRQCahRBagfQA2gSBSgTQB5gbAPgGQBRgVBkgkIB2guIA+gYQBBgaAjgTQA2gbAmgjQAXgVAogvQAngwAYgVQA7g2BbgcQAugQB3gWQBpgUA3gYQA+gaAtgsQANgNAMgPQAngwAlhkQALgfAMgaQAag9AWgeQAfgqAxgkQAXgPAbgPQAugZBpgsIACAAQCUg5CZhLIAKgGQAygZAcgTQAtgfC0ATQAwAGAigEQBggLgFhTQgIhviFhfIgBAAQh7hiAsgYIASgJQAZgNAigLQBKgbBMgUQA7gQA8gLQETAtB3hcQCRhvhllKIAFhTQAKh6AVgbQAQgWAfgCQAwgFBTArQAhAQAhAKQBYAdBWgXIAdgJQA4gVBEhMQBdhqB2jNIAWglQC2k8AgBEQADAJACANQAHA6gjCOQgTBPgfBqIgHAXQg1CygeBzQgfB2gEAzQgGBIhBA2QgXAUgeASQhbA0gzAxQgOANgKAMIhVBjQgeAigWAfQgtBLgCA/QgBA3AmBTIAOAgQAbBDADAnQAGBQg0BeIgIANQgmBDhHBQIg4A+QhiBmhqBbQhmBZhvBNQhqBNh1BEQgpAdgrAbQgQAKgIAHQgNAKgGANIgDAIQgEANAFAPQADAOALATQAdAvATAzQAXA7ALBCQAUBrgqBGQgYAnguAhQgkAZgzAWQh3Azh8ATQgeAFgfADQhaAJhVgKQgVgCgKAAIgGABQgOACgLAHQgOAJgKAUQgHALgJAaQgUAwgdAsQgXAjgeAiQg9BDhJApIgPAIQhSAqhTgCQgsABgmgLQgigKgegTQgOgGg9g1QgtgmgkgLQgmgMgsAHQgPACgRAFQg+ATgxAvQg3A1gwBoIgCADQgwBxgbA4QgtBhgvBAQg7BQhRAvQhCAng6AAQgSAAgRgEg");
	this.shape_27.setTransform(981.4739,498.8712);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("EgNLAkHQhMgSgwhfQgJgNg6ilQg2iVhohqQgmBVhpAsQhNAhh1AMQmiArmkBVIiTAgIgtAKQgzALghAKIgFACQguAOgmASQgSAJgPAJIgcAQQgiATgUAHIgOADQglAJgRgYQgeAoglAYIgCABQgqAbgmgDQgpgGgMguQgLgvAjggQALgKAYgLQAagMAKgIQAdgXAQgtIADgOIAShDQAahuBXhkQATgUAVgVQBWhSBtg4QAcgOAdgNQBYglChgqIASgFQC2gsBWgkIANgFQBOggClhVQCihTBfggQA5gSBXgSICQggQBVgWBqgkIB9gvIBBgZQBFgbAlgTQA4gcApglQAXgVArgzQAogxAZgWQA/g5BfgdQAwgPB+gXQBwgUA4gYQBDgbAuguQAPgOAMgQQAngyAmhrQAMghALgcQAbhCAXggQAfgtAzgnQAYgSAcgQQAwgbBvgxIACgBQCbhACjhVIALgGQA1gdAegWQAxglDCARQA0AFAlgEQBpgPgFhbQgGh6iNhqIgBgBQiHhrAtgZIATgKQAagMAjgMQBPgcBQgUQA+gPA/gLQElA0B8heQCZh0hzldIAEhYQAJiAAVgdQASgWAggCQAzgDBZAwQAjASAiALQBeAhBbgVIAfgJQA8gUBJhQQBihuB6jaIAXgnQC/lRAdBHQADAJACAPQAFA9goCXQgWBTgjBvIgIAaQg9C7ghB4QgjB9gFA1QgHBLhFA5QgZAUghASQhhA2g2AyQgOANgLANIhaBnQgfAkgXAhQgzBQgDBDQgDA5AnBZIAOAiQAdBHABApQAFBTg4BjIgIAOQgqBGhLBTQgdAhgeAfQhoBrhuBhQhrBdhzBTQhwBSh5BJIhaA5QgRAKgIAHQgOALgGANIgDAIQgFAPAGAPQADAOANAVQAfAxAXA2QAaA/AOBGQAYBygrBKQgZAqgvAjQgnAbg1AXQh8A2iCAVQggAFgfADQhfAJhZgKQgWgDgLABIgHAAQgNADgMAHQgPAKgLAVQgGAMgJAbQgUA0geAuQgYAmgfAjQhABHhNAqIgQAIQhWAqhZgDQguAAgogMQgkgMgggUQgNgIhBg7QgvgogmgNQgogOguAHQgRADgRAEQhBAVg0AxQg4A4gxBvIgCAEQgxB4gbA8QgtBogwBEQg9BWhUAxQhFAqg8AAQgUAAgTgFg");
	this.shape_28.setTransform(960.4121,509.9534);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EgN5Al6QhQgUgxhmQgIgPg7iyQg2ifhshzQgnBahtAwQhQAjh7AMQoCA0oFB1QhWATgxARQhKAYg5AjQg7AkgeALQg0ASgVgdQggAtgoAbQgtAegngDQgsgFgNgxQgNgxAlghQAMgLAZgLQAbgNAKgJQAfgYAPgwIAVhXQAfiNCAh6QByhsCZg9QBhgnC4gtQDCguBZgiQBQgeC+hgQCrhXBkgfQA7gSBcgSICYggQBZgVBwglQBDgYCGgyQBIgbAngTQA7geAqgmQAZgWAsg1QArg1AagWQBBg7BkgeQAygPCGgXQB1gUA7gYQBcglA2hHQAog1AnhxQAph5AhgxQAvhIBcg4QAygfB3g1QCihJCthfQBBgkAjgcQA0gqDSAPQDSAQgFiHQgGiGiUh1QiTh0AtgaQAhgTAzgRQCTgzCXgXQK+CGjmqTQAEjbAdgmQAug9CaBXQCbBWCUgtQCVgsDdmTQDemUAcBPQAcBPiKGRQiLGSgLBrQgLBriEBFQiFBHg3BAIheBrQhvCBgHBjQgEA9AoBeQArBlACA0QAEBXg9BoQgtBNhYBgQmAGhnYESQgSAKgJAHQgOALgHAOQgJATAIAVQAEAPAOAVQBKBvAfCKQAcB6grBOQgtBQh+A3QiCA6iHAWQiGAWh9gQQgXgDgLABQgTABgOAKQgQAKgLAXQgGAMgKAdQgjBihJBSQhKBThaArQhbAshdgFQhegChFgxQgNgJhFg/QgxgtgngOQg5gUhFATQhFAVg1A1Qg7A8gzB5QgyCAgaBAQgvBugxBIQg/BchXA0QhIAsg+AAQgVAAgUgFg");
	this.shape_29.setTransform(939.3664,521.0061);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EgxDAmBIgGgBIgDAAIgBgBQgkgGgNgnIgBgDIAAgBIgCgEQgLgxAighIABgBIAEgDQAKgJASgKIADgCIAFgDQAUgKAIgHIAFgEIADgEQAXgXANgnIADgNIADgJIAPg9IADgOIAEgPQAQg1AegzQAmhBA9g8IAOgOIAegcQBbhMBvgyIAIgEIAYgMIAQgIIAIgEQAkgQAwgRQA6gUBLgWIAcgIIAcgIIAEgBQB7gkBFgaIATgIIAigOIAigRIAugXQA7ghBMgoIAGgDIAjgTIAtgYQBrg2BJgbIAqgOQAfgKAkgKIAjgJIAsgLIAPgDIA7gOIAegIIAvgNQAqgMAlgMIAWgIIAtgQIAzgTIBZgiIA1gWIAHgDIAvgUIA1gZIAkgTIAKgHIAIgFQAZgQAVgRQAPgNAUgUIALgMIAXgYIABgBQAYgbAVgVIAKgKIAOgNQAZgXAfgUIAOgJQAogZAugQIAJgEQAYgJAlgJQAsgMA9gMIAfgHIArgJIAngKQAigJAbgKIAkgQQASgIAPgKQAtgbAgglQAOgPAOgVIATgdQAWgkAWgwIAag6IAIgRQAXg0AVghIABgCQAUgeAagdIAJgJQAggjAngdQAcgXAtgZQAigXAsgZIBEgoIAEgCIAFgDQA3gjBAglIAkgYQAigWAqgYIAdgRIAvgdIAWgPQAdgVA5gKIABAAQAvgLBAgDIANgBIAlgBQAeAAAdgCQARgBAPgCQBbgMAbg7QAEgJADgKQADgNABgNQAEgVgDgWQgCg1gng7QgQgbgYgZIgRgVIgTgWQgogrgRgdQgMgWALgLQANgQAWgPIASgNIACgCQAMgKARgJIAIgEQAegOAggMQAUgIAVgGQBCgTBDgNIABAAIAiACIBAAEIATABQAqACAkABQEnADAojfQAThegeiNQgGgegIggIABgrQAChJAEg0IADgTQAHgtALgUQANgUAWgIQAbgNApAIQATABAWAHQAQAEARAGIAiAMQAeALAfAJQAnALAoAGQA4AHA4gIIAKgCQATgDATgHQA1gSA6g1IASgQQAqgnArhAQA5hTBEhzIAVgiIAagrQAvhOAlg7QBaiMAWAYQAGAIABARIABABQAOAOgPBbQgDAggIAtQgGAogNAyQgHAdgKAgIgMAkIgKAeIgrB6IgFAQQhJDVgWBeIgEAUQgRBfhdBCIgDACQgJAIgLAGQhgBBg+A5IgIAHIgLALIg1A5IgbAdIgOAQQggAjgXAhQg0BJgOA7IgBAEIgCALQgNA3ATBJIAFATQALAwAGAlQADAWAAASIABAYQAAAagEAaIgDARQgHAogWApIgFAMIgOAYQgiA8g8BIIgUAYIgNAOQg7BDhABCIgNANQj3D+kCC+QhJA8hPA0IgFADQgQAKgJAIQgNALgIAMIgBABIgCAFQgGAPADARIAAABQAAANAIATIAAACQAKAaAJAcIACAGIAGATIAJAeIAOArIANAmIALAhIACAHIADAOQAZBegRBGIgGASIgEAMQgEAKgGAKQgYAvgzAoQgUARgaANIgPAGIgEACQhRAmhgASQgjAHgjAFIgJABIggADQhOAHhKgDQgggCgegDIgGgBQgQgCgLAAIgGAAQgPABgNAFIgFADQgNAGgLAOIgFAGQgHAIgIAPIgGALIgUAeIgTAbIgUAcIgbAmIgVAdIgHAIIgCAEQgSAWgTAUQguAwg1AiIgOAIIgNAIQhIAnhLAHIgLABQgWACgWgBQg1gDgugVIgMgGIgEgCQgLgDgagSIgZgOIgWgOIgLgHIgggTIgSgIQgPgIgOgFIgIgDIgFgBQghgIgjAFIgMACIgeAHIgWAIQgVAJgUALQgRAKgPANQgNAKgLALQgTASgSAWIgQAXQgZAjgYAuIgNAYIgVAsIgRAlIgnBRIgJATIgPAeQgMAZgNAXIgcAyIgTAeIgLARQgRAYgTAWIgaAdQggAggmAZIgNAJQgwAfguAMIgJACQgaAFgYgBIgQgBQg4gGgqgsQgMgKgKgOIgHgKIgIgMQgNgLgchEQgMgWgSgnIgNghIgNgeQgyhnhOhNIgKgGIgagQQgiBGhNAsIgFADIgSAJIgNAGQhFAfhjAQIgDABIgYADQlQAwlYBTQiYAliVAnIgJACIgQAFIgKACQg9ARgnAQIgEABIgRAHQg5AXguAfIgEACIgQALQgfAVgVAMIgOAHIgBABIgLAEQgMAEgKABQgVADgNgMIgDgCIgCACQgSAagVATQgOANgPAJIAAABIgCAAIgKAGQgdAPgZAAIgHAAg");
	this.shape_30.setTransform(899.3235,539.1337);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("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");
	this.shape_31.setTransform(860.1551,557.358);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("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");
	this.shape_32.setTransform(821.9135,573.0013);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EguzAnbIgGgEIgDgBQgcgNgIgoIgBgCIAAgBQgHguAagiIADgDQAIgLAPgMIAEgDQASgNAJgLIACgDQAWgZAOgoIADgJIAShDIAEgOQAPgxAYgvQAlhHA6g/IAagbQBNhNBgg2IAWgaIAMgNIAHgHQAagXAogXQA4ggBTglIAYgLIADgBICphMQAYgLAVgNIAegUIAmgZQA0gvA9giIAhgYIAngbQBrhEBUguQAbgPAdgOQAfgOAngOIAOgGIA1gTQAtgOAZgKQAwgRAWgLIAVgIIBSglQAlgQApgUIA2gcIAogYQApgXAogUIALgHIAHgEQAwgbAggXIANgKIAXgRQAYgSAYgUIALgKIA7g3IANgLQAkghAigVIAIgFQAZgQAagMQAzgbBCgSIAogMIAkgIQAugNAvgQIAjgMQAxgUAhgZQAQgKASgNQAOgJAOgKQA0gmAyhBIALgPQAXgiAYgoQATgeAQgfIAGgKQAxhYAqg0IAAAAQArg+A4g8IABgCIAFgGQAagwA7gwQANgRALgNQAVggBEgnIAtgZQAwgbAtgbIACgBQAugbAvgUIALgGQAdgOA4gJIAdgDQA+gEBNgDQAegCAYgGQAbgGAUgLQBCgeAMhBQAKgsgJgtQgBgPgEgPQgLgngdgoQghgrgMggIgHgYQgMgYAIgQQABgEADgDQARgaAdgTQANgQATgHQA6geA7gTIAggKIA/gMIAQgDIBKgCQD7AABqigQAzhMAKiGQAGgugBguQAEg9gGg4IAEgSQANhBAPgnQAPgmAVgUQANgUAQgHQAagRAlAAQAbABAhAIQAiAHAmAPQAxASAxANQAXAGAXAEQA+ALA8gQQALgCALgEQAvgPAtg/QA6hPBbh5IAbgkQAug9AmhCQBJh7Aeg8IAAgCQBAh2AYAyQARARAHA1QANAggEA1QgBAcgHAgQgGAagKAcQgSA3gaA5IgGAOIhvEWQgoBqg3BKIgCAEQgyBVhXBHIgKAIQgkAegdAbIgbAYQgpAmgcAkQg1BBgcArIgBADQgqA5gTA4QgZA2gMAoIgNAkQgLAjgBAjIAAAQQgEAngWAjIgGAMQgdA8hABWIgPAVQgzBChDBQIgLANQjkETirC9QgwBQg8A6IgVAUIgWAWIgCACQgLANgIANQgKAOgHAPIgcA1IgCAFQgFAKgCAIQgGANAAAPQgCATAGAVQAFARAKAUIAOAfIACAFQAkBYAGBKIABASIgBAhQgDA2gWAwQgKAagYANQgIAEgJADQg5AkhuAEQggADghgBIgngBQhGgChFgEIg4gGIgfgCQgQAAgPACQgSABgRAFQgQACgQAHIgvAOQgRAEgLAHQgPAGgMAMQgOANgMAUQgHALgJARIgEAIQgOAagPAZQgfA0gnAsIgTATQg1A4g6AeQgYANgYAJQgxATgvgFIgNgCQgUAKgWADQgOAFgNACQgVADgSgBQgSAAgRgCQgFAEgNgCQgPgEgWgJIgGAAQgegGgeAHIgLADQgYAGgZAMIgmAUIgeAVQgfAWgdAbIgSARQgcAcgfAjIgsA0IgXAdQgeAlgVAdIgeAsQgNAUgOATIgdAsIgUAdQgUAdgZAcIgYAbQgbAeghAaQgsAjgyAYIgIAEQgXAKgVAGQhFAXgygQQgRgCgMgGQgGgDgFgEQgogNgkgnQgTgCghgoIgigxQhFhLhmgqIgMAJQgtBJhYAyIgEADIgPAJQhDAjheAcIgCABQkoBSlFCMQiLA7h6AxIgWAJIgJAEQgzAWgjAWIgRALQgxAfgmAjIgPAOIgpAoIgLAKIgLAJQgJAHgIADQgVAKgMgHIgDAHQgQAZgVATQgNALgNAGIgDACIgKAEQgQAGgOAAQgOAAgNgGg");
	this.shape_33.setTransform(783.9228,588.0769);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("EguKAoJIgGgEQgbgOgHgrIgBgCQgGgvAagjQAJgNAQgNQATgQAIgNQAXgdAPgrIAWhPQAPgwAXguQArhVBIhKQBKhNBcg3IAdgrIAHgHQAWgaAngZQA7goBgguIADgCQBog2A4gbQApgVAfgZIAkgbQAyg0A4ghIBEg0QCDhbBng8QAkgSAtgSIAzgVQBugoAZgPIAVgJQBLgjBPgpIA0gdQA2gmA+ghIALgGQA0gfAhgWIAjgYQAfgWAdgXQAcgXAsgpQAkghAegVIAJgGQBNgzBTgbQAngPAjgHIBbgdQBJgZAqgfQAQgIATgOQBHglBEhIQAeggAggzQASgbARggQA1hjAfg2QAqhGAog9IAGgJQARg2A5gzQAKgTAKgOQALghBIgpICKhNQAygcAmgYIAKgHQAZgSA4gLQA7gMBrADQAdABAbgBQCCgFAkhSQATgtAAgvQAKg2gpg9Qgkg0gegvQgagkALgSQAMgdAcgVQALgTASgHQA4ghA3gVQArgPAxgNIARgFIBHgEQDtgEB5iTQA7hHAXiDQAYhngOhjIAEgSQAbhyAdg3QAKgZANgNQAqgrBOASQAhAFAlAQQAvAUAwATQBYAiBPgEQALAAAMgDQAwgIAtg/QA/hVBziMQAug4AnhDQA8hoAfhZQBMikAsAQQAXAMANA3QATAegBA2QACAvgVBAQgRAzgbA5IgHAOQh9EjhNChQgeBghrBOQgjAagfAaQg8AyglAsIhaBnQhpB2gkBMQgfAzABAzIABAPQgCAngWAiQgZA8hDBgQgyBGhNBgIgKANQjeEbiQC/Qg2B7hTBDQg0A0gpAwIgEAFQgIAIgEAJQgJALgCAQQgFASAHAVQAEAQALAUIAPAdQAoBXARBMQAFAZACAaQAFA6gNAzQgIAoglAIQgxAlh0gBQgxACg0gFIiHgKQiBgPhxALQgTABgMAFQgQAEgNALQgOAMgMATQgHAOgKAXIgYA0QggBDgtA4QhEBZhNApQg2Afg1gDQgVARgWAKQgkAWgeACQgSAEgRgBQgJANgtgWIgFAAQgegHgdAHQgcAFgfAOIgmATQgvAdgsAjIgTAPQgzAqg9A+IgZAbQg6A9gdAqIgbAkIgeAsQgaAqglAqIgXAbQg9BFhVAyIgJAEQhgA3hCgCQgdACgQgJQgugKgngdQgfAIhBhYQhKhChtgfQgwBQhdA3IgTANQhBAlhbAiQkYBdk8CdQiVBJh6A4IgIAEQg9AggmAdQg3AngnAtQgXAYgPATIgUAUQgJAJgHAEQgVANgLgFIgEAGQgPAagUASQgOANgPAFQgFAEgGABQgMADgLAAQgSAAgOgJg");
	this.shape_34.setTransform(746.1525,602.7498);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EgtaAooIgGgFIgEgCQgVgRgGgnIAAgCIAAgCQgFguAYgkQAIgNAPgOQARgRAIgNQAVgfAPgqIAXhOQAMglARgkIAKgVQAshVBHhJQA4g7BCguIAhgcIALgUIAOgZIAGgHQAPgVAYgUIARgNQAygmBOgsIAVgLIADgCQBPgvAwgaIAbgPQAmgXAegcIAFgEIAdgYQAigoAjgaIAfgXQAegaAjgcQB8hcBqhCIAVgMQAbgOAfgOIAygWQA2gWAhgQQAfgOAOgJIAUgKQA/ghBAgjIAWgNIAygfQAXgSAYgQQAggVAhgTIAKgHIAqgbIAqgcIAkgYQAfgWAdgWQAYgRAhgcIARgPQAlggAfgUIAJgFQA/gnA2gWIAqgQQAmgPAigKQAqgQAsgTIACgBQBAgYAvgkQAQgJASgNQA2gdA1gxIAhgfQAfghAhgyQASgbAQgfQAxhbAXg4IAEgHQAghJAeg8IAEgIQAFgaANgYQALgbAagbQAKgSALgOQADgIAGgIQAWgaA2gfICDhJIAHgEQAlgUAhgUIATgLIAKgGQAbgQA3gLQAjgHA0gBIBOgBQAdAAAcgCQBvgFAvg9IAKgRQAYgrACgsQANg2gng+IgSgcQgZgmgVgiQgYgkAIgSQAGgWAPgPIAPgNQALgTASgIQAYgQAZgNQAegPAfgMIAUgIQAjgMAlgKIALgFIAFgBIBGgIQCrgMBxhcQAjgcAeglQAhgoAYg8QATgtAMg1QARg5AEg0QAFgtgCgrIAFgRQALgjALgdQAVg+AXgjQAMgYAOgMIAFgEQArgiBJASQAUAEAVAIQAOAEAOAHIBeAnIAcAKQBEAWA6gOIAIgBQAKgBALgEQAtgNAug9QAdgnApgwQAyg7A8hNQAsg4AjhGIAHgOQAwhiAkhPQAdg4AdghQArg2AcAMQAEACAEAEQASARAIAsQAJARADAXQADAUgCAXQgBAigMApIgMAjQgTAygdA4IgHAOQh9EThbCrQgOApgcAmQgkAzg6AsQgiAcgeAbQg7AxgmAsQg4A/gkAkQhEBFgqAuQgZAdgRAZQgiAtgFAxIgBAOQgFAlgXAhQgdA9hDBeIgYAjQgsA9g4BIIgKANQiFC1haCLQg4BdgxBJQgIAVgKATQgjBFgpA0QgPASgPAQQgiAogbAoIgRAYIgDAFQgHAKgDAIQgHAMgCAPQgDATAGAVQADAOAIARIACAFIANAdQAXA4AKA1QAGAbAAAVQACAUgCAVQAAAvgRAoQgKAggkAFQggAQg5ACQggABgogDQgwgDgzgHQhEgJhCgCQh+gLhrAcIgDAAQgQAEgKAFQgPAFgMALQgOANgLATQgIAOgKAXIgZAzQgiBDgtA0QgeAjgeAXQglAsgoAbQgUAPgUAJQgbAMgbADQgTARgTAMQgTAOgSAIQgLAGgMACQgQAFgPACQgKAPgogQIgFAAQgQgBgPACQgMACgMAEQgaAHgeAPIgkAVIgSALQgmAYglAbIgUAOIgqAgQgkAcgnAjQgNALgNANIgfAfQgjAkgYAfIgDAEIgaAgIggAqIgDAFQgaAlgkAmIgYAaQgbAcgfAZQgrAigvAcIgJAEQg2AfgmALQglANgfABQgcADgQgGQgtgFgngXQgiAMg+hIQhLgyhpgRQgzBNhaA6IgTANIgJAGQg9AkhRAkQkHBokwCtIgJAFQiPBQhwA7IgFADIgIAFQg5AigkAgQg0AqgjAvQgQATgMAQIgGAJIgRAWIgLALIgDACQgTAOgKgDIgDAHIgEAHQgNAWgSAQIgFAEQgLAJgMAFIgLADIgGABIgOACQgTAAgOgMg");
	this.shape_35.setTransform(707.8589,619.1113);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EgssApGIgFgEIgDgDQgUgSgEgnIAAgCIAAgDQgDgtAVgmQAIgOANgOQAPgRAIgOQATggAPgqIAYhNQANglARgjIAKgVQAuhWBFhJQA4g6BCgvIAXgcIAIgVIAMgZIAFgIQANgWAXgVIAPgOQAvgoBMgvIAUgMIADgCQBPg1AsgaIAagRQAjgYAcgeIAGgFIAagZQAigsAfgZIAdgYQAdgcAigeQB1hdBshHIAUgMQAbgQAegOIAxgZQA0gYAhgRQAegPAOgKIATgLQA/gkA8glIAVgOIAwghQAXgTAXgQQAfgXAggUIAKgHIAogcIAqgdIAkgYIA+gqIA5grIASgOQAmgeAggTIAIgFQBGgnAugUIAqgRQAmgQAhgLQApgTAogWIACgBQA4gYA1gpIAigXQA0gfA3gwIAggfQAhghAggwQAUgbAQgeQAwhbAPg6IADgIQAWhMAUg6IADgHQABgaAIgXQADgaAZgbQAJgSAMgOQAEgIAGgHQAYgaA0geICDhJIAHgEIBIgnIATgLIAJgFQAcgQA3gJQAkgGAzgCIBPgCQAdAAAbgCQBsgIA0g5QAHgHAFgIQAagoAGgrQAPg1gkg/IgSgeIgshIQgXgjAGgTQAEgXANgOIAOgOQAMgSARgJQAYgQAYgOQAegPAfgNIAUgIQAkgNAjgLIAMgFIAEgBQAngGAfgHQCigVByhjQAhgcAegmQAhgpAbg6QAUgtAOgzQAVg5AHgxQAJgrACgqIAGgQQAMgjANgbQAZg7AagiQAOgVAPgLIAFgFQAtgeBHATQAUAFAVAIIAbALQAwAWAuASIAcAKQBDAXA2gaIAHgDQAKgCAKgFQAqgSAug7QAfgmApgvQA2g6A5hNQAqg6AfhHIAGgOQAqhlAphLQAgg0AigcQAtgvAcAOQAEACAEAEQASASAHArQAHARACAXQABATgDAYQgDAhgOAoIgOAhQgVAxgfA5IgHANQh9EDhoC2QgQAogcAmQgkA0g3AsQgiAdgdAbQg6AygmAsQg5A9gmAiQhHBBgtAjQgbAXgTAVQgkAngNAuIgDAOQgIAigZAhQggA8hBBdIgaAkQgrA/g1BHIgKAOQiDC8hJCLQgrBjgrBIQgIAVgJASQgjBHgjA1IgZAmQgcAogVAqIgNAZIgCAGQgFAJgDAJQgFANgBAOQgCAUAFAUQADAOAHAQIACAGIAKAeQASA3AFA1QAEAbgGAPQgCAQgFAPQgFAlgWAcQgNAZgiAAQghAJg3gDIhEgIIhhgRQhEgMhBgBQh7gHhmAtIgDABQgOAFgKAGQgOAGgLAMQgNANgLATQgIAOgKAWIgaAzQglBEguAwQgfAhgfARQgfAvgiAeQgSARgRAKQgXAPgXAHQgRATgRANQgRAQgPAKQgLAGgKAEQgOAHgOAEQgJARglgKIgEABQgOABgPAEIgWAHQgZALgcAQIgkAVIgRAMIhNAxIgUANIgsAdQgnAagmAeQgPALgNAMQgSAOgOAOQgjAigbAeIgDAEQgNAQgOAPIgiApIgDAFQgbAjgmAlIgZAYQgbAbggAYQgtAhguAbIgIAEQg6AgghALQgkAMgfAEQgbAFgQgEQgtgBgmgPQgkAPg9g4QhLgihmgEQg2BMhXA9IgSANIgJAGQg8AnhOAoQj6B0kpDAIgJAFQiNBahnA+IgFADIgHAFQg2AlghAjQgwAtggAxQgOATgKARIgGAJIgPAYIgJALIgDADQgQAPgJgBIgEAIIgDAGQgMAWgRAQIgFAEQgMAKgMAEQgGADgFAAIgGABIgKAAQgVAAgPgPg");
	this.shape_36.setTransform(669.625,635.4749);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Egr9AplIgEgFIgDgDQgSgUgEgmIAAgCIABgEQgCgtATgmQAHgPAMgPQANgRAIgPQARghAPgqIAZhMQAOgkARgkIALgVQAuhVBEhJQA4g7BCguQACgLAKgTIAGgVIAKgaIAEgHQALgXAVgXIAPgPQAsgrBJgyIAUgNIACgCQBPg5AngbIAZgTQAhgaAbggIAEgFIAZgbQAigwAbgXIAcgaQAbgdAhgfQBuheBuhNIAUgNQAagRAdgPIAvgaQA0gbAfgTQAcgPAPgLIAUgMQA9gnA5gnIAUgPIAugjQAXgUAWgQQAdgZAfgVIAKgHIAngdIAqgdIAlgZIA+gpIA6goIASgNQAogcAfgSIAJgFQBMgoAogRIApgSIBEgeQAqgWAkgZIABgBQAxgYA6guIAigXQAyggA4gwIAhgeQAigiAgguQAVgbAPgeQAwhYAIg/IACgIQAMhOAKg4IACgIQgDgZADgVQgFgaAXgbQAIgSAOgOQAEgHAGgIQAagZAzgeQA8giBHgnIAHgEIBIgmIAUgKIAJgFQAegOA3gJQAjgFAzgCIBOgCQAdgBAcgDQBogJA6g2IANgOQAeglAIgqQATg0gjhAIgRgeQgYgngTgiQgWgiAFgTQABgZAMgNIAOgOQAMgSAQgJQAYgSAYgOQAcgPAggOIAUgIQAmgPAhgLIALgFIAFgBQAlgIAfgJQCagfByhqQAggdAfgmQAggpAdg5QAWguAQgwQAYg5AKgtQAMgrAHgoIAHgQQAPghAOgbQAcg3AdggQAPgUARgKIAFgEQAvgaBGAUQAUAFAUAIIAcAMQAwAXAtASIAbAKQBCAWAzglIAHgEIASgJQAmgXAvg6QAfgmAsgtQA4g6A2hMQAog8AbhIIAGgOQAjhpAwhGQAhgwAogYQAvgoAdAQQAEACADAEQASAUAFAqQAHARAAAWQgBAUgEAXQgGAhgQAmIgPAhQgXAwghA4IgIANQh9Dzh0DBQgSAngcAmQgkA0g1AtIg9A5Qg5AzgnArQg5A7gpAhQhJA9gwAYQgdAQgWASQgnAhgTAsIgFAMQgMAhgZAgQglA7g/BcIgaAmQgsBAgyBHIgJANQiBDEg4CLQggBpgkBGQgHAXgIARIhBB+QgKAUgKAUQgWApgOAuIgJAaIgBAGQgEAJgCAJQgEANAAAOQgBAUAEAUQAEAOAFAQIABAFIAJAfQAOA3gBA2QABAagMAJQgFAMgIAKQgLAagbAQQgOARghgEQgiACg1gJIhBgOIhfgXQhEgQhAABQh3gDhhA+IgDABQgNAGgJAHQgNAIgLAMQgMAOgKATIgTAkIgaAxQgoBFguAtQghAeggANQgaAxgcAhQgPATgNAMQgVASgTAKQgOAUgPAPQgOARgOAMQgJAIgJAGIgaAPQgIASgfgFIgFACQgOAEgNAFIgUAKQgXANgcARIgiAXIgSAMQgkAYgpAXIgWAMIgtAaQgqAXgmAbQgQAKgOAKQgSAOgOAMQgkAfgeAfIgDADIgcAeIgjAoIgDAEQgdAignAjIgaAYQgcAZggAXQgvAggtAaIgIAEQg+AhgcAKQgjANgfAGQgZAGgRgBQgrAEgogIQgmASg6goQhMgRhjAJQg4BKhUA/IgSAOIgJAGQg6AphLAtQjtCAkjDTIgIAFQiLBjhfBCIgEADIgHAGQgyAngfAmQgtAwgbAzQgNAUgIASIgFAJIgMAYIgIAMIgDADQgOAQgIACIgDAIIgDAGQgLAWgSAQIgEAEQgMAKgNAEQgFADgFAAIgHAAIgFAAQgXAAgPgSg");
	this.shape_37.setTransform(631.4,651.833);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("EgrPAqEIgEgFIgDgEQgPgVgCgmIAAgCIAAgGQAAgtARgmQAGgQAKgPQAMgSAHgQQARgiAOgpIAahLQAOgkASgkIALgUQAvhXBDhHQA3g8BBguQgCgKAFgVQABgIADgNQACgNAFgOIADgHQAKgZATgXIANgQQApgtBIg2IASgOIADgCIBxhaQANgKALgLQAdgaAbgkIAEgFIAXgcQAhg0AXgVIAagcQAageAhghQBnhfBvhTIATgNQAbgSAcgRIAugcQAygdAegTQAbgQAQgNIASgMQA9gqA2gpIATgQQAWgTAWgSIAqgmQAegaAdgWIAJgHIAngfIApgdIAlgZIA/goIA7gmIATgMQApgaAggRIAIgEQBTgpAhgPIApgSIBCghQApgYAhgdIABgBQAogXBAg0IAhgXQAyghA5gxIAggdQAlgjAfgsQAVgbAQgdQAwhYAAhCIABgIQADhPAAg3IAAgHQgGgagDgTQgNgZAVgcQAIgRAOgPQAFgHAHgHQAbgZAxgdQA8giBIgnIAHgDIBJgmIAUgJIAKgEQAegNA2gIQAlgFAygCIBOgDQAdgCAcgDQBkgLBAgyQAHgGAGgHQAigjALgnQAWg0ghhBIgQgfQgYgogSghQgUgiACgTQgCgbALgLIAOgOQAMgSAQgKQAXgTAYgOQAbgQAggPIAUgIIBHgbIALgFIAFgBQAkgKAfgMQCRgoBzhyQAegcAfgoQAhgpAeg4QAZguASgtQAcg6AMgqQAQgqAKglIAIgQQARggARgZQAfg0AhgeQAQgTASgJIAFgDQAxgXBEAVQAUAFAUAJIAbAMQAxAYAtASIAbAKQBAAWAvgxIAGgFIAQgMQAkgbAwg4QAgglAsgsQA8g6AyhMQAng9AXhKIAFgOQAehrA1hCQAkgsAsgUQAzghAbASIAIAGQASAVAEApQAEARgBAXQgCATgGAXQgHAggSAlIgRAgQgaAwgjA3IgHAMQh9DjiCDMQgTAngcAmQgmA0gxAuIg8A6Qg3A0gpAqQg5A5grAgQhLA5g0ANQgeAJgZAPQgpAagaAqIgHAMQgQAegaAgIhnCVIgaAmIhbCJIgJANQh+DLgnCMQgUBugeBFQgGAXgIASQgjBGgYA6QgIAUgHAXQgPApgIAxIgGAbIgBAGQgCAKgBAJQgCANAAAPQAAATAFATQACAPAFAPIABAGIAGAeQAKA4gHA2QgBAZgSADQgIAIgMAEQgQARgfAEQgRAJgggIQgigFgygPIg/gUQgvgRgugNQhEgTg/ACQhzABhdBQIgCACQgMAHgIAIQgMAJgKAMQgMAPgKASIgTAkQgNAZgOAYQgrBGguAoQgiAcgiAHQgUA1gWAjQgMAVgLAOQgQAVgQAOQgMAVgMARQgMATgMAOIgQAPQgLALgLAIQgJAUgbACIgDACIgZAOIgTAMIgvAiIgiAXIgSANQgjAXgsAWIgWALIgvAXQgsAUgnAXIgeATQgUAMgOALQgkAbggAgIgEADIgdAdIglAnIgDAEQgdAfgpAiIgbAWQgdAYghAWQgxAggrAYIgIAFQhBAigYAIQgiAOgfAJQgYAHgRACQgrAIgngBQgoAWg5gYQhMgBhfAWQg7BIhSBBIgSAPIgJAHQg4ArhIAyQjfCLkcDmIgIAFIjfCyIgFAEIgGAGQguAqgdApQgpAygYA1QgKAVgIATIgDAJIgLAZIgGANIgCAEQgLAQgIAFIgDAIIgDAGQgKAWgRAQIgFAEQgMAKgMAEIgLADIgGAAIgBAAQgZAAgQgWg");
	this.shape_38.setTransform(593.2188,668.2048);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Egp5Aq9QgZgCgPgYIgDgFIgDgEQgNgXgBglIAAgDIABgHQABgsAPgoQAFgPAJgQQAKgSAGgRQAQgkAOgoIAbhKQAOglATgjIALgUQAvhXBDhHQA3g8BBgvQgJgIACgXQgBgJACgNQABgNAEgOIACgIQAIgZARgYIAMgRQAmgwBFg5IASgPIADgCIBthfIAVgYQAcgbAZgmIAEgGIAUgdQAhg4AUgUIAYgdQAZggAfghQBghgBxhaIATgOQAbgTAbgRIAtgeIBOg0QAZgRAQgOIASgMQA7gtAzgsIATgQIAqgnIApgoQAcgcAcgWIAIgIIAngfIApgfIAlgYIA/gnIA9gjIATgMQAqgXAhgRIAIgEIBzg1IAogTQAkgTAdgRQAogbAdggIABgBQAhgXBFg5IAggYQAxgiA6gxIAhgcQAmgkAfgpQAWgcAPgcQAvhXgHhFIAAgJQgGhRgKg1IgBgHQgLgagIgRQgUgZASgcQAIgQAQgQIANgNQAdgZAvgcQA8giBIgnIAHgDIBKglIAUgIIAKgEQAfgMA2gHQAlgFAxgBQAmgBApgEQAdgCAcgEQBggMBGgvIAOgLQAlggAOgmQAZgzgehCIgRggIgohJQgTgiAAgUQgEgcAJgKIAOgOQAMgRAQgMQAXgTAXgOQAagRAhgPIAUgJIBGgcIALgFIAFgCQAigMAggOQCJgxByh5QAdgdAggpQAggoAgg4QAbguAUgqQAgg6APgnIAihNIAJgPQATgfASgYQAjgxAkgcQASgRATgIIAFgDQAzgUBDAWQATAGAUAKIAbANQAxAYAsARIAbAKQBAAXArg8IAFgHIAPgOQAgggAwg2QAhglAugqQA/g6AvhMQAlg+AThMIAEgOQAYhuA7g9QAmgoAygRQA1gZAbAUIAHAGQATAWACAoQADARgDAXQgDAUgHAVQgKAggUAkIgSAgIhBBlIgIAMQh9DSiODXQgWAngbAmQgmA0gvAuIg7A8IhfBeQg5A3gtAeQhOA1g4ACQgfADgcAMQgsATghAoIgIALQgTAbgcAgQgsA6g+BaIgaAnQgtBEgrBFIgJAOQh8DTgWCLQgHB0gZBEQgEAYgIARQgjBHgRA8QgHAVgDAYQgKAqgBAzIgCAcIAAAGIgCAUQAAAOABAOQABAVAEATIAGAeIABAFIAEAeQAFA3gMA2QgEAZgZgDQgKAEgQgBQgVAGgkgHQgTABgfgMQgigMgwgVQgdgOgggNQgtgVgsgOQhFgYg+AFQhwAFhXBgIgDADQgKAIgIAJQgKALgJAMQgMAQgKARIgTAkQgOAZgOAXQgtBHgvAkQgjAagjACQgOA3gRAmQgJAXgIAQQgMAXgNATQgJAWgKATQgKAUgLAQQgGAKgHAIIgTAXQgIAWgXAHIgDADIgWASIgSAOQgUATgYATIghAZIgRAMQgjAXguAVIgXAKIgwAUQgwARgnAUQgRAHgOAJQgVAKgOALQgjAYgkAfIgDAEIgeAcIgnAlIgDAEQgfAegqAgIgcAVQgeAWgiAVQgyAfgrAYIgIAEQhDAkgUAHQghAPgfALQgXAIgRAEQgqAMgnAHQgqAZg4gHQhNAOhbAlQg9BGhPBDIgSAPIgJAIQg2AthGA3QjRCXkVD4IgIAGQiGB1hPBJIgEAFIgFAGQgrAtgcArQgkA2gVA3QgIAVgGATIgDAKIgIAaIgFAOIgCAEQgIARgHAIIgDAHIgCAGQgKAXgQAQIgFAEQgMAKgNAEQgFACgGAAIgDAAIgDAAg");
	this.shape_39.setTransform(555.025,684.5229);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EgpHArgIgGAAQgZgDgNgbIgDgFIgCgFQgLgYAAglIgBgCIACgJQACgrANgpQAEgQAIgQQAIgTAGgSIAchMIAchJQAPglATgjIALgUQAwhXBChHQA3g8BAgvQgOgGgDgZQgCgKABgNQAAgOACgOIACgIQAGgaAPgaIALgRQAjgzBDg8IARgPIADgDQBMhJAcgcIAUgZQAZgdAYgoIADgHIATgeQAgg7AQgUIAXgeQAYgiAegiQBZhhByhfIATgPIA1gmIArggIBMg4QAXgRARgPIASgOQA6gwAwgtIASgSIAogoIAngqQAbgdAbgYIAIgHIAlghIApgfIAmgZQAegTAigSIA+ghIAUgKIBMgmIAIgDIBzg0IAngUQAjgTAcgTQAngeAagjIAAgBQAagXBKg+IAggZQAwgjA7gwQARgOAQgOQAogkAegoQAWgbAQgcQAuhWgOhJIgCgIQgPhUgUgzIgDgGQgOgagOgQQgbgZAQgcQAHgQASgPIANgMQAfgZAvgbQA7gjBIgmIAHgEIBKgjIAVgJIAKgDQAggLA2gGQAlgEAxgCQAmgBAogEQAdgCAdgFQBcgOBLgrIAPgKQApgdARgkQAcgzgchDIgQghQgXgpgQghQgRghgDgUQgHgdAIgJIAOgPQANgRAPgMQAWgUAXgPQAZgRAigQIATgJIBGgeIALgFIAFgCQAhgNAggRQCAg7BziAQAcgdAggpQAggpAig3QAdgtAWgpQAkg6ARgjIAqhLIAKgOQAVgeAUgWQAmgvAngaQAUgOAUgIIAFgDQA1gQBCAXQASAHAUAKIAbANQAxAZAsARIAaAKQA/AXAnhIIAFgIIANgQQAdglAxg1QAigkAvgpQBCg4AshNQAjg/APhNIADgOQAThxBBg6QAngjA4gNQA3gSAbAWIAHAGQATAXAAAnQACASgFAWQgEAUgIAVQgMAggWAiIgVAfIhEBkIgJALQh8DDicDiQgXAlgbAmQgnA2grAtIg6A+Qg0A1grApQg6A2gvAbQhQAxg8gIQgggDgeAHQgvANgoAmIgKAKIgzA4QgwA5g9BaIgaAoQguBGgoBEIgIAOQh6DagFCMQAEB5gSBEQgDAYgIAQQgiBIgMA+QgEAVgBAaQgEAqAGA3IABAcIABAHIABAUIACAcIAGAoIAFAeIAAAGIACAfQABA2gRA2QgHAYgfgIQgNgBgTgGQgagFgqgTQgUgFgfgRQgigTgugaQgcgSgegPQgsgagrgQQhFgbg9AGQhsAJhTBxIgCADIgQAUIgSAYQgLAQgJASIgUAjQgOAZgPAXQgvBHgvAgQgmAZgjgEQgJA6gLAoQgGAZgGASQgIAagJAXIgOArQgIAWgJASIgKAVQgHAOgIANQgJAXgTAOIgDADIgUAWIgPAQQgTAWgXAUQgPANgQANIgSANQgiAXgwASIgYAJIgxARQgzAPgnAQQgSAGgPAIQgVAJgPAJQgjAWgmAfIgEADIgfAcIgpAkIgCADQghAcgrAfIgdAUQgfAVgjAUQg0AegpAWIgIAEQhHAmgPAGIg+AdIgoAQIhQAeQgtAdg1AIQhOAfhYAyQg/BEhNBGIgRAQIgJAIIh4BqQjDCjkPELIgHAGQiEB/hGBNIgEAEIgFAHQgnAvgaAvQghA4gQA5QgHAWgFAUIgBAKIgGAcIgEANIgBAFQgGASgGAKIgCAIIgCAFQgJAYgRAQIgFAEQgMALgMADQgFABgEAAIgCAAg");
	this.shape_40.setTransform(516.9188,700.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EgocAsEIgGgBQgYgEgMgdIgDgGIgBgEQgJgbABgkIAAgCIABgKQAEgrAKgqIAKghIAMgmIAbhNQAMghAQgnQAQgkATgkIAMgUQAxhXBAhGQA3g8BAgwQgUgFgHgbQgDgKgBgNIABgdIABgIQADgbAOgaIAKgTQAgg1BBhAIAQgQIADgDQBLhOAYgcQAKgMAJgPQAWgfAXgqIADgHIARggQAfg/ANgSIAVggQAXgjAcgjQBShiB1hmIASgPIAzgoIArgiIBJg8QAWgRASgRIAQgOQA6gzAtgvIAQgSIAmgrIAmgrQAbgfAZgYIAIgIQATgTARgPQATgQAWgPQASgNAUgMQAegTAjgSQAdgPAigPIAUgJIBOgjIAIgDIBygyQAVgKASgKQAjgVAagVQAmghAWgmQASgXBQhEIAggZIBrhUIAhgcQApgjAegmQAXgcAPgcQAuhVgWhMIgCgIQgahWgegyIgDgGQgSgZgTgPQgjgYAOgcQAGgPATgQIAOgMQAhgYAugbQA6giBKgnIAGgDIBLgjQAKgEALgEIAKgCQAigKA0gFQAmgEAxgBQAmgBAogFQAdgEAdgFQBYgQBRgnIAQgJQAtgaATgjQAfgxgahFQgGgQgJgSIgmhJQgQghgFgVQgJgfAGgHIAOgPQANgQAOgNQAXgWAWgPQAYgRAigRIAUgJIBGgfIAKgGIAFgCQAggPAggTQB4hEBziIQAagdAggrQAggoAlg2IA3hTIA7hbIAyhIIALgOQAXgcAWgWQApgrAqgYQAWgNAWgHIAFgCQA2gNBAAZQATAHATAKIAaAOQAzAaAqARIAaAKQA+AWAkhTIAEgJIALgTQAbgqAxgyQAjglAwgnQBFg4AphMQAihBALhPIABgOQANh0BHg0QApggA9gJQA6gLAbAYIAHAHQATAYgCAmQAAASgGAWQgFAUgKAUQgOAfgYAhIgWAfIhIBiIgJALQh9CyioDtIg1BLQgnA2goAuQgdAigcAdQgyA2gsAoQg6A0gyAaQhTAtg/gTQghgKghAEQgxAHgvAjIgNAKQgaAWgdAfQg0A5g7BYIgbApQguBIglBDIgIAOQh3DiAMCMQAQB/gMBCQgDAZgHAQQgiBIgGBAQgCAWACAcQACArAMA5IAGAdIABAHIADAVIAFAcIAGAoIAEAeIAAAFIAAAgQgDA3gYA2QgJAXglgOQgQgFgXgMQgfgPgugdQgXgOgdgVQgkgagrghQgcgVgbgSQgrgegqgSQhFgfg8AIQhpANhNCDIgCADIgOAWIgQAbIgUAhIgUAiQgPAagPAVQgxBIgwAdQgnAWgkgJQgEA9gFArIgGAuQgEAegGAaIgJAvQgFAWgHAUIgIAYIgNAfQgIAZgPATIgDAFIgRAaIgOASQgSAYgVAVQgOAPgQANIgSANQghAWgyASIgZAIIgzAOQg1ALgnANQgTAFgQAGQgWAIgPAJQgjASgpAfIgEAEIggAaIgqAjIgCACQgiAbgtAdIgeATQgfATglAUIhdAyIgIAEIhUAsIg+AgIgnAUIhPAqQgvAgg0AZQhOAvhUA/IiMCKIgRAQIgJAJIhzBxQi2CvkIEeIgIAGQiBCIg+BRIgDAFIgFAGQgkAzgXAxQgdA7gNA7QgFAWgDAVIgBALIgDAcIgDAPIAAAEQgEATgFANIgCAIIgCAFQgIAYgQAQIgFAEQgMALgNADQgEABgFAAIgCAAg");
	this.shape_41.setTransform(478.8255,717.0821);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Egn3AsoQgbgHgLgpQgIghAFgsQAZjKBhixQBhixCShsQgjgGgIgzQgHgxATgsQAbhABJhPQBbhjAWggQAcgpAhhIQAshgALgVQBSiaDGivQBthdA1gwQBdhTA8hHIBYhsQAzhBApgkQBLhDCGg1QDUhWAKgFQB1g7AkhUQAQglDaipQDZiog5iWQg6iVhHgnQhIgnBSg3QBSg4CBhDQAcgOA3gXQA4gXCUgEQCUgFCfhBQCfhChMiXQhMiYALgOQAsg1AogeQAegWAwgWQA1gZAbgOQCPhLCYi6QAwg7BPhrQBZh7AkguQBBhTA1gvQBGg/BHgSQBJgMBUAuQBTAuA9AWQA9AWAgheQAfhfCMhqQCMhqAKi6QAKi6C3gOQBEgEAaAhQAdAmgWBAQgRAygrA1QifDDk2GqQk3GriyhSQixhSjWFYQjWFYAmC4QAnC3gZA4QgiBIAABDQAAA2AgBlQAgBmAAA2QAABKgnBKQggA+kekQQkekRiYE+QiZE8h4gvQAEBqgCA2QgBBYgOBGQgRBSgjBCQgnBJg4AnQg3AmhsASQh8ATgtAWQgkAPgvAjIhPA9QhFAxhxA6QixBbgIAFQkbCck+FRQi4DElgGfQiFCWg3BXQhcCRgICMIgCA3QgCAfgHAWQgIAcgUARQgQAOgQAAIgKgBg");
	this.shape_42.setTransform(440.7738,733.2164);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("EgmKAqkQgQgFgJgQQgHgJgEgPQgIgeADgrQAGg6AOg4QAOg2AUg0QAWg4Acg1IAQgdQAgg4AkgxQAxhBA5g2QAdgaAegYQgggGgGgwQgGgvATgqQAag9BFhMQBWheAWggQAbgoAghEQAphbALgVQA9hyB9h9QAmgmArgmIBshhIAtgpQBOhHA1g+IAMgQQA2hEAbglQAagiAXgaQATgWARgPQA8g5BkgvIAigPICchEIA1gXQBKgnApgxQAUgYAMgaQAMgaBjhRQAugnBCgyIAuglQBIhAAgg8QAihEgXhBQgHgVgIgTQgrhng1ggQhBgkBOg0QAigXApgZQA5giBFglQAbgOAygXQAsgTBigJIAxgEQB8gHCCg4IAagMQCRhChGiPIgRglQgzhtALgNQAQgVARgRQAYgZAXgRQAcgVAtgWIAsgVIAggRQBHgmBHhAQBGg+BHhVIADgEQAvg3BKhgIAPgTQBKhiAigmIAXgbQAyg5AqgiQBEg6BEgQQBGgKBQArQA7AgAwAVIAfALQA7AWAfhXQAFgNAHgMQAig/BVhGIAkgcQAfgXAZgcQAmgrAXg2QAZg7AFhHQALiVB+gjQAWgGAagCQAqgEAZAMQAOAGAIAKQAYAcgIAtIgFAUQgPAuglAyIghAsQhOBsh1CmIjBEVIgHALQh3CmhkBWQiJBzhhgoQglgPgmADQhFAFhLBDQg3Axg4BQQgVAegWAkQgpBEgfA/Qg8B7gXBfQgSBGAEA5IADAeQAKAzAEApQAKBggSAlQghBEgCBAQgCAzAbBfQAcBggCAzIAAAFQgEBCglBEQgZAtieiAQg2gqhEg+QhahRhMgWQibgwhkDKQhOCdhGBAQg9A4g2gTQACBjgEA0QgDBTgPBCQgSBPgiA+QgPAbgRAWQgbAiggAWQg1AlhmATQh1ATgtAWQgiAPgtAhIhMA6QhCAwhrA3IiaBQIgYANQkSCZkuE9QhNBQhoB0QiMCcizDSIgQASQh/CNg3BSQgrBAgZA/QgcBGgGBDIgCAmIgCAMQgCAdgHATQgGARgKANIgLAKQgOAMgOAAIgKgCg");
	this.shape_43.setTransform(428.4756,748.3545);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EgkeAohQgOgGgIgPQgHgIgEgOQgJgcACgoIAAAAQAEg4APg1QANgzAVgxQAXg0AbgyIAQgbQAfg1AjgvQAug9A3g1QAbgZAcgXQgcgHgFguQgFgsASgoQAag7BBhIQBRhYAWghQAZgmAfhBQAnhVAMgVQA7huB2h4QAjgkApglQA9g3ApgnIAqgnQBJhFAxg8IALgPQAyhBAYglQAYghAVgaQASgUAPgQQA3g5BcgtQAPgIARgIICShDQAtgUAFgEQBGglAogwQATgWALgZQAOgaBchMQAtgmA/guIAsgjQBFg7Ahg3QAjg+gUg7QgFgUgHgRQgkhfgtgdQg5gjBJgwQAggWAogYQA2ghBBgkQAagOAvgXQApgUBagKIAsgGQBygKB1g7IAYgMQCChChAiHIgPgkQguhmALgPQAQgTAPgRQAXgYAWgQQAbgVArgWIApgUIAfgQQBDgnBDg7QBEg8BEhPIADgDQAvg1BHhXIAPgSQBHhaAjghIAXgZQAwg0ApgfQBBg0BCgPQBDgIBMApQA4AeAvATIAeAMQA5AUAehPQAEgLAHgMQAkg5BQhBIAjgaQAegWAXgbQAlgoAXg0QAYg4AHhDQANiMB3gjQAVgHAYgDQAogEAYAKQAMAFAJAJQAXAZgGAoIgEATQgLAqggAvIgcAqQhCBmhoCfQhMB3hjCTIgHAKQhtCfhfBVQiABuhdghQgigNgkAEQhBAGhJBAQg1Awg0BLQgUAegUAiQgmBBgcA9Qg3B3gWBZQgRBDACA2IACAcQAHAwACAnQAHBagSAkQghBAgEA7QgEAxAXBZQAWBagEAwIAAAEQgFA/glBAQgaAqiVhzQg0glhBg4QhXhIhIgTQiTgohhC9QhMCShEA/Qg7A2g0gQQgBBdgFAxQgFBPgPA9QgTBLggA6QgPAagQAUQgaAggfAWQgzAjhgATQhuAUgsAWQghAPgqAfIhJA4QhAAthmA1IiTBNIgXANQkJCVkeEpQhLBNhjBtQiMCZimDCIgPARQh6CFg3BMQgqA8gZA6QgeBBgIA9IgDAiIgCALQgDAZgHARQgFAPgKALIgKAJQgMAKgNAAQgFAAgFgCg");
	this.shape_44.setTransform(416.177,763.5057);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EgiyAmeQgNgGgGgPQgHgHgEgMQgKgZACgnIgBAAQADg1AOgzQANgwAWgtQAYgxAaguIAQgaQAegxAigtQArg6A0g0QAagYAagWQgYgIgEgqQgDgqARgmQAag5A9hEQBLhUAWghQAYglAeg9QAlhPAMgWQA5hpBuhyQAigjAmgjIBghbIAngmQBEhDAtg6IAKgPQAug9AWglIApg5QAPgUAOgPQAyg4BVgtIAdgPQBXgrAxgZQAqgTAGgFQBAgkAnguQASgWAMgXQAPgaBVhHQAsgkA7grIArghQBBg2AjgxQAkg5gQg1QgDgSgHgPQgdhWglgcQgyggBFguIBEgrIBxhDQAZgPArgWQAmgVBSgNIApgHQBmgOBpg8IAVgMQB1hDg6h+IgOgjQgqhfAMgQQAPgTAPgQQAVgXAVgQQAagUAogVIAngUIAdgQQBBgmA/g4QBAg5BChJIADgEQAugwBGhQIAOgQQBEhSAkgeIAXgWQAugvApgbQA+gvA+gMQBBgHBIAmQA2AcAsATIAdAKQA3AUAdhIQAFgKAGgKQAlgzBMg8IAigZQAcgVAXgZQAjgmAXgyQAYg1AIg+QAPiEBwgkQAUgGAWgEQAlgFAXAJQAMAEAIAIQAXAVgEAlIgCARQgIAmgbArIgXAoQg2BhhbCXQhCBzhbCNIgGAKQhkCXhaBUQh3BphZgaQgggLgiAFQg9AHhGA9QgzAugwBHQgTAcgSAiQgjA9gZA8QgxBygWBVQgQA/gBAzIABAbQAFAsAAAlQAEBUgTAiQggA8gGA4QgGAuASBTQASBTgHAuIAAADQgGA6glA8QgbAoiMhmQgzggg9gxQhUg/hFgPQiKgihfCxQhJCIhDA+Qg3AygxgNQgEBXgHAuQgIBKgQA6QgTBHgfA2QgPAYgPATQgYAegeAVQgxAihbAUQhnAUgqAWQggAPgoAdIhGA1Qg9ArhgAzIiNBKIgWAMQkACSkOEWQhJBJhdBmQiNCViZCyIgOAQQh0B8g4BIQgpA4gaA1QgeA7gKA3IgFAeIgCAJQgEAXgGAOQgGANgJAKIgJAHQgLAIgKAAQgFAAgGgCg");
	this.shape_45.setTransform(403.8736,778.6353);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("EghGAkaQgLgGgFgOQgHgGgEgLQgKgWAAglIgBgBQABgyAOgwQAOgtAXgqQAZguAYgqIAQgYQAdguAggrQApg2AygzQAXgXAagWQgWgIgDgoQgBgnARgkQAZg2A5hBQBFhPAWggQAYgkAcg5QAjhKANgWQA3hlBnhsQAfgiAkgiIBahXIAkglQA/hBApg5IAKgOQAog5AUgmIAlg3QAOgSANgPQAsg5BNgrIAbgQQBQgpAvgbQAlgSAHgGQA8giAmgtQARgUALgWQAQgbBPhBQAqgiA5gpIAogeQA/gxAkgsQAlgygNgxQgBgPgGgOQgWhOgegaQgpgdBAgrQAegTAjgWIBqhBQAXgPAogVQAkgXBKgOIAlgJQBbgRBcg/IASgMQBnhCg0h3IgMghQglhZANgSQAOgSAOgPQAUgVAUgQQAYgUAmgVIAkgTIAbgQQA+glA7g0QA+g3A/hDIADgDQAtguBEhIIAOgOQBAhJAngbIAWgTQAsgqAogYQA7gpA8gKQA9gGBFAkQAzAaArARIAbALQA1ASAchAIAMgSQAlgtBIg3IAggYQAbgTAXgYQAggkAXgvQAYgyAJg7QASh6BpglQASgGAWgEQAigGAVAHQAMADAIAHQAWASgCAhIgBAPQgEAigVAoIgTAlQgqBchPCQQg4BuhRCHIgGAJQhaCQhVBTQhvBkhUgTQgfgIggAFQg4AIhDA6QgyAsgtBEQgRAagQAgQggA7gWA6QgsBugVBQQgPA7gEAxIAAAYQAEAqgDAjQABBNgTAhQggA4gHA0QgJAsAOBLQAMBOgIArIAAADQgIA2glA4QgdAliChZQgxgbg7grQhQg1hBgNQiCgahcCkQhHB+hCA8Qg0AwgugKQgGBRgJAsQgKBFgQA2QgWBCgdAyQgPAXgNARQgYAcgcAVQgvAghVAUQhgAVgqAWQgeAOgmAcIhCAyQg8AqhaAwIiGBIIgVALQj4COj+ECQhGBGhYBfQiNCSiMCiIgNAPQhvB0g4BCQgoAzgbAxQgfA2gLAwIgHAbIgCAIQgEATgHAMQgFALgIAIIgIAGQgJAGgJAAQgGAAgGgDg");
	this.shape_46.setTransform(391.5548,793.784);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EgfZAiXQgKgGgEgOQgHgFgEgJQgLgUgBgjIgBgBQgBgwAPgtQANgqAYgnIAxhQIAPgXQAdgqAfgpQAmgyAvgyQAWgXAYgVQgSgIgCglQAAglARgiQAYg0A1g9QBAhKAWghQAXgiAag2QAhhEANgXQA1hfBghnQAeghAhggQAygyAhgjIAigjQA6g/Alg2IAJgOQAkg1ARgnIAhg1QAMgSAMgOQAng4BFgqQAMgJANgHQBIgpAtgcQAigRAHgHQA4ghAkgrQARgTALgVQARgbBJg7QAoghA1gmIAngbQA7gtAmgnQAlgsgJgqQABgOgFgNQgOhEgXgZQgigbA8gnIA+gnIBjg/QAWgPAkgWQAigXBCgRIAggKQBRgUBOhBIAQgMQBZhDguhuIgKggQgghTANgTQANgRAOgPQASgUATgPQAXgTAjgUIAigTIAagPQA7gmA2gwQA8g0A9g+IACgDIBuhqIAOgMQA9hCAogWIAVgRQArgkAngVQA5gkA5gIQA6gEBBAhQAwAYAqARIAZAJQAzASAcg4IALgQQAngnBEgzIAegVQAagTAVgWQAfghAXgtQAYgvAKg3QAUhyBhglQASgHAUgEQAggHAUAFQALADAHAGQAWAOAAAdIABANQgCAfgPAlIgPAiQgdBWhCCJQguBqhJCAIgFAJQhRCJhQBSQhmBfhQgMQgcgGgeAGQg1AJhAA3QgvArgqA/QgQAZgPAfQgcA3gUA4QgmBrgUBKQgPA3gFAuIgCAYQACAmgFAhQgCBHgUAfQgfA0gJAwQgLApAJBGQAIBHgLAoIAAADQgKAxglA0QgdAkh5hMQgwgXg3gkQhNgtg9gIQh6gUhZCYQhFB0hAA7QgxAsgsgGQgIBKgLApQgMBAgRAyQgYA/gbAuIgaAlQgXAagbAUQgtAfhPAVQhZAUgpAXQgdAOgkAaIg/AvQg5AohVAuIh/BFIgUALQjvCKjuDuQhEBChTBZQiMCOiACSIgNAOQhpBsg4A9QgnAvgbArQggAxgOAqIgHAXIgDAHQgFAQgGAJQgFAKgIAGIgHAEQgIAEgHAAQgGAAgFgDg");
	this.shape_47.setTransform(379.2718,808.8967);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("EgdtAgUQgJgHgDgNQgGgEgFgIQgLgRgDghIAAgBQgDguAPgqQANgnAYgkIAyhJIAPgVIA5hOQAjguAtgxQAVgWAWgUQgPgJAAgjQABgiAQggQAYgyAxg5QA7hFAWghQAVghAZgyQAfg/ANgWQA0hbBYhiQAcggAegeQAvgwAeghIAggjQA1g8Agg1IAIgNQAggxAPgnIAcgzIAVgfQAig5A+goIAWgRQBBgoAqgdQAggQAHgHQAzggAjgqQAQgSALgTQATgcBCg1QAmggAygiIAmgZQA3gpAnghQAmgmgFglQADgMgEgLQgIg7gOgXQgbgZA4gkIA6glIBdg9QAVgPAggVQAfgYA6gTIAcgNQBHgXBBhCIANgMQBLhEgohmIgJgfQgbhMAOgUIAZgfQARgSASgQQAVgSAhgTIAggTIAYgPQA4glAygsQA6gyA5g4IADgDIBrheIAOgLQA6g5ApgTIAUgPQAqgeAlgSQA3geA2gGQA3gCA9AdQAuAXAoAPIAYAJQAxASAbgxIALgOQAoghBAguIAdgUQAYgRAUgVQAdgfAXgrQAYgsALgyQAXhpBagmQAQgHASgEQAegIATADQAKACAHAFQAVALADAZIACALQABAbgKAiIgJAfQgSBRg1CBQgkBmhBB6IgEAJQhHCChMBQQhcBahMgFQgagEgcAHQgxAKg9A0QguApglA7QgPAYgOAeQgZA0gQA2QghBngTBFQgPAzgHAsIgDAWQgBAjgGAeQgFBBgVAdQgeAxgLAsQgOAnAFA/QADBBgNAlIAAADQgLAsglAwQgeAihxg/QgugSgzgeQhLgjg5gFQhygNhWCLQhCBqg/A5QguAqgpgDQgLBEgMAmQgOA8gSAuQgZA6gbAqIgYAiQgWAZgaASQgqAehKAVQhRAVgpAXQgcAOghAYIg8AsQg2AmhQAsIh4BCIgTALQjmCGjeDbQhDA+hNBSQiMCLh0CCIgLAMIidCdQgmAqgbAmQghAsgQAkQgEAMgFAGIgCAGQgGAOgGAGQgFAIgHAEIgHADQgFADgFAAQgHAAgFgEg");
	this.shape_48.setTransform(367.0348,824.0281);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("A8DeQQgHgGgCgMQgGgDgFgHQgMgPgDgfIgBgBQgFgsAPgnQANgkAZghQAcgjAWgfIAOgTIA4hIQAggrAqgwQAUgVAUgTQgLgKABgfQADggAPgfQAXguAtg2QA2hAAVghQAVggAYguQAcg6AOgXQAxhWBRhcIA2g7IBHhOIAcgiQAxg6AdgzIAGgMQAcguANgoIAYgwIARgeQAeg4A2goIATgQQA6goAogeQAbgPAIgJQAugeAjgoQAPgRAKgSQAUgbA8gxQAlgeAugfIAlgXIBcg/QAngggBggQAEgJgDgKQAAgzgHgWQgTgWAzghIA3gjQAqgbAsggQATgPAdgUQAdgZAygWIAYgNQA7gbA0hFIALgMQA+hDgiheIgIgeQgWhFAOgWQAMgPAMgOQAPgRARgPQAUgSAegTIAegSIAWgPQA1glAvgoQA2gvA3gzIADgCIBphTIANgJQA3gxAqgPIAUgMQAogaAlgOQAzgZA0gEQA0AAA5AbQAsAUAlAPIAXAIQAvAQAagpIALgLIBlhEIAbgTQAXgPAUgUQAbgdAXgoQAXgpANgvQAZhgBTgmQAPgHAQgFQAcgJARACQAKABAHADQAUAJAFAUIADAKQAFAXgFAfIgEAdQgGBLgoB5QgaBig4B0IgEAIQg+B6hGBQQhUBVhIACQgYgBgaAHQgsAKg7AyQgsAngiA4QgNAWgMAcQgWAxgOA1IgtCiIgYBZIgEAUQgCAggJAcQgIA7gVAcQgeAsgNAoQgQAlABA4QgDA7gPAiIAAADQgNAogkAsQgfAghogzQgsgMgxgYQhHgag1gCQhqgGhUB+Qg/Bhg+A4QgrAmgmAAQgNA+gOAkQgRA2gSArQgaA2gaAmIgXAfQgUAXgZARQgoAdhFAWQhKAUgnAYQgaANggAXIg5ApQgzAkhKApIhyBAIgSALQjeCCjODHQhAA7hIBKQiMCIhmByIgMAMQheBbg4AzQgmAmgcAiQgiAmgRAeQgGAKgEAFIgDAEQgHAKgGAFQgFAFgGADIgGACIgFAAQgIAAgGgFg");
	this.shape_49.setTransform(354.9066,839.1488);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("A6bcNQgFgHgBgLQgGgCgFgGQgMgMgFgdIgBgBQgHgqAQgkQANghAZgeQAdgfAVgcIAOgRIA1hDQAegnAogvIAkgmQgIgLADgdQAEgdAOgdQAYgsApgyQAwg7AVghQAUgfAWgqQAbg0AOgXQAvhSBKhXIAxg4QAogtAZgeIAZggQAsg4AZgxIAFgMQAYgqAKgoIAUgvIAOgdQAZg4AugmIARgRQAygmAmgfQAYgPAJgJQApgdAignQANgQAKgPQAWgcA1gsQAjgdAsgbIAjgVQAwgfAqgWQAogaACgaQAGgIgCgIQAHgqABgUQgMgUAvgeIAzghQAogaAogfQASgPAZgUQAbgaAqgXQAKgHAJgJQAxgeAnhGIAJgMQAvhEgchWQgEgPgCgNQgRg/APgXIAVgcQAPgQAQgPQASgQAcgTIAbgSIAUgOQAzglAqglIBohZIADgCQArgfA7goIANgIQA0gpArgLIAUgKQAmgUAkgLQAwgTAxgCQAyABA1AYQApASAkAOIAVAIQAtAQAagiIALgJQAqgVA3gkIAagRQAWgOASgTQAZgaAYgmQAWgmAPgrQAbhXBMgnQANgIAPgFQAZgJARAAQAIAAAHACQAUAGAHAQIAEAIQAJATAAAcIABAaQAGBGgcByQgQBdgvBuIgDAIQg1BzhBBOQhLBQhDAJQgXABgYAIQgoALg3AvQgrAmgeAzQgMAVgKAbQgTAtgLA0QgWBegRA7IgaBSIgFATQgEAcgLAbQgLA0gWAaQgdAogPAlQgSAigDAyQgJA1gQAfIAAACQgPAkgkAoQggAehfgmQgrgHgtgRQhEgSgxACQhiAAhRByQg9BXg9A2QgnAkgkADQgQA3gPAiQgTAygTAmQgbAygYAiIgXAcQgTAVgXARQgmAbg/AWQhDAVgnAYQgYANgeAVIg1AnQgxAihFAmIhrA9IgRALQjVB+i+C0Qg+A3hCBDQiNCFhZBiIgLAKQhZBTg4AvQglAhgcAdQgkAhgSAXQgHAIgFADIgDADQgHAIgHACQgEADgFABIgGABIgCAAQgHAAgHgHg");
	this.shape_50.setTransform(343.0198,854.2806);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("A4paTIgEAAQgIgCgFgIQgEgHAAgLQgFAAgFgFQgOgJgGgcIAAgBQgJgnAQghQANgeAagbQAegcAUgYIANgPQAagdAaghIBAhRIAhglQgFgLAEgaQAGgbAOgaQAXgqAlgvQAqg2AWghQASgdAVgnQAZgvAOgXQAthNBDhRIAsg2QAlgrAWgdIAXgfQAmg1AVgvIAFgMQATgmAIgpIAPgsIAMgcQATg4AnglIAPgRIBNhGQAWgOAJgKQAkgcAhgjQAMgPAKgPQAYgdAugmQAigbAogZIAhgSQAtgaArgRQApgUAGgUQAIgGgBgHIAWg0QgEgRArgbQAXgOAYgRQAmgZAkgdIAmgkQAYgaAigaQAIgIAHgJQAnghAZhJIAGgMQAihEgWhOQgDgOgBgNQgNg4AQgZIAUgaQAMgPAPgOQARgQAagSIAZgSIASgNQAwglAmghQAygqAxgnIADgCQAqgcA5ggIANgGQAwghAtgHIATgHQAlgPAigHQAugPAuABQAvADAyAVQAmAQAiANIAUAHQArAPAZgaIALgGQArgQAzgfIAZgPQAUgNARgSQAXgXAYgkQAWgjAQgnQAehOBEgoQANgIANgFQAWgKAQgCQAIgBAGABQAUACAJANIAFAGQAMAPAGAZIAFAXQASBBgPBqQgGBagnBnIgCAHQgrBsg9BOQhCBLg+AQQgVADgWAIQgkANg0AsQgpAkgaAvQgLATgJAaQgQAqgIAyQgQBagRA2QgMAogPAjIgGASQgHAZgMAYQgOAugXAZQgcAkgRAhQgUAfgIAsQgOAvgSAcIAAACQgRAfgkAkQghAchWgZQgpgCgpgLQhBgJguAGQhZAHhPBlQg6BOg8A0QgkAhghAGQgSAxgRAfQgVAtgUAiQgdAugXAfIgVAZQgSATgVAPQglAbg5AWQg7AVgnAYQgXANgbATIgyAkQgvAgg/AlIhkA6IgRAKQjLB7iuCfQg9A0g8A8QiNCChNBSIgKAJQhTBLg5ApIhAA1Ig5AtQgHAFgGACIgEACQgHAEgHgBIgGABIgDAAg");
	this.shape_51.setTransform(331.8603,869.4313);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("A3IYUIgIgDIgEgCQgGgDgEgJQgCgIABgJQgFAAgGgDQgNgHgIgZIAAgCQgLgkAQgfQANgbAbgXQAfgZATgUIANgNQAZgaAYgfIA7hMIAegkQgBgMAFgXQAHgZANgYQAXgnAhgsQAlgwAVghQASgcATgjQAXgpAPgYQArhJA7hLIAogzQAhgpAUgcQALgPAJgOQAhg0ARgtIAEgLQAPgjAFgpIALgrIAJgaQAOg4AfgkIANgRIBEhGQARgNAKgLQAggZAfgkQAMgNAKgOQAYgdAoggQAggbAlgVQARgJAPgHQAqgVAsgMQAqgNAJgPQAKgEAAgFQAVgZAQgRQAEgPAmgXIAsgdQAjgZAggcIAhgjQAWgcAagbIALgTQAcgkAMhLIAEgMQAThEgQhGIgCgaQgIgxAQgbIASgYIAagcQAPgPAXgSIAXgRIARgNIBOhCQAwgoAuggIADgCQApgZA3gYIANgFQAtgYAugDIATgFQAjgKAhgEQAsgIArACQAsAEAuATIBEAaIASAHQApAOAYgSIALgFQAsgJAvgbIAXgNQATgMARgQQAVgVAYgiQAWggARgjQAghFA9goQALgIAMgGQAUgLAOgDIAOgCQATgBALAJIAHAEQAPAKALAWIAKAVQAeA8gCBjQAEBUgeBhIgCAHQgiBlg3BMQg5BGg7AXQgSAGgUAJQggANgyApQgnAjgXArQgJASgHAYQgNAngFAwQgLBWgPAxQgMAlgRAgIgIAQQgIAWgPAWQgRAogXAXQgcAggTAdQgXAdgMAlQgSAqgVAZIAAABQgSAbgkAgQgiAZhNgMQgnADgngEQg9AAgqAIQhSAOhLBaQg4BDg6AzQgiAegeAJQgVArgSAdQgXAogVAeIgzBEIgUAWQgRARgVAQQgiAYgzAXQg0AWgmAYQgWAMgZASIgvAhQgsAeg6AiIhdA4IgQAJQjDB3ieCMQg6Axg3A1QiNB+hABCIgJAIQhOBDg5AkIhAAsQglAXgXAKQgHADgHAAIgEABIgEAAQgGAAgEgCg");
	this.shape_52.setTransform(321.1615,884.8368);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("A1jWcIgEgBQgJgCgGgFIgHgHIgDgDQgFgGgCgIQgBgIADgJQgGABgFgCQgOgEgJgYIgBgBQgMgiAQgcQANgYAcgUQAggWARgQIANgMQAYgWAXgdQAWgbAggsIAbgiQACgNAGgUQAJgWANgXQAWglAdgnQAfgsAWghQARgbARgfIAkg8QAphEA0hGIAkgwQAdgnARgaIARgdQAdgxANgsIADgKQAKgfADgpIAHgpIAGgZQAJg4AXgjIAKgRQAcgkAegiQAPgMAKgMQAbgZAeghIAVgZQAageAhgbQAegYAigSIAegOQAngQAugHQAqgHANgKQAMgCABgDIAzgfQAMgNAigUQAUgMAUgPQAhgXAbgcIAegiIAkg7QAEgJADgLQARgogBhNIABgMQAGhEgKg+QgBgNAAgLQgDgrARgcIARgXIAXgaQAOgPAUgRIAUgRIAPgNIBIg9QAtglAsgbIACgCQApgVA1gQIANgDQApgQAwAAIASgCQAigFAgAAQApgEAoAFQApAGAqAQIBAAXIARAGQAnAOAXgLIALgCQAtgEArgWIAWgMQARgKAQgPQATgTAYgfQAWgdASgfQAig8A2gpQAKgIALgGQARgMANgFQAHgDAGgBQASgEANAFIAJACQASAHARASIAOATQAqA2ALBbQAOBRgWBaIgBAHQgYBdgzBMQgwBBg2AeQgRAHgSAKQgbAOgvAnQglAggTAnQgIARgGAXQgKAkgCAuQgFBSgPAsQgLAhgUAeIgJAOQgKATgQAUQgVAhgXAWQgcAcgUAZQgZAbgRAeQgXAjgXAXIAAABQgUAWgkAcQgjAXhEAAQglAIgjACQg7AKgmAMQhJAVhJBNQg2A6g5AxQgeAbgbAMQgXAlgVAaIguA+Ig0A8IgSATQgQAPgTAOQggAYguAXQgtAWglAYQgUAMgXAQIgsAeQgqAdg0AfIhXA1IgOAJQi6B0iOB4Qg5AtgxAuQiNB7gzAyIgJAHQhIA6g5AfQgiAUgeAPQgmARgYAEIgIABIgIgBg");
	this.shape_53.setTransform(311.0485,900.3756);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("A0CUnQgKgBgIgEIgEgCQgJgEgGgJIgHgJIgCgFQgDgIAAgJQAAgIAEgJQgFADgGgBQgPgBgJgWIgBgCQgOgfAQgZQANgVAcgRQAhgSARgNIANgKQAXgSAWgbQATgYAdgrIAYghIANgeQAKgUAMgUQAVgjAZgkQAbgnAVghIAgg1IAig3QAog/AshAIAfguQAaglAOgZIAPgbQAXgvAJgqIACgKQAGgbABgqIADgnIACgYQAEg3AQgiIAIgRQAUgjAcgjIAVgYQAXgYAdggIAUgXQAbgdAbgWQAdgXAegPQAPgHAOgEQAjgMAvgBQArgBARgEQAOAAABgCQAjgIAggNIAwgbQATgLATgOQAegWAXgaQANgRAMgSQAQgeAKggIADgWQAFgrgMhOIgCgNQgIhEgEg2IABgXQABgkASgdIAOgWQAIgLAMgNQANgPASgRIASgQIANgMQAngkAagVQAqgjAqgVIACgBQAogSAzgJIAMgBQAngIAxAEIARABQAgAAAgADQAmACAmAHQAlAHAnAOIA7AUIAQAGQAlAMAWgDIALAAQAuADAngSIAUgKQAQgJAPgOQARgQAYgdQAWgaATgbQAlgzAugqIASgPQAQgMALgHIAMgGQASgIAPABIAKABQAVADAWAPQAJAHAKAJQA3AxAXBUQAYBMgNBUIgBAHQgOBVguBLQgnA8gyAlIgfAVQgXAPgsAjQgjAfgQAjQgHAPgEAWQgGAhABAsQAABOgOAnQgLAdgWAbIgKAMQgMAQgTASQgXAbgYAUIgxAuQgcAYgVAYQgcAdgZAUIAAAAQgVATglAYQgjAVg7AMQgkANggAIQg3ATgjAPQhBAdhGBBQgzAvg4AwQgbAYgYAPQgaAfgWAXIgxA1Ig0A0IgQAQQgQANgSAOQgeAWgoAYQgmAWgkAYIgnAbIgpAbIhWA4IhQAyIgOAIQixBwh+BlQg2ApgtAnIizCZIgHAHQhDAxg6AaQghAQgeAKQggAKgYAAIgJAAg");
	this.shape_54.setTransform(301.1654,915.941);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AzGSoQgTgMgHgXQgHgZANgRQgXANgQgdQgPgdAQgXQANgRAdgOQAigPAPgJQAdgQAbggQAQgUAbgqIEam6QAqhCASgkQAdg7AHgzQAEgfgFhRQgDhIAKgnQALgqAhguQAUgcAsgxQApgtAbgVQAoghApgJQAggHAxAEIBSAIQBcADBLg6QBOg8AEhWQADgugjhoQgghfAKg1QAIgoAegpQASgZApgrQAtgtAZgVQApghAngPQAsgQA5ABQApAAA9ALQCBAXB/ArQA3ATAbAEQAvAJAjgNQAXgIAYgVQAPgNAZgbIB4iDQAWgZAQgMQAXgSAXgEQAngHAwAfQBCArAkBMQAjBLgFBRQgGBPgoBJQgnBGhAA1Ig8AwQgiAegMAeQgNAiAGBJQAGBKgOAiQgKAZgYAYQgPAQgfAYQiKBrhPAxQguAbhkAzQhhAygxAdQhgA8iDBwIjYC5Qh1BdkMCrQkBClh9BmQiMB0gaASQhjBFhaAPQgSADgPAAQggAAgWgNg");
	this.shape_55.setTransform(291.531,931.5876);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AxrRJQgRgLgGgVQgHgXALgQQgUALgOgbIAAAAQgOgbAOgVQAMgQAagOQAfgNAOgJQAagQAYgeQAOgTAZgmQCAjOCBjNQAng8ARgiIABgDQAZg1AHguQAFgcgDhLIgBgcQABgtAIgcQAKgnAfgqQANgUAbgdIAUgWQAmgqAYgUQAmgeAlgKQAdgHAtAEQBHAGAFgBQBUABBFg1QBIg4AGhPQADgrgeheQgbhYALgxQAIgkAcgmQAPgVAggjIAHgHQApgqAYgTQAhgbAfgOIAKgEQApgPA0AAQAgAAAtAHIARADQBdAPBbAbIA1ARQAzARAZAFQAoAIAegJIAFgBQAWgHAWgSQANgMAXgXIBRhUIAcgdQAUgWAOgKQAVgQAVgDQAkgFArAdIAQALQAvAkAdA6IADAFQAaA3ADA7IAAAeQgEBIglBFQghA8g0AwIgIAHIg3AtQgeAcgLAcQgNAfAFBEQACAbgBAWQgCAfgHATQgKAXgWAXQgOAPgdAWQhOA+g7AqQgjAZgbARQgmAYhLAmIgVALQhZAvgtAbIgKAGQhRA0hqBZIgOAMIilCLIglAfQhLA7iKBbQhAArhQAyIgpAaQiBBShZA/Qg3AogpAgIhgBMQguAlgOAIQhXA7hPANIgJACQgOACgNAAQgfAAgVgOg");
	this.shape_56.setTransform(272.5186,919.2541);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AwQPsQgPgLgGgUQgGgUAKgPQgSAJgNgZIAAgBQgMgYANgUQAKgPAXgMQAbgNANgJQAXgPAVgcQAOgRAWgkQByi/B2i8QAjg3AQggIABgCQAYgwAHgrQAFgbgChDIAAgZQABgqAIgZQALgkAcgmQANgSAYgbIASgVQAjglAXgTQAigcAigJQAbgHApACQBAAFAFgCQBNgBA/gxQBCgzAGhIQAFgogZhWQgXhPAMgtQAIghAZgjQAPgTAdggIAGgGQAmgmAWgSQAegZAdgNIAJgEQAlgPAvAAQAegBApAGIAQACQBVANBVAZIAwAPQAvAQAXAFQAkAIAcgHIAEgBQAUgGAUgPQANgKAUgTIBJhIIAZgYQATgTAMgIQATgNATgCQAggDAnAaIAOAKQArAiAbA1IADAFQAZAzACA1QABANAAAOQgDBDggA/QgeA4gvAtIgHAGQgQAPghAbQgbAagLAaQgMAeAEA9QABAZgBAUQgBAcgIASQgIAVgVAVQgNAOgaAUQhHA5g2AoQggAXgZAQQgkAXhDAjIgTAKQhRAsgqAaIgJAFQhKAwhjBRIgMALQhnBXgyAoIgiAdQhHA3h9BSQg6AmhLAuIgnAYQh3BKhSA5Qg0AkgmAdQg2AqgjAaQgqAggOAIQhQA0hIAKIgIABQgMACgKAAQgeAAgUgOg");
	this.shape_57.setTransform(253.527,906.919);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Au0OOQgPgKgEgSQgGgTAJgNQgQAHgLgXIAAgBQgLgXALgRQAJgPAUgLQAYgNALgIQAVgOASgZIAfgxQBlixBrirQAfgzAPgdIACgCQAVgrAHgnQAFgZAAg8IABgXQACglAIgXQAKggAagjQAMgRAWgYIARgTQAfgiAVgRQAfgaAggJQAYgHAkABQA5ADAGgCQBFgDA6gtQA7gvAIhBQAGgkgUhNQgThHAMgpQAIgeAYgfQANgSAbgcIAFgHQAjgiAUgRQAbgWAagNIAIgDQAjgOAqgBQAcgBAlAEIAOACQBOAKBNAWIAsAOQArAPAVAFQAhAHAZgEIADgCQASgEASgMQAMgHASgRIBBg6IAWgUQARgQALgGQARgLAQgBQAdAAAjAXIAMAJQAmAfAaAxIACAEQAYAvADAvIABAaQgCA8gcA6QgaA0gpApIgGAGIgsAoQgZAXgJAYQgLAcACA3QABAXgBARQgCAagHAQQgIAUgSATQgNANgXATQhAA0gyAmIgzAkQghAVg8AgIgRAKQhJAognAZIgIAFQhDArhbBKIgMAKQhcBNgxAlIgfAaQhDAzhwBJQg0AihGAqIgkAVQhtBDhLAzQgwAggjAaQgyAlghAXQgmAcgNAHQhLAthAAGIgIABIgPABQgeAAgSgOg");
	this.shape_58.setTransform(234.525,894.5867);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AtZMwQgNgJgEgRQgFgQAIgNQgOAGgKgVIAAgCQgJgUAJgQQAIgNASgLQAUgMAJgIQASgOAQgWIAbgtQBXiiBgiaQAbguAOgaIACgCQATgnAIgjQAFgXACg1IABgUQACggAIgWQAKgdAYgfQALgPAUgWIAPgRQAcgeAUgQQAcgYAcgJQAVgHAhAAQAyACAGgDQA+gFAzgpQA1gqAJg6QAIgigQhDQgNg/AMglQAIgbAVgcQANgQAXgZIAFgGQAfgfATgPQAYgVAYgLIAHgEQAfgMAmgCQAZgCAhAEIANABQBGAHBGAUIApAMQAlAOAUAFQAdAHAWgDIAEgBQAQgDAPgJQALgFAQgNIA5guIAUgPQAOgNAKgEQAOgIAPAAQAZABAfAVIAKAJQAiAbAYAtIACAEQAWAqADAqQACALAAAMQgBA2gYA2QgWAugkAnIgFAFQgNAOgaAXQgVAWgJAWQgKAZABAyQABAUgCAPQgCAXgGAPQgIASgQARQgLAMgVARIhmBTQgaATgUAOQgeAVg1AdIgPAIQhBAlgjAXIgIAFQg9AohSBBIgLAJQhSBEgvAiIgdAYQg+AuhjBAQgvAfhBAlIggATQhlA8hDAsQgsAcghAXQgtAggfATQgiAZgNAGQhEAmg6ADIgHAAIgJAAQgdAAgRgOg");
	this.shape_59.setTransform(215.5375,882.2415);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ar/LSQgKgIgEgPQgEgPAGgLQgMADgIgSIAAgCQgIgSAIgOQAHgNAOgKQARgLAIgIQAPgNAOgUIAWgoQBKiUBUiKQAYgoANgYIABgBQASgjAIgfQAGgVADguIABgSQADgbAJgUQAJgZAWgcQAKgOASgTIANgPQAZgbASgPQAZgUAYgJQAUgHAcgCQArAAAGgEQA3gGAtglQAvgmALgzQAIgegLg6QgIg3AMghQAIgYATgYQALgPAVgWIAFgFQAbgcARgOQAWgSAVgKIAHgEQAbgMAigCQAWgCAdACIALABQA/AEA/ASIAkALIA0ASQAZAGAUgBIADgBQAOgBANgHQAKgDANgKQAZgRAYgPIARgLQANgJAIgDQANgGAMABQAWAEAaATIAJAHQAdAZAWAoIACADQAVAmAEAlIABAUQABAxgUAwQgSAqgfAkIgFAFQgKANgWAVQgTATgHAUQgKAYAAArQAAARgCAOQgCAVgGANQgHAQgPAPQgKAMgSAPQgxAqgpAhIgoAeQgcAVgtAZIgNAIQg5AiggAVIgHAEQg3AkhKA6IgKAIQhHA6gtAgIgaAUQg7ArhWA3QgpAag8AhIgdARQhcA0g8AmIhGAsQgoAbgdAQQgfAVgMAFQg+AfgzgBIgGAAIgDAAQgcAAgRgPg");
	this.shape_60.setTransform(196.5524,869.8953);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ap2KGIgFAAQgagBgPgPQgIgIgEgNQgDgNAFgKQgKABgHgQIAAgCQgGgQAHgNQAFgLALgJQAOgKAHgIQALgMALgTIATgkQA9iEBIh6IAhg4IAAgBQAQgeAIgcQAHgTAEgnIACgOQADgYAJgSQAJgWAUgYQAJgMAQgRIAMgNQAWgXAQgOQAVgSAVgJQARgHAYgCQAkgCAHgFQAvgIAoghQApghALgsQAJgagFgyQgEguANgeQAIgUAQgWIAdggIAEgEQAYgYAPgNQAUgQASgJIAFgDQAYgMAdgDQAUgDAZABIAKABQA4ACA4APIAfAKIAuAQQAVAHARAAIADAAQAMAAAMgEQAIgCALgGQAVgLAUgJIAOgGQALgGAHgBQAKgDALACQASAGAVARIAIAGQAYAVAVAkIACADQATAiAEAfIACASQADAqgQAsQgPAlgaAhIgEAFQgJAMgSASQgPASgHASQgJAVgBAlQgBAPgCANQgCARgGAMQgGAOgNAOQgJAKgPAOIhOBEIgjAaQgaAVglAWIgLAHIhOAyIgGAEQgwAghDAyIgIAGQg9AxgrAdIgYASQg2AnhKAuQgjAWg3AdIgaAOQhSAtg2AfIg+AlQglAWgaAOQgbAQgMAEQgwAVgoAAIgLgBg");
	this.shape_61.setTransform(177.5547,857.3598);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AokI3IgEgBQgUgCgNgOQgGgIgDgLQgDgLAEgJQgIAAgFgOIAAgDQgFgNAFgMQAEgKAJgJQAKgJAFgIQAJgLAIgQIAOggQAwh2A9hoIAcgxIAAgBQAOgaAIgXQAIgRAGghIACgLQAEgTAJgQQAJgTARgUIAWgZIAKgMQATgTAOgMQASgQASgJQAPgHATgEQAegDAHgFQAngLAigcQAjgdANglQAKgXgBgpQABgmANgZQAIgSAOgSIAZgbIAEgEQAUgUAOgMQARgOAPgIIAFgDQAVgLAYgDQARgEAWAAIAIAAQAwgBAxANIAcAIIAnAQQASAGAOACIACAAQAKABAKgBQAHABAJgDQARgFAQgCIAMgCQAIgCAGABQAIgBAIADQAPAIARAOIAGAGQATASAUAgIACACQARAdAFAbIACAPQAEAkgMAnQgLAggUAeIgEAEQgHAMgOAQQgMAQgGAQQgIATgDAfIgDAXQgCAPgGALQgGALgLAMQgHAKgNAMIhDA8IgdAYQgXAUgeATIgJAGIhCAtIgGAEIhkBGIgHAFQgzAngpAbIgVAPQgzAjg8AlQgeASgxAYIgYAMIh3A/Ig4AdQggASgYAKQgXANgLACQgkAMgcAAQgMAAgLgCg");
	this.shape_62.setTransform(158.595,843.6985);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AnSHoIgEgBQgPgFgJgNQgGgHgCgKQgCgJACgHQgFgDgEgLIAAgDQgDgMADgJQADgKAGgIQAHgIADgHIAMgZIAKgbQAihnAyhZIAXgpIABgBIAUgoQAHgPAIgZIADgKQAEgOAJgOQAJgPAPgRIATgVIAJgKQAPgQANgLQAPgNAPgJQALgHAQgEQAWgFAIgHQAggMAcgYQAcgZAOgdQAMgUAEggQAFgeAOgWQAHgOAMgOIAWgXIADgDIAdgbQAOgMANgIIAEgCQARgKAUgFQAPgDARgCIAHAAQApgDApAKIAYAHQAUAHANAHIAZAKIACAAIAQAFQAGACAHABQANABAMAFIAJACQAGABAEADQAGACAHAEIAYAWIAEAEQAPAPASAbIABACQAQAZAFAVIADANQAFAegIAiQgHAcgPAbIgCAEQgGAKgLAPQgJANgFAOQgHARgEAZIgEATQgCAMgFAJQgGAKgIALIgSASIg2A1IgYAWQgUATgXAPIgHAGIg3AoIgFADIhVA7IgHAEQgoAdgoAYIgSAMQguAfgwAcQgYAOgsAUIgUAKIhnAxIgxAWQgcAMgWAIQgTAJgLABQgVAFgTAAQgSAAgPgFg");
	this.shape_63.setTransform(139.662,830.0421);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AmAGXIgDgBQgLgGgGgNQgEgGgBgIQgCgHABgHQgDgEgCgJIAAgEQgCgJACgIQABgIADgHIAFgPIAHgWIAGgXQAUhYAmhIQAKgTAJgPIABAAIASggIARgfIAEgHQAFgLAJgLQAIgMANgNIAQgRIAHgIIAXgWQAMgLAMgIQAJgHALgGQAQgHAIgHQAYgOAXgUQAWgUAPgXQANgRAJgWQAKgWANgSIASgWIASgSIACgCIAYgXQALgKALgGIADgDQAOgIAPgGQAMgEANgCIAGgBQAhgGAjAIIATAFQAQAGALAHIATALIACABIALAJIAKAIQAJAIAIALIAGAHIAHAJIAIAJQAIAMAJAKIACADIAbAjIABACQAPAVAFAPIADAKQAGAZgDAcQgEAXgKAZIgBADQgEAKgHAMQgGALgEAMQgHAQgFATIgEAOQgDAJgFAHIgLARIgOAQIgqAuIgTATQgSATgOALIgGAFIgsAjIgEADQgcAVgrAaIgFADQgeAUgmAVIgPAKQgqAagjATQgTAKgnAQIgRAIIhWAjIgrAPQgXAHgUAEQgPAFgLABIgOABQgbAAgSgMg");
	this.shape_64.setTransform(120.7738,816.4564);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AkwFGQgQgSgBgrQgDiSA3hYQAPgYAZgaIAuguIDfjZQAXgWAOgLQAWgRAVgHQAcgLAdAGQAfAHASAWQAPASAJApQALAuAJAQQAGAKAPASQAOARAFALQATAigLA3QgJAqgVAjQgPAcgqAzIgjApQgVAXgTAPQgWAQgiATIg8AeQgvAcgaAMQgPAHguAPQgtAPgZAHQgnAKghABIgKABQgnAAgTgVg");
	this.shape_65.setTransform(101.9696,803.0079);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[]},1).wait(127));

	// Слой_9
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("ADOlEQBqhrBvhNQBvhMBNgUQBJgUgFArQgHAuhoBgQhfBXgpBtQgPAngaCEQgRBZgnAnQg2A1iBANQjrAYlBDrQhlBKhhBVIhMBHQRzy5j/ESg");
	this.shape_66.setTransform(1319.1691,129.9683);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AqvJMIAWgUQAYgWAWgZQAUgVAWgbIAvg0IAvgyICri3QBchhBPhQIAqgoQASgRASgPIAkgeIA0gqIA4gxIA0g0IAggcIAigiIAmgoIgKAMIAjglIAkgiIAjghIAegbQAQgPAQgNQAXgUAYgRIAbgTQApgaAlgPQAVgJAUgFQAWgHAUgDIAIgBQAqgHAQALQAMAJgCASQgBATgPAZQgMAVgVAYQgQAUgXAWIgRASIgdAlIgkA5QgPAZgPAbQgPAcgOAdIgBACQgJASgMAjIgUA5IgIAoIgFASIgFATQgPAygZAfQgLAPgMAKQgVASgfAOQgWAJgZAHIgwAMIgtAJIgNADIg9APQglAKgoAPQgkAMgoAQQilBEjAB/QhMAxhKA2IgiAYIgRALIgLAHIgCACIgJAIIgLAKQgLAJgNAHQgOAJgMAKIATgUg");
	this.shape_67.setTransform(1301.7643,140.052);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ArJJKIAYgUQAZgVAXgcQATgUAYggQAXgbAZgcIAxg1QBjhtBQhUQBhhmBUhQIAtgqQAUgQAUgMQAUgPATgKIA2gfIAyghIAqglQASgLASgPQATgSARgRIAugwIgIAHIApgqIAlgkIAkgkIAdgfQAPgQAQgOQAXgWAZgSIAcgUQAsgbAngMQAWgHAVgDQAVgFAVAAIAJABQApgDAQAOQAMAIgBAUQgBATgNAbQgLAWgVAaQgRAVgYAWIgNATIgVAmIgdA7IgeA4IggA6IgCACQgLASgQAiQgKAWgQAfQgCATgGAXIgGASIgHATQgSAygeAeQgLAOgOAKQgXARghANIgxAQIgyANIguAMIgNAEQghAMgdAIIhPAcIhPAeQixBHjKB3QhRAwhQAyIglAVIgRAJIgKAFIgDABIgHAGIgJAGQgKAHgOAFQgPAGgKAHQAIgLAMgJg");
	this.shape_68.setTransform(1284.3788,150.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ArkJJQALgJAPgKQAbgVAYgdQARgTAbglQAXgdAagdIAzg5QBqh0BQhVQBmhsBahSQAagZAXgRQAVgQAWgKQAVgMAUgHIA5gUQAegMAPgFIAfgWQATgJATgPQAVgRATgTQBVhaggAhQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIArgtIAlgmIAkgnQAOgOAPgTQAQgTAPgOQAXgYAagTQAOgLAPgKQAugcApgJQAXgGAWAAQAVgDAWADIAJACQAoACARAPQAMALgBATQABAVgNAbQgKAZgVAbQgRAXgZAXIgKASIgNAnQgIAdgOAiQgNAdgRAeQgRAegTAcIgCACQgNASgTAgQgMAVgUAdQgCAUgHAXIgHAUQgDAJgFAJQgVAygjAdQgMANgQAKQgYAQgjAMIg0AQIg0AOQgWAGgZAJIgNAFQgjARgaAIIhSAgIhTAfQi8BJjUBxQhXAthWAuIgnAUIgSAGIgKACIgCAAIgFAEIgIAEQgIAFgPABQgQADgJAFQAIgLANgKg");
	this.shape_69.setTransform(1267.001,159.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ar/JKQAMgJAQgKQAdgUAZgfQARgSAcgqQAXgeAbggIA1g7QBwh9BShWQBshxBehUQAcgaAYgRQAXgPAYgIQAXgJAVgEQAkgHAWgBQAegFAKADQATgKADADQATgGAWgPQAWgSATgUQBUhYgWAWIAGgIIAsgvIAmgoQAUgVARgUQANgPAPgUQAPgWAPgPQAXgZAbgVQAPgMAQgJQAwgeArgFQAYgFAWADQAWgBAWAGIAJADQAoAGARASQAMALAAATQABAXgLAbQgJAbgVAdQgSAZgaAXIgFASQgCATgEAVQgDAfgNAjQgKAfgTAfQgSAggVAbIgDADQgQASgVAdQgOAUgZAbQgBAWgIAXQgDAJgFALIgKATQgYAxgnAcQgNANgSAJQgZAPgmAMIg2APQgbAGgbAJQgWAHgaAMIgNAFQglAWgZAIQgmARguATIhWAgQjIBLjdBrQhdAqhcAsIgpAQQgLADgIABIgKgBIgBAAIgEABIgFACQgIADgQgCQgQgBgIAEQAHgNAOgJg");
	this.shape_70.setTransform(1249.6087,169.4554);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ArwJpIgJgDIgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAABgBAAQgHAAgRgFQgRgEgHABQAIgNAPgJQAMgJASgJQAegTAagiQAQgRAegvQAXgfAcgiIA3g+QB3iFBThYQBxh0BkhYQAegaAZgQQAYgPAagGQAZgHAWAAQAmgCAWAFQAdACAGAMQAOgDgDALQAVgEAXgPQAXgRAVgWQBShWgMAMIAMgQIAugyIAngqQAVgXAQgUQANgQAPgXQAPgYAOgPQAXgbAcgXQAPgMARgKQAygeAugCQAZgDAXAFQAVABAXAJIAJAFQAoAJARAUQAMANAAATQADAZgLAcQgIAcgVAeQgSAbgbAYIgBASQACATgBAVQADAhgLAlQgJAhgUAgQgTAhgYAbIgDADQgSASgYAbQgQATgdAZQgBAWgJAYQgDAKgGALIgLATQgcAxgsAbQgOAMgTAJQgbAOgoALIg4AOQgdAHgbAJQgXAIgaAOIgNAHQgmAagYAIQgnAUgwAUQgnAPgyATQjTBNjoBkIjEBQQgaAKgSAEIgNABIgGAAg");
	this.shape_71.setTransform(1232.224,179.5854);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AsRJ1QgGgDgDgCIgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBAAIgXgKQgSgHgGgBQAHgOARgJQAMgJAUgJQAggSAbgkQAOgQAgg0QAXghAegjIA5hCQB9iMBVhaQB1h5BphaQAhgbAagQQAagNAcgEQAagFAXADQApAEAWAKQAcAKABAUQALADgKAUQAVgBAagQQAYgRAXgXQBQhTgDAAIATgYIAvgzIApgtQAVgYAQgWQANgQAOgZQAPgaAOgQQAWgdAdgXQAQgNASgKQA1ggAwABQAZgBAYAHQAVADAXANIAKAGQAnAOASAWQALANACAUQADAagJAcQgIAfgVAfQgSAdgcAYQACAJAAAJQAHATADAWQAHAigJAnQgIAjgVAiQgUAigaAbIgDACIgwAsQgSARgiAXQABAWgKAaQgEAKgGALIgNAUQgfAwgxAaQgOALgVAJQgdANgqAKIg7AOQgeAHgbALQgYAIgaARIgOAIQgoAegWAJQgnAWgyAVQgoAQg1ATQjfBPjxBeQhoAmhnAkQgcAJgTADIgDAAQgKAAgHgCg");
	this.shape_72.setTransform(1214.8625,190.0233);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AsxKCQgHgFgCgEIgBgBQgBgCADgEQACgFgCgBQgEgEgTgLQgTgKgEgEQAGgOASgKQANgIAVgIQAigSAcgmQANgPAig5QAXgiAfgmIA7hEQCDiVBXhaQB6h/BuhcQAjgcAbgPQAcgNAegBQAagDAaAGQArAKAVAQQAcARgDAcQAGAKgQAcQAWACAcgRQAZgQAYgZQBOhQAHgLIAbggIAwg2IAqguQAVgaAQgXQAMgQAPgcQAPgcANgQQAWggAegYQAQgNATgLQA3ghAzAEQAZABAZAKQAVAFAYAPIAKAIQAnASARAYQAMAPACAUQAEAbgIAdQgHAhgUAhQgTAegdAZIAGARQALATAGAXQAMAkgHApQgGAkgWAkQgWAigdAbIgDADIg1AqQgUAQgmAUQABAXgKAbIgMAWQgGALgIAJQgiAvg1AaQgQAKgXAIQgeAMgsAKQgjAGgbAHQgfAIgcALQgYAKgbASIgNAJQgqAjgVAJQgnAZg0AWQgpAQg4AUInlCpQhuAkhtAgQgeAIgTACQgMAAgIgEg");
	this.shape_73.setTransform(1197.5279,200.4531);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("As9KVQgNgBgIgFQgHgGgBgFIgBgDQgBgCAFgGQADgGgCgDQgDgFgTgPQgUgNgDgGQAGgPATgJQANgIAXgIQAjgSAdgnQAMgPAkg9QAXgkAggnIA9hHQCKieBYhbQB/iEB0heQAlgeAcgNQAdgNAgABQAcAAAbAJQAuAPAVAWQAaAZgHAkQACARgXAkQAYAEAegQQAagQAagaQBLhPARgVIAigoIAyg4IAqgxQAWgbAQgYQAMgRAOgeQAPgeANgRQAWgiAfgZQAQgOATgLQA6giA1AHQAbACAZANQAVAIAZASIAKAIQAmAXASAaQALAQADAUQAFAdgHAeQgGAigUAjQgTAggfAZIAKARQAQAUAJAXQASAlgGArQgFAmgXAlQgWAkggAaIgEADQgZASghAWQgWAPgqARQACAZgMAbQgFAMgIALQgHALgJAKQgkAvg6AYQgRAKgZAHQgfALgvAJQgkAGgbAHQgiAIgcAMQgYALgbAUIgOALQgrAngUAJQgoAbg1AXQgqARg7AVQj1BUkGBRQhyAhh0AdQgeAHgTAAIgCAAg");
	this.shape_74.setTransform(1180.1663,210.8411);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AtdKkQgNgCgJgHQgHgHgBgHIAAgDQAAgDAFgHQAFgIgBgEQgCgIgUgRQgWgQgBgIQAGgQAUgJQANgIAZgIQAlgRAegpQALgOAlhCQAYgmAhgpIA/hKQCQilBahcQCEiKB5hgQAngfAdgMQAfgMAiADQAdACAdAMQAvAVAVAbQAaAggMAtQgCAYgdAsQAZAHAggRQAbgQAbgbQBKhMAbghIAogvIAzg7IAsgyQAXgdAPgZQALgSAPggQAOggAMgSQAWgkAggaQARgOAUgMQA9giA3AJQAbAEAaAQQAVAJAZAVIALAKQAlAbASAcQAMARADAVQAGAegGAeQgFAlgUAkQgUAhgfAaIAOARQAUAUAMAYQAXAmgEAtQgDAogZAnQgXAlgiAaIgEACQgbATglAUQgXAMgvAQQACAagMAcQgGAMgIAMQgIALgKAKQgoAug+AXQgSAJgaAHQgiAKgwAIQgnAGgbAHQgjAIgcANQgZAMgcAXIgOALQgtArgSAKQgoAeg4AYQgqASg+AVQkABXkQBKQh4Afh5AZQgcAGgSAAIgIgBg");
	this.shape_75.setTransform(1162.825,221.2615);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AuAKzQgNgDgJgJQgHgIAAgIIAAgDQAAgEAHgJQAFgJAAgFQgBgKgVgVQgWgTgBgLQAGgQAWgJQANgHAbgIQAmgQAfgsQAKgNAnhGQAYgoAigrIBBhNQCXitBbheQCJiOB+hiQApggAfgMQAggLAkAFQAfAEAeAPQAyAbAUAhQAZAogQA0QgGAfgkA0QAaAKAigRQAcgPAdgdQBIhKAkgrIAvg4IA1g9IAtg0QAXgeAPgbQALgSAPgiQAOgjAMgSQAVgmAhgbQASgPAUgMQA/gkA6ANQAcAGAbASQAUALAaAYIAMAMQAkAfASAeQAMASAEAVQAHAfgFAgQgEAmgVAlQgTAkghAaIASAQQAYAVAQAYQAcAogCAvQgCApgaApQgYAmglAaIgEACQgeATgoARQgZAMgzAOQADAbgNAdQgHAMgIAMQgJALgKALQgrAthEAWQgSAIgcAGQgjAKgzAHQgpAGgbAGQglAJgcAOQgZAMgdAZIgOANQguAwgRAKQgpAgg5AZQgrAThBAWQkMBZkaBEQh9Ach/AWQgXADgRAAIgRgBg");
	this.shape_76.setTransform(1145.7317,231.6903);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AupLCQgOgFgJgKQgHgJAAgJIAAgEQABgFAIgLQAHgKAAgGQABgMgXgYQgXgXABgMQAFgSAXgJQAOgGAcgIQAogPAgguQAJgMAphMQAYgoAjgtIBDhQQCdi2BdhfQCOiTCEhkQAqghAggLQAjgLAlAIQAhAGAfATQA0AfAUAoQAZAvgVA9QgLAlgpA9QAbAMAkgSQAdgPAegeQBGhIAug2IA2g/IA2g/IAug3QAYgfAPgcQAKgTAOgkQAPglALgTQAVgnAigdQASgQAWgMQBBglA8ARQAcAHAcAUQAVAOAaAbIAMANQAkAjATAgQALAUAEAVQAIAggDAgQgDAogVAnQgUAlgiAbQAMAIAKAJQAdAUASAZQAhAqAAAwQAAAsgbApQgZAngoAaIgEADQggARgrAQQgbALg4AMQAEAcgOAeQgHAMgJANQgKALgLAKQguAthIAVQgUAIgdAGQglAIg1AHQgrAFgcAGQgmAJgcAPQgaANgdAcIgOANQgwA1gQAKQgoAig8AbQgrAThEAXQkYBbkjA9QiEAbiEASQgSACgPAAQgPAAgLgCg");
	this.shape_77.setTransform(1129.3245,242.1396);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AvTLQQgPgFgIgMQgIgKABgLIABgEQABgGAJgMQAIgMABgHQACgOgYgbQgXgaACgPQAFgSAYgJQAOgGAegIQApgOAhgwQAIgLArhRQAYgqAkgvQAXgcAvg3QCji9BehgQCTiZCJhmQAtgiAhgKQAkgLAnAKQAiAJAhAWQA3AlATAtQAYA3gZBFQgPAsgwBFQAcAOAmgRQAegPAgggQBDhFA5hBIA8hHIA4hCQAggmAPgTQAYggAPgdQAKgTAOgnQAPgnAKgTQAWgqAigeQATgQAWgNQBEgmA+AUQAdAIAdAYQAUAPAcAfIALANQAkAoATAiQALAVAFAVQAJAigDAhQgCAqgUAoQgVAngiAcQANAHAMAJQAhAVAWAZQAmArACAzQABAtgcArQgaAogrAYIgFADQgiATgtAOQgdAJg8AKQAEAdgPAeQgHAOgLAMQgJAMgNAKQgxAshNAVQgUAGgfAGQgmAHg4AGQgsAFgdAGQgnAJgeAQQgZAOgeAeIgOAPQgyA5gOAKQgpAlg+AcQgsAUhHAXQkiBdkuA3QiJAYiKAPQgPACgNAAQgVAAgNgFg");
	this.shape_78.setTransform(1112.946,252.5787);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Av8LfQgQgGgIgOQgIgMABgLIABgFQACgHAKgOQAKgNABgIQADgRgZgdQgYgeADgRQAFgSAZgJQAPgGAfgHQAsgOAigzQAGgJAthWQAYgrAmgxQAWgdAxg5QCqjFBfhiQCYieCOhoQAvgjAjgKQAlgJAqAMQAjAKAiAaQA5AqATA0QAXA9geBOQgSAzg3BNQAdARAogSQAggOAhgiQBBhCBDhMIBDhQIA5hDQAhgoAPgTQAZgiAOgeQAKgUAOgpQAOgpAKgUQAWgsAjgfQATgRAXgMQBGgnBBAWQAeAKAdAaQAVASAcAhIAMAPQAjAsATAlQALAVAGAWQAKAjgCAiQgBAsgVApQgVApgjAcIAdAQQAlAVAaAaQArAsADA1QADAvgdAsQgcApgsAZIgGADQgkASgxAMQgeAIhBAJQAFAdgQAfQgIAOgLANQgKAMgNAKQg1ArhRAUQgVAGghAFQgoAGg5AGQgvAEgdAGQgpAJgeARQgaAPgeAgIgOAQQg0A9gMALQgqAnhAAeQgsAUhKAYQkuBgk4AwQiOAWiQALIgXABQgaAAgPgGg");
	this.shape_79.setTransform(1096.542,263.0395);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AwmLuQgQgIgIgPQgKgQAFgPQACgIAMgPQAKgPACgJQAEgTgZghQgaggAFgTQAEgUAbgJQAPgFAhgHQAtgNAjg1QAFgIAvhbQAYgtAngzQAWgdAzg8QCwjMBhhkQCdijCUhqQAxgkAjgJQAngJAsAPQAlAMAjAdQA7AwATA5QAWBFgiBWQgXA6g8BVQAeATAqgSQAggOAjgiQA/hBBMhXICFidQAjgpAOgUQAagjAOgfQAJgVAOgrQAOgrAKgVQAghHBFglQBIgoBDAZQAfAMAeAdQAUATAdAlQAsA6AWAtQAcA8AAA3QgBAugUArQgVArglAcQBAAbAnAlQAxAuAFA2QAEAxgeAuQgdApgvAZQgoAVg4ALQghAGhFAHQAGAegRAgQgQAcgdAWQg3ArhXASQgwALhtAJQgxAEgdAGQgrAJgeASQghAUgmAwQg2BBgLALQgqAqhBAfQguAVhMAYQnKCPnbAYIgTABQgeAAgSgIg");
	this.shape_80.setTransform(1080.1452,273.487);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AyFMpIgLgDQgSgGgLgPQgMgPABgPQAAgIAHgOIABgCIAHgYIAAgBQAAgKgJgOQgDgFgFgFIgMgLIgBgBQgMgLgHgMQgKgTAEgOQAFgPARgKIAOgGIAUgFQALgFATgGIABgBQAPgEAPgJQAVgMAUgVQALgMAKgOIALgSQASgdAig8QAegyArg3QAcgjA3hBIAjgqQAcggAZgbQAcgdAagUQAmg4AbguQAUgoAWgZIARgaQALgQANgPQAXgaAbgXQAdgZAdgVQAcgUAegSQAbgSAfgRIBXgyIARgJIAdgPIAigTIAdgQQAVgIATgEQARgCASADQASABATAJIAbANQAUAOAPAMQAYAVAMAbQAJARAEAUQAIAogIA0IgDASQgFAtgqBLIgHALQAPANAQAEQASgDAXgMQAOgIAPgMQAWgPAWgWIAighQAegdAdgZQAbgXAbgSIAPgLQAWgPAhgdIAKgHQAIgHAGgOQAXggAogrIAngqIATgXQAgglATggQAPgWATgqQALgYAJgQQAIgOAGgJQAhgtAigSQASgKAYgJQAUgFAWgEQAigGAiAGQAUADAWAGQAjALAkAYIAJAHQAXAPAcAcQAoAnAaAmQAJAOAHAOQASAjABAjQABAdgDAcQgFAigPAhIgNAbQgKASgFAMQgNAYgOAOIAqANQAtAOAfAZQAOALALANQAUAaAKAaQAGARACARQABALAAALQgDAogaAnIgEAEQggAtgvAXIgIAEQgRAIgUAGQgVAGgZAFIgaAEQgoAFhKAFQAAAcgXAdQgVAZghAUQgrAkg6AXQgRAGgRAFQgKAEgLACIgLACQggAFgxgFQghgFgpACIgTABQgjACgYAFIgKADQgfAHgcAOQgMAFgKAGQgeATggAkIgSAVIgjApQgeAfgLAIIgIAFQgWASggAMIg8AZIgDABIg6AXIg/AcIgNAFQgdANgaAJQghANghAJIgjAIIgkAJIgrALIgpANQgpAOglAKIhKAWQgYAGgdAKQgdAKgbAGIhoAZQg6ANg0AJQgyAJg3ANQg5ANg1AHIgzAGQgTADgQAAQgQAAgNgDg");
	this.shape_81.setTransform(1056.3241,290.0625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AzuNiIgMgDQgVgFgOgOQgOgOgCgPQgCgIAEgOIABgCQAAgRACgIIgBgBQgDgMgLgMQgEgEgGgDIgNgJIgCgBQgOgKgIgPQgLgUAFgPQAGgRATgLQAHgDAJgDQAKgDAMgCQAKgIAUgHIACgBQAPgGASgKQAYgNAWgXQAMgMANgQIANgTQAXghAlg+QAkg3Awg8IBbhuIAogvQAfglAcgdQAhgfAegRQAig/ATg2QAMgyAUgYQAGgQAIgOQAKgTANgRQAXgeAggZQAhgaAigSQAggTAjgOQAegQAlgMQA2gUAugXIATgJIAhgNQATgIATgMQARgKANgMIAjgUQAPgGAPgBQAQgFARAGQAMAFAMAAIAfAMQAWAKALATQAKAKAHAQQAOAeAHAvIABARQANAqgmBUIgGANQANAQAPAGQAUgGAXgOQAPgKAQgNQAYgTAZgXIAmglQAkgfAhgXQAfgTAegKIAQgHQAZgGAhgUIAKgEQAIgFAFgTQAUgiAygxIAtgtIAXgYQAkgnAZghQAVgXAXgpQAPgXANgRIASgWQArgrAhgFIAngHQAVABAXgCQAmgCAlAIIAvAJQAmAKAsAUIAKAGQAdANAeAZQAxAkAfAoQAMAQAIAOQAUAngGAnQgCAfgHAeQgKAlgSAiIgQAdQgOAUgBAMQgHAXgFAJIAvAIQAzAJAjAXQAQALAMAPQAXAdAMAbQAHATACATQACAMgBAMQgDAsgfArIgEAFQgmAxg0AZIgJAEQgTAIgWAGQgXAFgeADIgcADQgvAEhPAEQgHAZgbAaQgaAXgmASQgvApg/AcQgSAJgSAFIgXAHIgNACQgjAEgygPQgjgMgrgBIgVAAQgnADgaAGIgLADQghAJghAPQgNAGgLAHQgiAVgjApIgTAWQgYAdgRAQQghAggPAGIgJAFQgYAQgmAJQgiAIghAMIgEABQgdAJgiAQQgeAOgnAUIgOAHQgfASgbAKQgkARglAJQgRAFgWAEQgWAEgSAFQgXAFgYAJQgVAGgZAKQgtASgmANIhQAeQgXAGgiARQgfANgdAKIhxAhQhDAUg0AMQg0AMg9AWQg/AVg3AKQgcAHgcAEQgbAFgWAAIgVgBg");
	this.shape_82.setTransform(1032.5146,306.6123);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("A1XOiIgNgCQgXgEgQgNQgRgOgFgPQgFgIACgOIAAgCQgFgTABgHIAAgBQgGgMgNgKQgEgEgIgCQgIgCgHgFIgCAAQgQgJgKgRQgMgWAGgRQAHgTAVgLQAJgEAJgCQALgDAOgCQAIgKAWgKIACgBQAQgHAUgKQAbgPAZgYQANgNAOgSIAPgUQAcglAqhBQApg7A1hCIBlh4IArg0QAigpAggeQAmghAigOQAdhIALg9QAEg7ASgYQAEgSAHgQQAIgWAOgTQAYgiAkgaQAlgcAogQQAjgRApgKQAggOAsgIQA+gOAygVIAWgIIAlgMQAUgGAWgPQASgMALgQQASgOAOgOQAMgLAOgDQANgMAOADQALACAJgGQARACALgEQASAAAOALQALAEAKAKQAUAWAVAqIAFAPQAfAmgiBeIgGAPQANAUANAIQAUgJAYgRQARgMARgPQAagVAbgaIArgnQApgiAlgUQAjgRAhgBIASgCQAbABAhgKQAFACAFgCQAJgDADgYQASglA7g2QAbgaAZgXIAagZQAqgoAegiQAagZAcgpQASgWARgRQAMgNAKgIQA2gpAeAIQAQAEAXABQAUAGAZABQApACApAKQAWAFAeAEQAqAIAyARIAMAFQAhAKAjAXQA5AhAkArQAOAQAJAQQAXAqgMArQgHAigLAfQgOAngWAkIgTAeQgRAXADANQgDAVAFAEIA0AEQA6ACAmAXQATAKANARQAaAfANAeQAIAVADAUQACAOgBANQgDAuglAwIgEAFQgrA3g6AZIgKAEQgVAIgZAFQgYAGghADIggACIiKAEQgNAWggAYQggAUgqAQQgzAuhDAhQgUALgTAGQgNAFgNADIgOACQglAEg0gaQgkgUgtgDQgMgBgLAAQgsADgcAIIgMAEQgiAJgmASQgOAHgNAIQglAXgmAsIgVAZQgbAfgSARQglAggTAGIgKAFQgbAOgrAFQgoAEgjALIgEABQghAJglASQgfAQgqAZIgPAJQgjAWgbAMQgnAUgoAKQgSAFgZAEQgZAEgTAFQgaAGgaAKQgWAIgbAMQgzAXgnAPIhWAmQgWAHgmAXQgiARgeAMQg1AThGAYQhLAag1AOQg2AQhDAeQhEAeg6AOQgdAJgeAGQglAHgdAAIgMAAg");
	this.shape_83.setTransform(1008.6805,322.3944);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("A3APoIgPgBQgZgEgSgMQgUgMgIgQQgHgIgBgOIAAgDQgLgUACgGIgBgBQgJgNgPgIQgFgDgJgBQgJgBgHgEIgDAAQgSgIgLgTQgOgXAIgUQAIgUAXgLQAJgEALgDQAMgDAPgCQAGgMAYgMIADgCIAngTQAdgPAcgbQAPgNAQgTQAGgHAKgPQAigpAthDQAvhAA5hGIBuiDIAvg4QAmgvAjgfQArgkAmgKQAZhQADhFQgEhEAQgXQACgUAFgTQAHgYAOgWQAZgmApgbQApgdAtgPQAngPAugGQAigLAzgEQBGgJA3gTIAZgHIAogKQAVgFAZgSQATgNALgUQAPgSAMgTQAKgOAMgIQAKgSAMAAQAJAAAIgNQAOgDAJgMQAQgKAPACQALgCANAGQAbALAkAmIAKAOQAvAigdBoIgFAQQAMAXALALQAVgNAZgTIAjgeIA5g0IAwgqQAvglApgRQAmgPAlAIIATADQAeAJAgAAQAFADAGAAQAJgBACgdQAQgnBEg8QAdgcAdgYIAegaIBShNQAggbAhgnQAWgXATgQQAPgNAMgIQBBgnAcAWQAPALAVAGQAVAMAbADQAsAGAsAMQAXAFAjAEQAsAHA5ANIAOADQAmAIAmAVQBCAdApAuQAQARAKARQAaAugSAvQgLAkgPAhQgSApgbAlIgWAgQgUAaAIAMQABAVAPgBQAcAAAdgBQBAgEAqAWQAVAKAPASQAcAjAOAfQAKAWADAXQACAOgBAPQgDAygpA0IgFAFQgxA8g/AaIgLAEQgXAIgbAFQgaAFglABIgjACIiWACQgUAUglATQgkASgvAOQg4A0hHAmQgVANgUAHQgOAFgOADIgQACQgoAEg1glQgmgcgvgEQgNgCgMAAQgxADgeAJIgNAEQgjALgqAVQgQAHgOAIQgpAagoAwIgYAbQgeAjgUAQQgnAggYAGIgLAEQgdANgxABQgtAAglAKIgFABQgkAIgoAWQghARgtAfIgPAKQgmAbgcANQgrAYgqALQgUAFgcADQgcAEgUAFQgbAHgdAMQgXAIgeAPQg4AcgoASQgxAYgrAWQgVAGgrAeQgkAWggANQg3AYhNAdQhTAgg3ARQg3AThKAoQhJAlg8ASQgfALggAIQgtALglAAIgDAAg");
	this.shape_84.setTransform(984.8712,337.5543);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("A45QvQgbgDgVgLQgWgLgMgPQgJgJgEgPIAAgCQgQgVABgHIgBgBQgMgMgQgHQgFgDgLABQgKABgIgEIgDAAQgUgHgNgUQgPgaAJgVQAJgWAagMQAKgEALgDQANgDAQgCQAFgOAagOIADgCIArgVQAfgQAfgdQAQgOASgUQAHgIALgPQAmguAxhFQA1hFA+hLIB3iNIAzg9QAqg0AmggQAvgmArgHQAUhZgEhLQgNhNAOgXQAAgXAEgUQAGgcAOgYQAZgqAugdQAugdAygNQAqgNA0gDQAkgIA5AAQBOgDA8gSIAbgGIAtgIQAWgEAcgVQAUgOAJgZQAPgVAJgYQAHgSAKgLQAHgYAKgDQAHgDAGgTQAMgJAIgUQANgVAQgGQAMgIAQABQAhACAyAhIAPAMQBBAggaBxIgEASQALAaALAOIAugmIAmgjIA9g4IA1gsQA1gpAsgOQAqgMAoARIAUAGQAhARAgAKQAFAGAGABQAJABABgiQAOgpBOhCQAfgdAhgaIAhgcIBdhPQAlgcAmgnQAZgWAXgQQARgNAOgHQBMgmAaAkQANASAWALQAUARAdAFQAvAKAvAOQAZAHAmACIBwAPIAQADQArAEAqATQBKAaAuAxQASASALASQAdAygZAzQgPAlgTAkQgWAqgfAoQgOASgLAPQgXAdAMAMQAGATAYgFQAegCAggFQBGgKAuAWQAXAJARAUQAfAmAPAhQALAYAEAYQACAQgBAQQgDA1gvA5IgFAGQg3BBhDAZIgMAFQgaAIgdAEQgcAEgpABIglABIiigBQgbARgqASQgqAPgzALQg7A6hMArQgXAOgVAIQgQAHgPADIgQACQgrADg3gvQgngkgygHQgNgCgNAAQg2ACggALIgOAFQglAMgvAXQgQAIgPAJQgtAdgsAzIgZAdQghAmgVARQgrAggcAGIgMADQggAMg2gEQgygEgoAKIgFABQgoAHgrAYQgiATgxAkIgQALQgpAggcAPQguAcguALQgUAFgfAEQggAEgUAFQgeAHgfANQgYAKghASQg8AhgqATQg1AdgsAaQgUAGgxAkQgmAaghAQQg5AbhVAjQhbAmg4AUQg5AWhQAxQhPAug9AVQgiAOgiAJQgyAOgqABIgQgBg");
	this.shape_85.setTransform(961.0455,352.5618);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("A6jR4QgegCgXgKQgZgLgOgPQgMgIgHgPIgBgDQgUgXAAgFIgBgBQgPgNgRgGQgHgCgMADQgLACgJgDIgDAAQgWgGgOgWQgQgcAKgXQAKgXAcgNQALgFAMgCQAOgEARgBQAEgRAbgPIAEgDIAugWQAigSAigeQAQgPAUgWQAIgIAMgQQAsgyA0hHQA7hKBDhQICAiYIA2hCQAug4ApghQA0gpAvgEQAQhggNhTQgUhWALgWQgBgaADgWQAEgfAPgaQAZguAzgeQAygfA3gLQAugLA5AAQAngFA/AFQBXACA/gQIAfgGIAwgGQAYgCAegYQAVgQAIgdQANgYAHgdQAFgXAIgOQAEgeAIgGQAFgGAEgZQAKgPAGgcQAKgfARgOQANgPAUgEQAmgHBBAdIATAKQBUAcgWB8IgEATQAKAdAJARIAwgsIAogmQAfgeAjgfQAbgYAegYQA6grAxgMQAugJArAaIAVALQAjAZAgATQAGAIAGACQAJADAAgnQALgrBYhIQAhgeAlgcIAlgdIBnhSQArgdArgmQAcgWAbgQQASgMAQgHQBYgkAXAxQANAZAUAQQAVAXAeAIQAzANAyAQQAaAIArACIB6AJIARACQAwACAuAQQBSAXA0AzQAUATAMAUQAfA1gfA3QgTAogXAlQgbAtgiApQgRATgLAQQgbAfAQAMQALASAigKQAggEAjgHQBMgRAxAVQAaAKASAVQAjAoAQAkQAMAaAEAZQADARgBARQgEA5g0A+IgFAFQg9BHhIAaIgNAEQgcAIggAEQgdAEgtAAIgogBIiugDQghAOgvAQQgwAMg3AKQhAA/hPAwQgZAQgXAIQgQAIgRADIgRACQguACg5g5Qgogsg0gJQgOgDgOABQg6ACgiAMIgPAFQgnAOgzAZQgSAIgRALQgwAfguA2IgbAgQgkApgXARQgvAgggAFIgNAEQgiAJg7gHQg4gIgqAJIgGAAQgrAIguAaQgkAVgzApIgRANQgsAkgdAQQgxAggxAMQgWAFgiAEQgjAEgVAFQggAHghAPQgaALgjAVQhCAmgqAVQg5AhguAeQgTAHg1AqQgqAegiASQg7AfhcAoQhkAtg4AXQg7AZhWA5QhVA3g/AYQgkARgkALQg1AQguADIgRgBg");
	this.shape_86.setTransform(937.2256,367.5043);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("A9HS4QgcgKgRgPQgOgJgKgPIgBgDQgagYABgFIgCgBQgSgOgTgDQgHgCgNAEQgNADgJgCIgEAAQgYgEgPgZQgSgdAMgZQALgYAegOQALgFAOgDQAPgDATgBQACgTAcgRIAFgEIAxgYQAkgSAlghQASgQAWgXQAJgJAMgQQAxg2A4hKQBBhPBIhUQA9hIBLhaIA7hHQAxg9AsgjQA5grA0AAQALhpgVhaQgdhgAKgVQgEgcADgYQACgiAPgcQAagyA4ggQA2ggA8gJQAygJA+AEQAqgCBFAIQBfAIBEgOIAhgFIA0gFQAagBAggaQAWgRAIgiQALgbAEgiQADgbAGgSQACgkAFgJQADgIADggQAHgUAEgkQAIgqARgWQAOgVAXgJQAsgQBQAXIAYAJQBlAZgSCFIgDAVQAJAgAIATIAxgxIAqgqQAhghAlggQAegaAggZQBAgvA0gIQAygHAuAjIAXAPIBGA+QAFAKAHADQAJAFgBgrQAIguBihOQAjgeAqgeIAogfQA9gvA1glQAvgfAwglQAggWAegPQAVgMASgHQBigiAWA/QALAfAUAVQAVAdAgAKIBrAjQAbAJAvABQA3ADBNABIATABQA1gBAxAOQBbAUA5A1QAWAVANAUQAiA5glA7QgXAqgbAnQgfAvgnArQgSAUgNAQQgeAjAVALQAPARAsgPQAigGAmgKQBSgWA1ATQAcAKAUAWQAlAsASAlQANAcAEAbQADATgBARQgEA9g5BCIgFAGQhDBLhNAbIgOAEQgeAIgiADQgfAEgxgBIgrgBIi6gHQgoAMg0ANQg0AKg8AIQhEBEhUA1QgbASgXAJQgSAIgRAEIgTACQgwACg7hEQgqgzg2gLQgPgDgPAAQg+ACglANIgPAHQgpANg4AcQgTAJgSALQg0AhgxA7IgcAhQgoAtgZARQgyAggkAFIgOADQgkAIhBgMQg9gLgsAIIgHAAQgvAHgwAdQgmAXg2AuIgSAOQgvApgdASQg0Ajg1ANQgXAFglAEQgmADgWAGQgiAHgkASQgaAMgmAXQhHAqgsAYQg8AlgwAiQgSAHg6AxQgsAigkAUQg9AjhjAuQhsAzg6AZQg8AdhcBCQhaA/hCAcQgmASgmANQg4ATgyAEIgSAAQgggBgagJg");
	this.shape_87.setTransform(913.4134,382.3905);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("A+2UDQgegJgVgPQgQgJgMgPIgCgDQgfgaAAgEIgBgBQgVgOgVgCQgIgBgOAFQgOAFgKgCIgEAAQgagDgRgaQgTgfANgbQAMgaAggOQANgGAOgDQAQgDAUgBQABgVAegTIAFgEQAUgLAggPQAngTAogjQASgQAYgZIAYgbQA2g6A7hLICTiuQBEhOBPheIA+hMQA0hBAwgkQA9guA4ADQAIhxgdhiQgmhoAIgVQgGgeABgbQACgkAPgfQAbg2A8ghQA6ghBCgHQA1gIBEAIQArAABMANQBnANBJgMIAkgEQAlgDATAAQAbAAAjgdQAXgTAGglQAKgeACgoQABgfADgVQgBgrADgMQACgKAAgmQAGgaACgsQAEg0ATgeQAPgcAagOQAygaBeATIAdAIQB3AVgPCPIgCAWQAIAkAHAWQAXgbAcgdIAsgtQAjgkAngiQAggcAjgaQBGgyA3gFQA2gEAyArIAYAUQAoApAgAnQAGAMAGAEQAKAHgDgxQAGgvBrhUQAmggAtggIAsgfQBCgxA6gmQA2ghA0gkQAkgVAhgQQAXgLAUgGQBtghATBMQALAnATAZQAVAjAiAMIByAqQAcAJAzAAQA7ACBTgCIAVgBQA6gDA1AMQBjAQA+A4QAZAWANAWQAlA7gsBAQgbAsgeApQglAxgqAsQgUAVgOARQghAmAZALQAUAPA1gTQAkgIApgNQBZgdA4ATQAfAJAUAYQApAvATAoQAOAdAFAdQADATgBATQgFBAg9BHIgGAGQhIBRhTAaIgPAFQgfAIgmADQggADg1gCIgugCIjGgJIhmATQg7AHhAAGQhIBLhYA5QgdAUgYAKQgTAJgTADIgUACQgzACg8hOQgsg7g3gNQgQgFgQABQhDACgnAPIgRAGQgqAQg8AeQgUAIgTANQg4Akg0A+IgfAjQgqAwgaARQg2AhgoAEIgQADQgmAGhGgQQhDgPgtAHIgIABQgxAGg0AgQgoAYg6AzIgSAQQgyAugeASQg4Aog3ANQgYAGgoADQgpAEgXAFQgkAIgmATQgcANgpAaQhLAwgtAaQhAApgzAlQgRAIg/A3QguAmglAXQg/AnhrAzIivBWQg+AfhiBLQhgBHhEAgQgnAVgpAPQg6AVg2AFIgUABQgiAAgdgJg");
	this.shape_88.setTransform(889.577,397.2633);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("EgglAVPQghgJgYgOQgSgKgPgPIgDgDQgkgbABgEIgCgBQgYgPgXAAQgIAAgQAHQgPAFgLgBIgEABQgcgCgSgdQgUggAOgdQANgcAigOQANgGAQgDQARgEAVAAQgBgXAggWIAGgEQAVgMAigQQApgUArgkQAUgSAagaIAZgcQA7g+A/hOICei3QBJhUBShjIBChRQA4hFAzgmQBCgwA9AHQADh5glhqQguhyAGgUQgIggAAgdQAAgnAPghQAcg6BBgjQA+giBHgFQA5gGBJAMQAuADBSAQQBvATBOgKIAmgDQApgDATABQAcACAmggQAYgUAGgqQAIghgBgtQgBgkABgYQgEgxABgPIgBg5QADggAAg0QACg+AUgmQAPgiAdgTQA5gjBsAOIAhAGQCJASgLCYIgBAYIAMA/QAZgdAdggQAUgYAZgZQAlgmAqglQAigdAlgbQBMg1A7gDQA6gBA0A0IAaAYQArAxAfAxQAGAOAHAGQAKAJgEg2QAEgyB0hZQAoghAygiIAvghQBHgyBAgoIB0hFQAngVAlgPQAZgMAWgFQB4gfARBaQAJAtATAeQAVApAjAOQA9AZA8AXQAdAKA3gBQA+ABBbgGIAWgCQA/gGA4AKQBsANBEA7QAaAWAOAXQAoA/gyBEQgfAugiArQgpAzgvAuQgWAWgOARQglApAeALQAYAOA/gYQAmgKAsgQQBfgiA8ASQAhAIAWAaQArAyAUApQAQAgAFAeQAEAVgCAUQgFBDhCBLIgGAHQhOBVhYAbIgQAFQghAIgoACQgiADg5gDIgxgCIjSgNIhyAOQg/AFhFAEQhMBQhdA+QgeAWgaALQgUAJgTAEQgLACgLAAQg1ACg+hYQguhEg5gPQgRgFgRAAQhIACgoAQIgSAIQgsARhBAgQgVAKgUANQg8Alg3BCIggAmQguAzgcARQg4AhgtAEIgRACQgoAFhMgUQhIgTgvAGIgJABQg1AGg2AiQgqAag9A4IgTARQg1AzgeAUQg7Arg7AOQgZAGgrADQgsADgYAGQgmAJgpAVQgcAOgsAcIh/BRQhDAtg1ApQgQAJhEA9QgxAqgmAZQhBAqhyA6Ii5BeQg/AjhpBTQhlBQhGAkQgpAXgrAQQg9AYg6AGIgWACIgIAAQgfAAgcgHg");
	this.shape_89.setTransform(865.7634,412.118);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("EgiUAWbQgjgIgbgPQgVgJgRgQIgEgDQgpgdAAgDIgCgBQgagPgZACQgJAAgRAIQgQAHgMAAIgEABQgegBgTgfQgWgiAPgfQAOgdAkgPQAPgGAQgDQATgEAWAAQgCgaAhgXIAGgFQAWgNAlgRQArgVAugmQAVgSAcgcQAMgMAPgRQBAhDBDhPQBTheBVhjQBPhaBVhnIBGhWQA7hKA2gnQBIgzBBAKQgCiBgthxQg2h7AEgTQgKgjgBgfQgBgqAPgjQAcg+BHgkQBCgjBLgEQA9gEBOAPQAxAGBZAVQB3AYBSgIIApgDQAsgBAUABQAeADAngjQAZgVAFguQAHgkgEgzIgEhDQgGg3gBgSIgGhCQABglgCg8QAAhJAUguQARgpAggXQA+gtB8AJIAlAFQCbAOgHCjIgBAZIAKBFQAZghAegiQAXgaAYgbQAogpAsgmQAkgfAngcQBSg4A/AAQA+ABA4A9QAOAOAMAPQAuA4AfA7QAGAQAHAHQALALgGg7QABg0B+hfQArgiA2gkIAygiQBMg0BFgoIB/hGQAqgVApgPQAbgLAYgFQCDgdAPBnQAIA1ASAiQAVAvAlARQBAAcA/AZQAfALA7gBQBCgBBhgKIAXgDQBFgJA8AIQB0AKBJA9QAcAYAPAYQArBCg5BJQgjAwgmAsQgtA1gzAwQgYAXgPASQgoArAiALQAdANBIgdQAogMAvgSQBlgpBAARQAkAJAXAbQAuA1AWArQARAhAFAgQAEAWgCAVQgFBHhIBQIgGAGQhUBbhcAcIgSAEQgjAIgqACQgkACg9gEIgzgDIjfgPIh9AIQhFADhJABQhQBXhhBEQggAWgbAMQgVAKgVAEQgLACgMAAQg4ABg/hiQgvhMg7gRQgSgGgTABQhLABgrASIgTAIQgtAShGAjQgXAKgVAOQhAApg5BFIgiAnQgxA3gdARQg9AhgwAEIgSABQgqAEhSgYQhNgXgyAFIgJAAQg5AGg5AlQgrAbhAA+IgUATQg4A3gfAVQg+Avg+APQgaAGguADQgvADgaAGQgoAJgrAXQgdAPgvAfIiFBYQhHAyg3AsQgPAJhIBEQg0AugnAbQhEAuh5A/QiFBFg9AjQhBAmhuBcQhrBYhIAnQgsAagtASQhAAag+AIIgWACIgRAAQgeAAgagFg");
	this.shape_90.setTransform(841.9435,426.9634);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("EgkDAXnQglgHgfgOQgXgKgUgQIgEgDQgugegBgDIgCgBQgdgPgaADQgKABgTAJQgRAJgMAAIgFABQggAAgVggQgXglAQggQAQgfAmgQQAQgGARgDQAUgEAXAAQgEgcAjgZIAHgFQAWgOAogSQAugWAwgoQAWgTAegdIAdgeQBFhIBHhRQBZhjBahnQBUhhBZhrIBJhbQA/hPA5goQBMg2BGAOQgGiJg1h4Qg+iEABgTQgMglgBgiQgDgsAQgmQAchCBLgmQBHgkBQgBQBBgCBUASQAzAJBeAZQCAAdBWgGIAsgCQAvgBAWADQAeAEArgmQAZgWAEgyQAGgogHg4QgFgrgDggIgMhRQgEgSgGg5QgBgrgEhEQgDhTAWg3QARgvAkgcQBEg2CKAEIAqAEQCsALgDCsIgBAbIAJBLQAZglAfglQAYgcAZgcQAqgsAugoQAnghApgdQBYg7BDADQBBAEA7BFQAPAQANARQAwBBAgBFQAGARAHAJQALANgIhAQAAg2CHhlQAugjA5gmIA1gkQBSg1BLgpQBFglBDghQAugVAsgPQAegLAZgFQCOgbANB1QAHA8ASAnQAVA1AnASQBDAhBCAaQAgANA/gDQBGgBBngPIAZgDQBKgMBAAGQB8AGBOBAQAfAZAQAZQAtBGg/BNQgnAxgqAvQgyA3g2AyQgaAXgRATQgqAuAlAKQAiANBSgiQAqgOAxgWQBsgvBEARQAmAIAYAdQAxA4AXAtQASAjAGAiQAEAXgBAWQgGBLhNBUIgGAHQhaBghhAbIgTAFQglAIgtABQglAChBgFIg2gEIjrgSIiIADIiYgBQhUBdhlBJQgiAZgcAMQgXALgWADQgMACgMABQg6AAhChtQgwhTg9gTQgTgHgUABQhQABgtATIgTAJQgvAThLAlQgYALgWAPQhEAsg8BIIgjApQg0A7gfAQQhAAig0ADIgUABQgsAChYgcQhSgbg0AEIgKABQg8AFg8AoQgtAdhDBCIgVAUQg7A8gfAXQhBAzhCAPQgaAHgyADQgyADgaAFQgrAKgtAYQgfARgxAhIiLBgQhLA2g5AwQgOAJhNBKQg2AygpAeQhFAyiBBEQiNBLg+AmQhDAph1BlQhwBghKArQguAcgvAUQhDAchCAKIgYACIgZABQgbAAgZgEg");
	this.shape_91.setTransform(818.1173,441.7934);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("EglyAYzQgogGgigPQgagKgWgQIgEgDQg0ggAAgCIgDgBQgggQgcAFQgKACgUALQgTAJgMABIgGABQgiACgWgjQgYgmARgiQAQggApgRQAQgGATgEQAVgEAYABQgFgeAkgbIAIgGQAXgPAqgTQAwgWAzgrQAYgTAggfIAeggQBKhLBLhUQBfhoBehrQBahnBchwQAogvAmgwQBChUA8gqQBRg4BKASQgKiRg9iAQhHiOAAgSQgOgngDgkQgEgvAQgoQAdhGBQgnQBLglBVAAQBFAABZAWQA1ALBlAdQCIAjBbgEIAvgBQAxAAAXADQAgAGAtgpQAagYAEg2QAEgrgKg9IgMhTIgRhbQgGgUgHg/IgKh9QgFhdAWg/QASg1AnghQBKhACZAAIAuACQC+AHABC2IAAAcQAFAwABAhQAbgoAggnQAYgeAbgeQArgvAxgpQAogjAsgeQBeg/BGAGQBGAHA+BOIAdAmQAzBIAfBPQAGATAIAKQALAPgJhEQgDg5CRhrQAwgkA9goIA5gkQBXg4BQgqQBLgmBIggQAygVAvgPQAggKAbgFQCZgZALCCQAFBDASAsQAVA7AoAUQBHAlBFAdQAhANBEgEQBIgCBvgTIAagEQBPgPBDAEQCGADBSBCQAhAaARAaQAwBKhFBRQgrA0guAwQg2A5g7AzQgcAZgRATQguAyAqAJQAmAMBcgnQAsgQA0gYQByg1BIAPQAoAIAaAeQAzA8AZAuQATAlAHAkQAEAYgCAXQgGBPhRBYIgHAHQhgBlhmAcIgUAFQgnAIgvABQgnABhFgGIg5gEIj3gVIiUgDIiigFQhYBihpBOQgkAbgcAOQgYAKgXAEQgNADgNAAQg9AAhDh4Qgyhbg/gVQgUgHgVAAQhUABgvAVIgVAJQgwAVhPAnQgaAMgXAPQhIAug+BMIgmAsQg3A+ghAQQhDAig4ADIgVAAQguABheghQhXgeg2ADIgLABQg/AEg/ArQgvAehGBIIgVAWQg/BBggAYQhEA2hEAQQgcAHg1ACQg1ADgbAGQgsAKgwAbQggARg0AkIiRBnQhPA6g7A0QgNAJhSBRQg4A2gqAgQhIA2iIBKQiWBRg/AoQhFAth6BuQh2BohMAvQgwAegxAWQhGAehGALIgZADIgjACQgYAAgXgDg");
	this.shape_92.setTransform(794.3059,456.6205);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("EgngAZ+QgrgFglgOQgcgKgZgRIgFgDQg5ghgBgCIgCgBQgjgQgeAHQgLACgVAMQgUALgNACIgGABQgkADgXglQgagoASgkQASgiAqgRQASgHATgDQAWgEAZAAQgGggAmgdIAIgGQAYgPAsgUQAzgYA2gsQAZgVAhggIAhghQBPhPBOhWQBlhtBjhxQBghsBgh1IBRhkQBGhYA/grQBWg6BOAUQgPiZhFiHQhPiXgCgSQgQgpgEgmQgFgyAQgrQAehJBVgpQBOgmBbACQBIACBeAaQA4AOBsAhQCQAoBfgCIAygBQA0ABAYAFQAhAHAvgsQAcgZACg7QADgugMhCIgQhaQgQhKgHgbQgHgXgKhFIgNiLQgJhnAYhHQATg8AqgmQBQhJCngEIAzAAQDQAEAFC/IAAAeQAEA0AAAjQAbgrAhgqQAZggAdggQAtgxAzgsQAqgkAvgfQBjhCBKAJQBKAJBBBXQAQAVAPAVQA1BQAfBZQAHAWAHALQAMARgLhKQgFg7CahwQAzgmBBgpIA8gmQBcg5BWgrQBQgoBNggQA1gUAzgOQAigLAdgEQCkgXAICQQAFBJARAxQAVBAAqAXQBKApBJAfQAiAOBIgFQBMgEB1gWIAcgFQBTgSBIACQCNAABYBFQAjAaASAcQAzBNhMBVQgvA2gyAyQg6A7g/A1QgeAagSAUQgxA0AuAKQArAKBlgsQAugSA3gbQB5g7BLAPQAqAHAcAgQA2A+AaAxQAVAnAGAlQAFAZgCAZQgGBRhXBdIgHAIQhlBqhsAcIgUAFQgqAIgyABQgoAAhIgGIg9gGIkDgXIifgIIirgKQhdBnhtBTQgmAdgdAPQgZAMgZAEQgNADgNAAQhAgBhFiDQgzhjhBgXQgVgIgWAAQhZABgxAWIgWAKQgyAWhTAqQgbAMgZARQhLAwhBBQIgoAuQg6BAgiARQhHAig8ADIgWAAQgxgBhjglQhdgig4ACIgLABQhDAEhCAtQgwAghJBNIgWAXQhCBGggAZQhIA7hHAQQgdAHg4ACQg4ADgdAGQguALgyAcQghASg2AnIiYBuQhSA+g9A4QgNAKhWBWQg7A7gsAiQhKA6iPBPQieBYhAArQhGAwiBB2Qh8BxhOAyQgxAhg0AXQhIAhhLANIgaADQgXADgVAAQgWAAgUgDg");
	this.shape_93.setTransform(770.4712,471.4536);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("EgpQAbLQgtgFgogOQgfgKgbgRIgGgDIg+gkIgDgBQgmgRggAJQgLADgXANQgVAMgOADIgGABQgmAEgZgnQgbgpAUgmQASgjAtgSQASgHAVgEQAXgEAaABQgHgjAngeIAJgHQAZgRAugVQA2gYA4guQAagVAkgiIAigiQBUhUBShYQBrhyBoh1QBlhzBjh5IBVhpQBKhdBCgsQBbg9BSAYQgTihhNiQQhXifgEgRQgSgsgFgoQgHg1ARgsQAehOBZgqQBTgnBgAEQBMADBkAeQA6AQByAmQCYAuBkgBIA0AAQA4ACAYAFQAjAJAygvQAcgbACg+QABgygPhHIgVhiQgShQgJgdQgJgagLhLQgIg8gKhdQgLhxAYhQQAUhCAtgqQBWhTC2gJQAbgCAdABQDhAAAJDJIABAgQADA2gBAmQAcguAhgsQAagjAeghQAvg0A1gtQAtgmAxghQBphFBOAMQBNAMBFBfQARAXAPAYQA4BYAeBiQAHAYAIAMQAMATgMhOQgIg9Ckh3QA1gmBFgsIBAgnQBhg6BbgsQBWgqBSgeQA4gUA2gPQAlgJAfgEQCvgWAGCdQADBRARA2QAVBGAsAZQBNAsBMAhQAjAPBMgFQBPgFB8gaIAegHQBZgUBKgBQCXgDBdBHQAlAcATAdQA1BRhSBZQgzA4g2A0Qg/A9hCA3QghAagTAVQg0A3AyAJQAwAJBvgwQAwgUA6geQB/hBBPANQAsAIAdAhQA5BCAcAyQAVApAIAnQAEAagCAZQgGBWhcBhIgHAIQhrBvhxAdIgVAFQgsAIg0AAQgqAAhNgIIg/gGIkPgaIiqgOIi2gOQhgBthyBYQgnAfgfAPQgaANgZAFQgPACgNAAQhDgBhGiNQg1hrhDgZQgWgJgXAAQhdABg0AYIgWAKQg0AXhYAsQgcANgaARQhPAzhEBUIgpAwQg9BEglARQhKAihAACQgMAAgLgBQgzgChpgpQhigmg6ABIgMABQhGAEhFAvQgyAihMBSIgXAZQhFBKghAbQhKA+hLARQgeAHg7ADQg7ACgdAHQgxAKg0AfQgiATg6ApQhpBNg0ApQhWBCg/A8QgMAKhbBdQg+A+gsAlQhMA9iXBVQimBehBAuQhJAziGB/QiCB5hQA2QgzAkg2AZQhLAjhPAOIgbAEQgdADgcAAIgjgBg");
	this.shape_94.setTransform(746.6552,486.2886);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("EgtZAbpIhKgoQgrgSgiAKQgMAEgYAPQgWANgPADQgsALgcgtQgdgrAVgoQAUglAvgSQApgRAzACQgJgkApghQAZgUA7gaQA4gaA7gwQAngfA+g9QFzlwFDmXQBNhiBGgtQBfhABXAcQgXiphWiYQhfiogGgQQgvhtAehTQAehRBfgsQBXgoBlAGQBPAFBpAhQA9AUB4ApQChA0BnAAQBoABAkAKQAjAJA1gxQA1gygoiuQgoivgSgxQgTgygajiQgajjBqhpQBqhpDzgDQDzgDANDTQAEBPgDA0QAyhZBHhPQBZhlByhKQBuhIBSAOQBRAPBIBoQBTB2AnCJQAHAaAIAOQAMAVgNhTQgNhUExi9QEwi+EBg+QEBg/AFDJQAEDJBQAwQBRAwBPAjQBPAjEahFQEbhFCTBvQCTBth5B/Qh5CAiBBoQiCBnBKAMQBLAMDRhwQDRhwBUBgQA8BEAdA1QAmBHgFBCQgHBZhgBmQh1B7h5AeQg2ANhFAAQgsgBhQgIIrShKQhlBzh2BdQgpAgggAQQgrAWgogBQhFgBhIiYQhIiYhiAAQhiABg2AZQg2AZhzA4Qh0A5hfB1QheBzgyAXQhcAphPgGQg1gEhugtQhngqg8AAQhRAAhNA2Qg0AkhPBXQhbBlgmAhQhOBChOARQgfAHg+ADQg/ACgeAHQgyALg3AgQgjAUg8AsQhvBSg1ArQhaBGhBBAIhqBtQhBBDguAnQhOBBieBbQiuBkhCAwQhKA3iNCIQiHCBhSA6QiBBaiNAbQgxAJguAAQhmAAhTgug");
	this.shape_95.setTransform(722.8333,501.1266);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("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");
	this.shape_96.setTransform(678.5337,517.5678);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("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");
	this.shape_97.setTransform(634.9708,533.9814);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("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");
	this.shape_98.setTransform(593.4403,550.3676);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("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");
	this.shape_99.setTransform(555.1322,566.6854);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("EgqzAdLQgOgFgMgLIgCgCQgJgHgHgIQgTgYAHgcIAAgCQAFgTARgQQAPgPAXgIIANgEQAOgDAQgCQASgCAZABIAGAAIAFgLQANgRAfgSIAogTIAtgVQAhgOAhgXIAJgFIAogeQAdgXAngjIAggfIAxguQEpkWDUjvQAyg3Avg4IAxg6QAzg8AuguQAWgVAVgTQBDg5A8gSQANgEANgBQAFgrABgqQgFgdAFg1IgHheIgHgyIgHgwQgGgsgDgeQgHgsAEgOIAAgQIAAgHQABgpAEgkQADglAOgsIAHgSQAMgdASgcQAYgmAigbIAPgMQAVgRAWgLQAugZA5gJIAEgBIAKgBQA5gHBGAKIAIABIAfAEQAmAHA0ANIApAKIAzANIAfAIQA8gLAugrIACgBQA4gYAUgVQAVgMAigxIAFgLQANgeADgsQAFg7gEhLQgEhPAFg5QgBgyAFgdIAGg3QAMgzANhAIAAAAIATg4QAJgTAJgPQAFgLAJgJQANghAHAEQAMgbAXADQATgFAeAIQArAZBuAjIA4AYQCTA5A6AiIAAABIAZAoQAyhdAvhSIAbgwQAthkBBg2IAJgHQAqghAjgQQAugWArgIQAmgFAlAIQANACANADQAaAGAXAMQAbAKAWANQA8AHASAqIAfAhQALAQAMAIQAVANAEgzQBcgzC1h+IAhgcQA/g2Azg+QA2hKA4gbIAlgTQBIgiBkAVQAUACAUgBQB8gGA5gjQAngFAHAjQANAQARAYQAXATAfAKQAMAEANACIAiAEQAtAHA3AhQALAGAMAFQAyAVBngnQBQgjBngXQASgFATgCQBogPgSAvQAlAbARA0QAYA4ghA2QgbAlgnApQgkAkgOApQgaBJguBAQgRAXgWAXQhOBEgOAfQABAGAFADIAEACQgFAMAfgJQAGABARgCQARABAbAGIAKABIABAAQAWgBAQALQAPADAKAGQAaAGANAVQAKAKAGASIAEARQAIAdABAbQAHAbgEAcIgBARQABAigLAhQgFARgGAQQgQAjgYAjQgQAUAIgBQgEAMgeABQgaAJgjgBQhKAPhiAnQgyARg+ARQglAMg4ALIgSAEQjUBRg8AFQABANhFALQghAPgiAHIggAJQgVAYgZAXQgPAPgWAbQgvAzhABHIgHAHQgpAsgbABQgPACgNgHQgQgEgQgJQgxggg4iLIgCgGQg6iThOBfQgSAKgRAMQgpAXgbAcQgoA2hMA7QgoAvgiAhIgPASIgoAwIgmAxQhPBlg9AnIgPAJQhKAnhHAKIgTACQgeADgmgEQghgBgkgKQg6gMglgZQgagPgVgNQg6gZg1gEIgCAAQglgQhZBEIhlBWIgnAiQhQBCg6AhQgcAVggARIgNAKQgSAMgIAMQgTAbgdAkQgGALgJAMQgTANgkAtQgvAvgpA0IguAxQg6A/gyAyIgeAdIg6A4IgyAuIgnAkIg8A4IgMAKQggAdgqAiIiMBtIgMAJQiLBkhJA3IhfBHQgeAYg4AmIgrAgIgqAhIgBABIhwBiQgjAegdAUQgeAVgcAPQgjASgkAGQgRACgOAAQgOgBgJgDQgiAUgkAPQh2AyhugHIgegEQg8gSgQAFQgngHgjAIIgCABQgPAEgWAKQgVAJgQACIgIABIgJABQgRAAgPgGg");
	this.shape_100.setTransform(518.7628,581.9204);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("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");
	this.shape_101.setTransform(482.3016,597.5232);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("EgpAAeTQgMgBgLgDQgIgBgHgDQgHgDgGgFIgCgBIgIgEIgLgIIgIgIQgQgSADgXIgBgCIABgCQADgRANgPIAEgFQAMgKAPgHIAMgEIACgBIANgEIALgBIAUgCIATgBIATAAIAIAAIAFAAIAHgIQASgOAfgQIAMgFIAegOIAugVIAZgOIAIgEQAQgKASgMIAIgFIAqgfIARgPQAYgUAdgaIAUgSIAOgOIAyguQDpjVCkiqQAugwArguIAugzQAsgwAogwIAQgSIAyg9IA5hFIAmgtIAfgjIAKgLIAsgrQAjgdAjgWIABgBIAWgKQAIgjAGghIADgQQABgZAGgiIAFgWQAFgdACgbIAAgGIADgdQACgVAAgUIAAgJQgBgZABgZIgBgdIAAgvIAAgJQgDgjAFgQIACgRIAAgIIADgUQAEgaAFgWIACgHQAJgkAVgoIAGgKIAFgGIAAgBQARgZAXgYQAPgPASgNIAEgDQAPgLAQgJIARgJQAWgNAYgIQARgGASgEQAigJAogCIAAAAIACgCIAGgDQAhgUAugKIAFgBIAVgFIAQgEQATgFAagDIAegEIAmgEIAYgDIAPgKQAXgQAWgWQAMgMALgPIACgCQAtgfATgcQATgTAeguIAGgLIAGgRQALgaAGgfQAIgiAHgkQAHgdAFgdIAKgtIAAgBQAMgqAOgcIAGgOQAEgMAGgJQAFgMADgEQAEgJACgQIABgCQAJgZAEgaIAAAAIAKgZQAFgJAFgHQADgEAEgCIABgBQAJgUADAJQAIgOAQAJQAPADAXANQAdAiBNAjIAeAOQAdAOAfAHQBQAVA8gHIA6AHIAAAAQAQAPAJADQA0hiAkhYIAFgMIAPgnQAYhTAogsQASgUASgQIAJgHIARgNQAfgYAdgQQArgXApgPIAFgBIAWgGQAagGAZgBIAYgBQAZAAAXAEIABABQAaABAVAFQArgHASAPQAMAIAJAKIAlAZQANAMAOAGQAXAJAKgmQB2gkB5hYQAWgRAVgUQAPgPAPgSQAcggAYgkIAqhAQATggATgTQAOgNAOgLQAVgRAbgEQATgFAUgEQAbgFAgACQA3AHA6AAQATgCASgGQAhgKAbgPQA7gbAigfQAggNAJATQANAEAQAOIADACQAWAGAbACQALABANgBIAEAAIAdgDQAQgBAQACQAfACAnAYIARAJIAHADQAzAZBggwIAHgEQBSgvBkgRIADgBQAWgDANACQBMgFgmAzIADAGQAMAbABAoQADAzgmAvQghAigqAjIgTAPQgbAagPAbQgdAwgOAyQgGAWgJAWQgLAagQAZIgXAeQgpAxgXAeQAAAFADADIACACQgHALATgEQACACAKABIAEACIANAGIAEADIAFACIABAAQAJACAKAKIADACQAFADAEAFQALAJAGAQIABAFQAGALACASIABASQACARABATIAAATIgBACQAFAagGAfIgBANIgBAEQgCAXgGAXIgIAWIgNAgIgOAYQgLATgOASIgHAIQgOASADACQgHAMgaAEIgRAHQgTAGgYAEIglANQgeAMgjAQIhDAfIgfANQgUAKgFgEQgKAAgTgEQgeAAg1gGIgIgBIgJgBQi0AmhiA0QgEANgmAMIgYAIQggATgfAMIgdAOIgtAyQgQATgRAbQgZApgLAmQgGASgJAUIgDAGQgPAngRAHQgHAEgIAAIgHAAQgNABgOgDQgLgBgMgHQgYgLgdgbQgKgNgOgIIgQgQIgDgDQgXgkgeABQgqABgoAcIgOACIgPADQghAHgXAIQgaAPgqAPQgPADgQAHQgkAYgiA7IgMAVIghA1IgBACIgfA2QhCBvgyAxIgNALQgVAUgVALIgQALQgZAQgXAJIgTAIIgRAGQgcAKgiAEQggAHghgBQgiABgbgDQgSgDgPgEIgwgNQgdgEgdgCQgcgCgcACIgBAAIgBgBQg2gBhLAmIgMAEQgpARgkAHQgSAIgOADIgSAGQg2AOg/AeQgdATgiATIgNAKQgRALgLALIgBACIg1A9IgRAXQgXATggApQglAugSAsIgHASIgYA1QgQAlgUAgQgUAWgbAlIgcAiIguA3IgHAHQgTAYgaAbIglAoIgwAxIgMALIgLALQgaAXggAaIgTAQIhAAyIg7AvIgVARIgKAJIgtAkQhFA1g8A1IgmAgIheBMQgjAcg1AkIgtAgIgGAFIgnAaIgCABIgjAaQgnAcgkAeIgCACIgJAHQghAbgiAaIgYATQgSAMgRAKQgkAVgiAIIgPADIgRACQgOAAgKgCIgZAIQgOAEgMABIgTADIgEAAQhrA+htAMIgeACIgVgBIgcgBQgSgBgKADQgogBgkAIIgDABIgfAKIgIADQgVAIgSACIgIABIgJABIgKgBg");
	this.shape_102.setTransform(445.961,612.1011);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("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");
	this.shape_103.setTransform(410.9346,625.1733);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("EgoDAf/IgXgCIgPgDIgPgFIgCgBIgKgEIgLgGIgKgHQgUgPgBgXIAAgEIAAgCQABgRAOgQIAEgFQAMgMARgGIAMgEIADgBIANgCIALgBIAVgBIAUgBIATAAIAIAAIAGAAIAJgGIA2gYIALgFIAggOIAvgWIAZgOIAJgFIAigXIAIgFQAUgPAXgSIASgPIA3gxIAVgSIAPgOIA0gvQD9jjCgiiQAxgxAsgvIAwg1QAtgyApgxIARgTQAaggAZgfIA4hKIAlgxIAdgmIAJgMIApgyQAdggAgghIABAAIATgQIAWhEIAFgQIARg5IAIgVQAMgeAGgZIABgFIAIgcQAGgWAEgUIABgKIAGgyIADgeIAEgxIABgJQAAgiAGgSIAEgTIABgHIAEgVQAHgaAIgWIADgFQAQglAcgiIAIgJIAFgGIABgBQAXgWAcgTQASgMAUgKIAFgCQARgIASgHIASgGQAYgIAagEIAAAAQARgEAUgBQAjgFArABIgBgBIABgCIABgFQAJghAWgdIACgEIAKgOIAIgNQAKgPAQgPQAIgKALgJQAKgKAOgLIAQgPIALgOQARgXAQgbIASgfIABgDQAhglATgjQASgbAagsIAGgLIAIgRQAMgbALgdIAbhDIAZg3QALgWAMgSIAAgBQAYgkAZgUIALgJQAIgIALgEQAJgGAFAFQAFACABADIABABQAFABgDAHQABACgBAEQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIACAFIAAAAQADgGABAMQADAAALAPQAIAMARARQAXAvBDAqQAOAKAQAHQAfAQAgACQBLAJA/goQAggIAVgKQAQACAKgGQA1hpAYhcIAEgNIAKgpQARheAlgpQATgVASgQIAIgIIARgNQAfgYAfgTQApgaApgWIAEgCIAXgKQAZgLAXgHIAYgGQAZgIAVgCIABAAQAbgHAVgCQAtgTANAJQAPAFALAHIArAQQAPAIAQAEQAZAHAQgbQCcgbBghLQAUgTAUgXQANgSANgUQAXgjATgqQARgnARggQAQgmASgPIAegYQAVgQAgADQATgCAVADQAbACAgAJQA8AWA2gNQASgGARgMQAbgRAWgaQAugqAdgnQAagWAJAEQANgIAPAFIADABIAvgLIAWgGIAFgBIAcgJIAfgGQAfgHArAbIARAKIAHAEQA3AdBeg8IAGgFQBWg8BigMIADgBQAbgCAHAHQAwAFg7A2IgCAIQgGAagNAiQgSAtgrAoQgpAfgsAeIgVANQggAWgSAYQgoAugBA1QAAAYgEAXQgEAdgLAbIgQAjQgfAxgiAjQgBAFABADIgBACQgJALAIAAQgCAEACADIgBADIABAIIgBADIAAADIAAABQgDAGADAIQgBAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIgBAJIgBAbIAAAFIgCAfIgBARIgCAkIgCAVIAAACQAAAagHAhIgBANIgBAFQgEAXgJAWIgJAWQgHAQgJAQIgQAYQgNASgPATIgHAHQgNAPgBAFQgKAMgWAIIgRAJQgRAIgZAJIgkASIhAAiIhCAmIgfARQgWANALgPQAAgFgQgOQgXgNgygXIgIgEIgIgCQiWgHiGBkQgKAPggAPIgXANQgfAWgcASIgbARIgqA1QgQAYgNAaQgTAwARAgQAIAQADARIAAAFQAMAigIANQgCAGgHAEIgFACQgMAHgMADQgKAFgLAAQgaAFgigGQgKgHgRAHQgIgBgKABIgDAAQgYgKggAVQguAdghABQgGgCgGgEIgLgGQgZgJgTgNIg5gYQgMgIgNABQghABghBVIgKAXQgOAdgNAfIAAACIgZA6Qg1B8gnA5IgKANQgRAagQANIgPAOQgVAWgUANIgQAMIgPAKQgaARgfANQgdAOggAJQggAKgcAGIghADIgwADIg8AHQgcADgcAFIgCAAIgCAAQhEANhAAIIgLgDQgjgEgegXQgPgEgLgIIgNgIQgpgXhNAhIhCAlIgOAKQgRAKgNAMIgBACQgdAcgeAfIgTAWQgcAZgaAnQgkAzAAAvIAAASIgDA5QgBAqgMAjQgPARgeAyIgZAlQgOAXgcAnIgFAIQgTAbgXAdQgRAXgSAUQgYAdgXAYIgMAMIgMAKQgZAYgiAcIgTAPIhEA1Ig6AxIgVATIgLAIIgsAoQg9AzhDBDIglAjQguApgxAoQgnAhgzAiIgvAfIgGAEIgqAZIgCABIgnAYQgtAbgkAcIgBABIgKAIIhGA5IgYAUIgkAZQgjAYgiAKIgQAFIgRADQgNABgMgBQgNADgNABQgQAAgMgCQgJgBgHgEIgDgCQhiBMhvAfIgeAIIgVADIgcAEQgSACgMAEQgoAEglAKIgDAAIghAJIgJADQgVAHgTACIgJABIgNAAIgHAAg");
	this.shape_104.setTransform(376.239,638.2348);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("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");
	this.shape_105.setTransform(341.6472,651.2643);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("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");
	this.shape_106.setTransform(307.2332,664.3164);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("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");
	this.shape_107.setTransform(272.9719,677.3616);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("EgnnAjVQgPgCgMgFQgggNgEgbQgDgVAPgSQAOgRAXgHIANgDQANgCAQAAIAsACQAKAAALgBQAzgCAzgRQA2gSA3gjIAKgGQAsgdBAg2IBRhIQFeksCpilQA1gyAvgyQBPhSBBhPQBHhXA2hUQAhgzAbg0IAohOIAuhbQAag1AZgqQAYgoAVgeIA2hHIAEgEQAbgmAQggQAOgdARhBIAQg/QAPg9ASgpQAMgbAOgTQAhguA3gdIAJgFQA3gbBDgIIAGgBQA3gFBBAGIAqAEIBVALQhHhegch0QgbhwAJiBQADglAFgkQAViLBBhzQAkg+A0g2QAwgzAygaIABAAQA7ggA5AEQAQABAVAGQAjAJgDBbQgCBbg6CrQg6CsBkBsQBlBsCDjBQCCjBgDidQgEidAlgoQAlgpAbgVQBAgxBPhDIAZgVQBBg5AvgnQBghUAHgDQGTAHA6hEQA6hEASh/QASh/AbgRIAigXQApgcB6BdQB7BcA0jFQA0jFAkgsQAjgsAigZIA4gpQAkgbA/AwQA/AwBghbQBfhbBjgCQBigDi6ByQi5BxiMAwQiMAvAlBXQAlBWgNBNQgOBMh/BDIgYAMQhAAdgDADQglAUgUAYQgcAggOA9IgEAVIgUBQQgIAagOAZQgVAnghAlIgiAkQggAggrAkQgYAUgyAmQgbAWgkAbIheBKQgYATAqgkQAqgkhdh2Qheh2j7D+Qj8D+CmAxQCmAwgRAuQgSAtgUAaQgcAkgtAlQgJAGgZAmQgZAmg+BlQg+BlgQhbQgRhbgoigQgpigg1E4Qg1E3gXAzIgJAVQgRAjgLATQhAB0h0BcQhEA2hNAmQgeAPggAMQhzAtgjhJQgjhJgXiUQgWiUjbCcQjcCbBMBqQBLBpAJBHQgIALhUC/Qg2B4g8BCQghAjg2AsIhdBJQgdAXgfAeQgjAjgoArQgsAvhRBeQiaCsiBBCQgSAJhOAiQg6AZgiAXIgBABQgdAThUBNQhEA+g0AVQglAPglgKQgVgFgKgLQgLgLgBgPQhjCAiTBMIgeAOQhLAihMAOQgrAJgqABIgpABQgRAAgPgDg");
	this.shape_108.setTransform(238.9195,690.4223);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("EglfAiDIgGAAQgMAAgLgDQgPgBgMgFQgdgMgFgbIAAAAQgDgUAOgRQANgRAVgGIAMgEQAMgCAPAAIApAAIAUgBQAdgBAdgHQAUgEAUgHQAngNAmgWIAbgQIAJgGQApgbA6gyIAEgDQAjgeAqgnIAqgkQEqkFCYiXQAygxAtgwQBLhPA9hLQBEhTA0hRIAEgHQAdgtAYguIAmhLIAmhLIAGgMQAZgzAYgoQAWgmAUgdIAkgxIAOgTIAEgFQAZgkAPgfQANgcAPg+IALgqIAEgSQANg6ASgoQALgaANgSQAWggAggYQANgJAOgIIAJgFQAzgbA/gJIAGgBQAZgDAcgBQAdAAAfABIAoAEQAiACAuAGIgWghQgshOgUhZIgGgeQgOhdAKhnIACgKQADgeAFgcQAKg4ATgzQAYhDAjg8QAPgXAQgVQAZghAegeQAugvAxgZIABAAQA4geA2ACQAPABAUAFQATAFAHAdQAHAVAAAkQABBQg1CaQgMAlgFAiQgNBqBFBHQAxA0A6gdQAxgaA3hUQA4hZAehPQAhhYAAhPIAAgWQABiAAiglIATgUQAXgYATgPQA5gsBDg5IAMgKIAZgVQA+g2AtgkIAVgTQBHg9AHgCQA+ABA2gBQCKgCBTgNQBRgOAYgaQA5g+AUh0QATh1AbgPIAigVQAXgOAwAXQAkAQAxAlQAyAlAmgMQAzgRAehoIAKgkQAVhEASguQAVg4ASgWIATgVQAYgbAXgRIA2goQAigbA7ArQA7ApBWhPIAGgFQAugsAtgWQAvgXAvgCIAMABQBFAEicBjIgXAPQiXBhh1AtIgbAMQhhAtAfBJQAjBTgNBJQgEAVgLATQgeA0hWAvIgWAMQg8AcgDAEQgiATgUAYQgLAMgIASQgNAZgIAhIgEAVIgUBLQgIAZgNAYQgVAlgfAjIghAjIgLALQgbAZgiAcQgWATguAjIgCACIg8AvIhLA8IgOALQgXATAnghQAngfhWhpIgJgKQhGg+iWB7QgrAkgxAyIgLAMQg1A2giAtQhnCNBwAkQCWAvgSArQgSArgUAZQgbAigqAjQgGAEgKANIgRAZQgaAjg7BgQg7BegShTIgLgxIgxizQgjh+grDFIgQBKQg1EigbAzIgJAUQgQAhgMATQgZAsghAoQgxA9hBA0QhCA0hIAlQgdAOgfAMQhsAsgihCQgWgpgRhEQgLgpgJgyQgYiGjPCTQjPCSBBBlQBDBjAFBEQgIAJg0ByIgfBDQg1Bwg6A/QggAig0ApIhYBGQgcAWgeAcQgiAigmAoQgrAuhNBYQhPBXhIA7Qg+Azg5AeQgTAKhJAfQg2AZghAWIgBABQgeAUhOBIIgMALQg6AxgtATQgjAOgjgIQgUgFgKgKQgKgKgBgOQhFBWhbA8QglAZgpAUIgdANQgkAQgkAKQgkAKgjAGQgQADgQABQgYACgXAAIgTABIgTgBg");
	this.shape_109.setTransform(227.8459,701.6625);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("EgjVAgvIgigBIgFgBQgMAAgKgCQgOgCgLgEQgcgMgFgZIgBAAQgDgTANgRQAMgQATgGIALgEIAagDIAngBIASgBQAbgCAcgHQATgEATgHQAlgNAlgUQANgHAMgIIAJgGQAngaA3gwIAEgCQAhgeAoglIAngjQEYj5CRiVQAvguArguQBHhMA6hIQBAhQAyhNIADgGQAdgrAXgsIAkhIIAkhGIAGgMQAYgwAWgnQAVgkATgcIAhgwIANgSIADgFQAYgiANgeQAMgbAOg7IAKgoIAEgSQAMg3AQgmQAKgZAMgSQAUgfAegXQAMgJANgIIAIgEQAwgbA7gKIAFgBQAYgEAagCQAbgBAeABIAlABIBLAFIgTgfQgmhKgQhTIgEgdQgJhYAMhfIABgJQAEgbAHgaQALg0ATgvQAZg8Aig3IAegpQAZgeAdgbQAtgsAvgYIAAAAQA2gbAzAAQAPABATAEQASAEAHAaQAHATAAAgQAFBGgvCJQgLAhgEAdQgMBfA+A8QAtAtAzgdQAsgbAyhQQAzhVAchLQAfhUAChLIAAgWQADh3AiglIARgTQAXgXASgOQA3grA/g1IAMgKIAXgUQA7gzArgjIAVgRQBCg4AJgDQA7ABA0gBQCCgCBRgLQBMgNAZgXQA4g4AWhpQAUhqAcgOIAfgSQAXgNAtAWQAjAQAvAhQAwAjAkgLQAygOAdhhIAMghQAUg/ATgsQAVg0ASgWIARgUQAXgZAWgRIAzgnQAhgZA4AmQA3AjBRhLIAGgFQArgqAsgVQAsgWAtgCIAMAAQBBADiLBdIgUAOQiGBchoAvIgYAMQhYAsAdBGQAhBPgMBGQgDAUgLASQgcAyhPAvIgVALQg3AcgDAFQggASgTAXQgKAMgIARQgMAYgIAfIgEATIgUBIQgIAXgNAXQgUAjgeAiQgOAQgRAQIgLALQgZAYghAbQgWASgsAhIgBACIg5AtIg+AzQgCAEgFADQgkAdAWgSIAMgLIAJgHQASgfhFhRIgIgIQg/gziLB0QgoAigvAwIgLALQgxAzgiAsQhhCEBiAjQCHAtgTAqQgSAogTAXQgaAhgoAgQgGAEgJAMIgRAYQgaAhg5BZQg4BYgThLIgMgsIgyihQglhxgpC1IgRBGQg2ENgfA0IgJATQgQAegLASQgYAqggAmQgvA6g/AyQg+AyhFAjQgbAOgdAMQhmAqggg7QgYgjgPg/QgLgkgKgtQgah4jDCLQjCCJA2BgQA6BdACBAQgJAJgyBrIgfA+Qg0Bpg5A8QgeAggxAnIhVBCQgaAVgdAbQghAggkAmQgqAshKBTQhLBRhEA4Qg8Axg2AdQgTALhEAeQgzAYggAUIgBABQgdAVhKBDIgLAKQg3AvgrASQghAOgigIQgSgEgKgIQgKgJgBgNQhDBQhXA4QgkAXgnATIgbAMQgjAOgjAIQghAJgiAEIgdADIgeAAIgOAAg");
	this.shape_110.setTransform(216.785,712.9708);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("EghwAfaIgfgDIgEgBQgLABgKgCQgNgBgLgFQgagKgFgYIgBgBQgDgSALgQQALgPARgHIAKgEIAYgEQANgBAYgBIASgBQAZgDAagGQATgFASgGQAjgMAigUQANgGAMgIIAIgGQAlgZA0gtIADgDIBGhAIAkghQEFjtCMiSQAsgtAogsQBDhIA3hGQA8hLAwhKIADgGQAbgpAWgqIAjhDIAihEIAFgLQAXguAVglQAUgiARgbIAfguIAMgSIADgEQAVghAMgdQALgaANg4IAJgmIADgRQALg0AOglQAKgYALgRQASgeAcgWQALgJAMgIIAIgEQAsgbA3gLIAFgCQAWgDAYgCQAZgCAcgBIAjABQAeAAApACIgQgfQgghGgMhOIgDgbQgFhTAOhXIACgIQAFgaAHgXQAMgvAVgrQAag2AhgyIAdglQAYgbAcgZQAsgoAtgWIAAAAQA0gbAwAAQAOAAASADQAQADAIAYQAHAQABAcQAJA8gqB4QgKAcgDAZQgLBTA2AxQApAnAugdQAngcAshLQAuhSAahHQAchQAEhIIACgUQADhuAjglIAQgSQAWgWARgOQA0gqA7gyIAMgJIAWgTQA4gwAqggIAUgQQA+g0AKgDIBqgBQB6gBBPgJQBIgLAZgVQA2gyAYhfQAWhfAcgMIAegQQAWgLArAUQAiAPAsAfQAuAhAigKQAwgNAehYIAMgfQAVg5ATgqQAUgxASgVIARgUQAVgYAWgQIAwglQAfgZA0AhQA0AeBNhGIAFgFQApgoApgVQAqgVAqgDIAMAAQA+ADh6BWIgSAOQh0BXhbAxIgVAMQhPArAbBCQAfBLgLBDQgDATgKASQgZAwhJAtIgTAMQgzAbgDAGQgeASgSAWQgJALgIAQQgLAXgIAdIgFATIgTBDQgIAWgNAWQgTAhgdAgIgeAfIgKAKQgYAWgfAaQgVARgqAgIgBACIg2ArIg5AvQgCAHgGAEQghAaAUgRIAMgLIAJgJQAJgag5hAIgIgHQg4goiABtQglAhgtAuIgKAKQguAwghAqQhdB7BWAiQB4ArgVAoQgRAmgTAWQgZAegmAfQgGAEgJALIgQAWQgaAgg3BTQg1BQgUhCIgMgnQgXg5gehWQglhlgpCnIgRBAQg3D5giA0IgKASQgPAdgLARQgYAngeAkQguA3g7AvQg7AwhBAiQgaANgbAMQhfApggg0QgYgegOg4QgMgggLgnQgchri2CCQi2CAArBcQAyBWgCA8QgKALgwBiIgeA6QgzBig3A4QgeAfguAkIhRA/QgZAUgbAZQggAegiAkQgqAqhFBOQhIBNhBA1Qg5AugzAcQgTALg/AcQgxAYgeAUIgBABQgdAVhEA9IgLAKQg0AsgpARQggAOgfgGQgRgEgKgHQgJgIgCgLQhBBKhUA0QgiAVglARIgaALQgiAMggAHQggAHgfADIgbABQgVAAgTgCg");
	this.shape_111.setTransform(205.7399,724.3125);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("A/oeJIgkgEIgagEIgFgBIgTgBQgNgBgKgFQgYgKgGgWIAAgBQgEgRAKgPQAJgPAQgHIAKgEQAJgDANgBQAMgDAWgBIARgCQAYgDAZgGQARgEARgGQAigNAggSIAXgNIAIgGQAkgYAwgrIADgDQAegaAjgjIAjghQDyjhCFiPQApgqAmgqQA+hFA1hDQA4hIAuhGIADgGQAagnAUgnIAihAIAgg/IAFgLQAWgrATgkIAjg7QARgZALgTIAKgRIADgEQAUgfAKgcQAKgaAMg0IAHglIADgPQAKgyANgjQAJgXAKgQQAQgdAagWIAVgQIAHgEQApgbAzgNIAEAAQAVgFAWgDIAygFIAggBIBCgBIgNgcQgZhEgJhIIgCgZQAAhNARhQIACgHQAGgXAHgWQAOgqAVgmQAcgxAggsQAPgRANgQQAXgZAcgWQApglArgVIABAAQAxgYAtgCQANgBARADQAQACAIAVQAHAOACAYQAMAygkBnQgJAXgCAVQgKBIAvAmQAkAgAogeQAigcAohGQAnhPAZhEQAahLAGhEIACgTQAFhmAiglIAQgRQAUgVAQgNQAzgpA3guIALgJIAVgSQA1gtApgfIASgOQA7gwAMgDIBkgBQBygBBNgHQBDgJAZgSQA2gtAahUQAWhVAdgJIAdgOQAVgKApATQAgAOApAdQAtAeAggJQAvgKAehQIAMgcQAVg1AUgoQATgtASgVIAQgSQAVgXAUgQIAtgkQAegYAwAdQAyAYBHhCIAEgFQAognAmgTQAogVAogDIALAAQA8AChqBQIgPANQhiBShPAzIgTAMQhFAqAZA/QAcBHgJBAQgDASgJARQgXAvhCAsIgSALQguAagEAHQgbASgQAVQgJALgIAPQgLAVgHAcIgFARIgUBAQgIAVgMAUQgTAfgbAfIgcAdIgKAJQgXAVgdAZQgVARgnAdIgCACIgyApIg1AuQgBAJgIAEQgdAWASgRIALgKIAJgIQABgWgtgxIgHgGQgzgch0BlQgiAggrAsIgJAJQgsAtggAoQhYByBKAiQBoApgWAnQgQAigSAVQgZAdglAcQgFAEgIALIgQAUQgZAeg2BMQgyBKgUg6IgOgiQgZgxgehMQgmhYgnCXIgSA8Qg4DkgmA1IgJARQgPAagLAQQgXAlgeAjQgsAzg3AtQg4Atg9AhQgZANgZALQhZAogfgtQgYgYgNgzQgNgbgMgiQgdhciqB5QipB3AgBXQAqBQgGA5QgMAKguBaIgdA2QgyBbg1A1QgdAdgsAiIhMA7QgZATgZAYQgfAcggAiQgpAohCBIQhFBIg9AzQg2AsgwAbQgTALg6AbQguAWgcATIgBABQgeAWg/A4IgKAJQgwApgoASQgeAMgegEQgQgDgJgHQgJgGgDgKQg/BFhPAvQghATgjAPIgZAKQggALgfAFQgeAGgcABIgNAAIgNAAg");
	this.shape_112.setTransform(194.6992,735.7375);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("A9wc2IgXgCIgggFIgXgGIgEgBQgKAAgIgBQgMgBgKgEQgWgJgGgVIgBgCQgDgPAJgPQAHgOAPgHIAIgEQAJgDALgCQAMgEAUgBIAQgCQAWgEAYgGQAQgEAQgGQAhgMAegRIAVgNIAIgFQAigXAtgpIADgCQAbgaAighIAgggQDgjVB+iMQAngoAjgpQA6hBAxhAQA2hEArhDIADgFQAYglAUglIAfg8IAfg8IAFgKIAnhLQAQgfAPgZQAQgYAKgSIAJgRIADgEQARgdAKgbQAJgZAJgxIAHgjIADgPQAIgvAMgiQAIgVAJgQQAPgcAXgUIATgRIAGgEQAlgaAwgNIAEgCQATgFAVgEQAVgEAYgCQAOgCARgBQAagCAjgCIgLgbQgShAgFhCIgBgXQAEhJAUhIIACgGQAGgVAJgTQAOgmAWghQAegrAegoQAQgOAMgPQAXgVAagVQAoggApgUIABAAQAugXArgDQAMgBAQACQAPABAHASQAIAMADAUQAPAogeBWQgHATgDAQQgIA8AoAbQAfAaAjgeQAdgdAihBQAihMAWhBQAZhGAIhBIACgSQAGhcAjgmIAPgQQATgTAPgNIBkhTIAKgIIAUgRQAzgqAmgdIASgNQA2gsAOgCIBfgCQBpgBBMgFQA/gIAZgPQA1gmAchKQAXhKAdgIIAcgMQAVgIAlASQAgAOAmAaQAqAbAfgIQAugIAdhIIANgZQAWgwAUgmQASgpASgVIAPgRQAUgWATgPIAqgiQAcgXAtAXQAvASBCg9IAEgFQAmglAjgSQAmgVAmgCIAKgBQA5ABhaBKIgLAMQhRBNhCA1IgQAMQg8ApAYA8QAZBDgIA9QgDARgHAQQgVAug9AqIgQAMQgpAYgEAIQgZASgPAUQgJALgGANQgLAVgIAaIgEAQIgUA8QgIATgMATQgSAegaAcQgMAOgPANIgJAJQgVAUgdAXQgTARglAbIgCACIgvAnQgeAZgVAVQACAKgJAEQgaASARgQIAKgKIAGgGQgDgRgkgjIgGgFQgsgRhpBdQggAfgnAqIgJAJQgpApggAmQhTBpA+AhQBYAogWAlQgRAggRATQgZAbgiAbQgFADgIAKIgPATQgZAcg0BGQgvBDgVgyIgPgdQgagpgfhCQgmhLgmCIQgKAZgKAeQg4DPgqA2IgJAPQgOAZgLAPQgXAigcAhQgqAwg0ArQg2Aqg4AgQgXANgYALQhTAmgdgmQgZgSgNgtQgNgXgMgcQgfhOieBwQicBuAVBSQAhBKgJA1QgOALgrBSIgeAxQgxBUgzAyQgcAbgpAgIhIA3QgXATgZAWQgdAagfAgQgoAmg9BCQhCBEg6AvQgzAqgtAaQgTAMg1AZQgrAVgbATIgBABQgeAWg5AzIgJAIQguAngmARQgcAMgcgEQgPgCgJgFQgJgGgDgIQg9A/hLArQggASghANIgYAJQgeAJgeAEQgZAEgXAAIgGgBg");
	this.shape_113.setTransform(183.6442,747.2028);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("A8SbjQgLgBgKgCIgcgHIgUgHIgCgCQgKABgIgBQgLgBgJgEQgVgIgGgUIgBgCQgDgPAHgNQAHgOANgHIAHgEQAIgEAKgCQALgEATgCIAOgDQAVgEAXgGQAPgEAPgGQAfgMAcgPIAUgMIAHgFQAggWArgnIACgCQAagYAfghIAegeQDNjJB4iJQAkgnAhgmQA2g+Aug9QAxhAApg/IADgFQAXgjATgjIAeg5IAcg4IAFgJIAkhHIAdg2QAOgXAJgRIAJgQIACgEQAPgbAIgbQAIgYAJguIAFghIADgOQAHgsALggQAGgUAIgPQAOgbAUgUIASgQIAFgEQAigaArgPIAEgBQARgGATgFIAqgIIAcgEIA5gHIgIgZQgMg9gBg8IABgWQAIhDAWhAIACgGQAHgTAKgRQAPghAXgdIA8hHQARgNAKgMQAXgTAZgSQAngdAngTIAAAAQArgUApgFQALgBAPABQAOAAAHAPQAIAJAEARQATAegZBEQgFAPgCAMQgIAwAiAQQAaAUAdgeQAYgeAdg9QAdhJAUg8QAWhCAKg9IADgRQAHhUAjgmIAOgPQASgSAPgMIBdhOIAKgIIASgQQAwgoAlgaIARgMQAygnAPgDIBagCQBiAABKgEQA6gGAZgMQA0ghAeg/QAYhAAegFIAagKQAUgGAjAQQAfANAkAXQAoAZAcgGQAtgHAdg/IAOgXQAWgrAUgkQASglASgVIAOgQQATgUARgPIAoghQAbgWApASQAsANA8g5IAFgEQAjgkAhgRQAjgUAkgDIAKgBQA2AAhKBDIgIAMQg/BJg2A2IgNANQgyAnAVA5QAYA/gIA6QgCAQgHAPQgSAsg2AqIgPALQgkAYgFAJQgXARgOATQgHAKgHANQgKAUgIAYIgEAPIgUA3QgIATgLARQgSAcgZAbIgZAZIgIAIQgUATgbAWIg2AqIgBABIgtAmQgdAZgUAWQAFAKgKADQgWAOAPgPIAJgJIADgDQgGgNgbgXIgFgEQgmgFheBWIhBBFIgJAIQglAnghAkQhNBgAxAgQBJAmgXAjQgRAdgRASQgXAaggAYQgFADgIAJIgPASQgZAagyBAQgsA8gWgqIgPgYQgcghgfg3QgnhAglB6QgKAWgLAcQg4C6guA3IgJAOQgOAWgLAPQgWAggbAeQgoAugxAnQgyApg1AeQgVANgWAKQhOAmgbgfQgagOgMgmQgNgSgNgYQghhAiRBnQiQBmAKBNQAYBDgMAyQgPALgpBKIgdAuQgwBMgyAvQgbAZgmAeIhEA0QgWARgXAVQgcAYgeAdQgnAlg5A9Qg/A+g2AtQgwAogrAZQgSAMgxAXQgnAVgaARIgBABQgeAXg0AuIgJAHQgrAkgkARQgaALgagCQgOgBgIgFQgJgEgDgHQg8A6hHAmQgfAQgfAMIgWAHQgdAIgcACQgOACgOAAIgWgCg");
	this.shape_114.setTransform(172.6129,758.7068);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("A60aQIgSgFQgOgEgLgFIgQgJIgCgCIgRABQgKAAgIgEQgTgIgGgTIgBgCQgEgOAGgMQAFgNALgIIAHgEQAHgEAKgDQAKgEARgDIANgDIAogLIAdgJQAegLAZgPIATgLIAHgFQAegVAngkIACgDQAYgWAdgfIAcgdQC6i9ByiHQAhgkAfglQAxg7Arg5QAug9Amg7IADgFQAWghARggIAdg1IAbg1IAEgJIAihDIAagzQAMgVAIgRIAIgQIACgDQANgaAHgZQAHgYAHgrIAFgfIACgNQAGgpAJgfQAGgTAHgPQALgZATgTQAHgJAJgHIAEgEQAegaAngQIAEgCIAhgLIAngLIAZgFIA0gKQgDgLgCgMQgFg5ABg3IADgUQAMg+AZg5IACgFQAIgQAKgPQARgcAYgZIA9g8QAQgKAJgLIAvggQAlgZAlgRIABAAQAogUAmgFQALgCANAAQANAAAIAMQAIAHAEANQAXATgUAzQgEAKgBAIQgGAlAaAFQAVANAYgeQASgfAZg4IAph+QAUg+AMg6IAEgPQAIhLAjgmIANgOQARgRAOgMIBXhKIAJgHIASgPQAtgkAkgZIAPgLQAvgiAQgDIBUgCICigCQA2gEAagLQAygaAgg0QAag2AdgDIAagIQATgEAgAOQAeAMAhAVQAmAXAbgFQArgFAeg3IAOgVQAVgmAWghQAQgiASgUIAOgQQARgTARgOIAlgfQAZgWAmAOQApAHA3g1IAEgEQAhghAfgRQAhgTAhgEIAKAAQAzgBg5A9IgGALQgtBEgpA4IgKAMQgpAnATA1QAVA7gGA3QgCAPgGAPQgRAqgvAoIgNAMQggAXgFAKQgUARgNASQgHAKgGALQgKATgHAWIgFAOIgUA0QgIAQgKARQgSAagXAZIgYAYIgHAHIgtAmIgyAoIgCABIgpAjQgdAagUAWIgBACQAJAKgKABQgSALAMgOIAHgIQgHgHgSgNIgEgCQggAFhSBPQgaAdgjAkIgIAIIhCBGQhJBXAlAfQA6AlgZAhQgQAagQARQgXAXgeAXIgLALIgPAQQgZAZgwA5QgqA2gWgiIgQgTQgegagfgtQgpgygjBqIgVAuQg5ClgyA3IgJANQgNAVgLANQgWAegaAcQgmAqgtAlQgwAngwAdIgpAWQhHAkgcgYQgZgHgKghQgOgOgOgRQgjgziFBfQiDBcgBBJQAQA8gQAuQgQANgnBBIgdApQgvBGgvArQgaAYgkAbIhAAwIgrAkQgbAXgbAbQgnAig2A4Qg6A6g0AqQgsAkgpAZQgRAMgtAWQgkAUgYARIgBABQgfAXguAoIgIAHQgoAhgiAQQgZAMgYgBQgNgBgIgDQgIgEgEgGQg5A1hEAiQgdAOgeAKIgUAGQgcAGgaABIgJAAQgUAAgRgDg");
	this.shape_115.setTransform(161.6242,770.2598);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("A4sZCQgXAAgTgGIgQgGIgVgLIgNgKIgBgDQgIACgHgBQgKABgIgEQgRgHgGgSIgBgCQgEgNAEgMQAFgMAJgIIAGgEQAGgEAJgEQAJgFAPgDIANgDIAlgMIAagIQAdgMAXgNIASgLIAGgEQAdgUAjgiIADgDQAVgUAbgfIAagbQCoixBqiEQAfgjAcgjQAug3Aog2QAqg5Akg4IADgFQAUgfAQgdIAbgyIAagxIAEgIIAeg/IAYgxQALgUAHgQIAGgPIACgDQALgYAGgZQAFgWAGgoIAEgdIACgMQAFgnAHgdQAFgSAGgOQAKgZAQgSIAOgPIAEgFQAbgYAjgTIADgBIAdgNIAkgNIAWgGIAwgNIgCgWQABg1AFgyIAEgRQARg5AbgxIADgFQAIgOALgMQASgYAZgUQAigaAbgXQARgJAHgJIAugbQAjgVAkgQIAAAAQAmgRAjgHQALgDALAAQAMgBAIAJQAJAEAFAKQAaAJgOAiIgEAJQgEAZASgGQARAHASgfQANgfAUgzQARhDARg1QARg5APg2IADgPQAKhCAjgmIANgNQAPgQANgLIBShFIAIgHIARgOQApgiAjgWIAOgKQArgeARgDQApgCAnAAICYAAQAxgCAagIQAxgUAigqQAbgsAeAAIAYgGQATgDAdANQAdALAfATQAkAUAYgEQArgDAdgvIAOgSIAshAQAQgeASgUIANgPQAQgRAQgOIAigeQAYgVAhAJQAnABAygwIADgDQAgggAbgQQAfgTAggEIAIAAQAxgCgpA2IgDALQgbA/gdA6IgHANQggAlARAyQAUA3gGA0QgBAOgGAOQgOApgoAnIgMAMQgcAVgFALQgRARgNARIgMAUQgJARgHAVIgFANIgUAvQgIAQgKAPQgRAZgWAXIgWAWIgHAGQgRAQgZAUIgvAlIgBABIgnAiQgaAYgSAWIgHAJIAAAAQAOAJgKgDQgPAHALgNIgQgIIgDgBQgaARhGBHQgXAcghAiIgHAIIg/BAQhEBOAZAfQAqAjgaAfQgQAYgQAPQgWAWgbAUQgFADgGAIIgPAOQgZAXguAzQgmAvgYgaIgRgOQgfgSgggiQgpgngiBcIgWApQg6CQg2A4IgIAMQgNASgLANQgVAbgZAbQgkAngqAiQgsAkgtAcQgTAMgTAKQhAAjgbgRQgZgDgKgaQgOgJgPgNQgkgkh6BVQh2BUgMBEQAIA2gUAqQgRANglA5IgcAmQguA+guAoQgZAWghAZIg8AtQgUAPgVASQgZAVgaAYQgmAhgyAyQg3A1gwAoQgqAiglAXQgSANgnAUQgiATgWAQIgBABQgfAYgpAjIgHAGQgmAfggAPQgXALgWABQgMgBgIgCQgHgDgEgEQg4AwhAAdQgcAMgbAIIgUAFQgUAEgTAAIgLAAg");
	this.shape_116.setTransform(150.645,781.8653);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("A3TXxQgVgCgRgHIgOgIQgKgHgHgGIgJgLIAAgDQgIACgHgBQgIABgIgDQgPgHgHgQIgBgDQgEgMADgLQADgMAIgHIAFgFQAFgEAIgEQAIgGAOgEIALgDIAjgMIAYgJQAbgLAVgLIARgLIAGgDQAagTAhghIACgCQATgTAZgeIAYgaQCVilBkiAIA2hDQApg0AlgyQAng1Ahg1IADgEQATgdAPgcIAZguIAYguIAEgHIAcg7IAVguIAPgiIAGgOIABgEQAJgVAFgYQAEgWAEglIADgbIACgMQADgkAHgbQAEgRAFgNQAIgYAOgRIAMgPIADgFQAXgYAfgUIADgBIAagOIAggPIAUgIIArgPIABgVQAHgyAJgrIAGgQQAVg0AdgpIADgEQAJgMAMgKQATgUAagPQAjgUAagSQARgHAHgHIArgWQAjgRAhgPQAjgPAhgJIAVgEQAKgBAIAGQAJABAGAHQAegBgJAQQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAQgDANAMgRQAMABAMgeQAIggAPgvQAMhAAOgxQAPg1ARgyIAEgOQALg5AkgmIALgMQAOgPANgKQAngkAkgdIAIgHIAPgMQAngfAhgUIAOgJQAmgaATgDQAlgCAlAAQBKgBBEADQAtgBAagFQAwgOAkgfQAcgiAfACIAWgEQATgBAaALQAcALAcAQQAiARAXgCQApgBAdgnIAPgPIAtg5QAPgaASgVIAMgNQAPgQAOgNIAggdQAWgUAeADQAjgEAtgsIAEgDQAdgeAZgPQAdgSAdgEIAIgBQAtgCgYAwIAAAJQgKA7gPA8IgFAMQgWAlAPAuQARAzgEAxQgCANgEANQgMAogiAmIgKAMQgXAUgFAMQgQAQgLARIgLASIgQAjIgFANIgUArQgHAOgKAOQgQAXgVAVIgVAUIgGAGIgoAhIgsAjIgBABIgjAgQgYAWgQAVIgGAJQgJAMAMgDQAKAJgbgFIgDAAQgTAdg7A/QgUAbgeAfIgHAIIg8A7Qg+BFAMAeQAbAigbAcQgQAWgPAOQgWAUgZASIgKAJIgOANQgZAVgsAuQgkAngYgSIgSgJQghgKgggYQgqgaghBNQgLAQgMATQg6B8g6A5IgIALIgXAcQgVAZgXAYQgjAlgnAfQgpAigpAaQgRAMgRAKQg6AhgagKQgbADgJgUIgdgMQgmgWhtBNQhqBKgXA/QgBAwgXAnQgTANgiAxIgcAiQgtA2gsAmQgYAUgfAWIg4AqIgmAeIgwApQglAgguAsQg0AwgsAlQgnAggjAWQgRANgjATQgeASgVAPIgBABQgfAYgkAfIgGAFQgjAcgeAPQgWAKgUACQgLAAgHgBQgHgCgFgDQg2Arg8AZQgaAKgaAHIgSADQgOACgMAAIgVgBg");
	this.shape_117.setTransform(139.7221,793.538);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("A2EWfQgTgDgOgJQgHgEgGgFQgIgIgFgHQgEgHgBgGIAAgDIgNACQgIABgHgDQgOgGgHgPIgBgDQgEgLACgKQABgLAHgJIAEgEQAEgFAHgEQAIgHAMgEIAKgEIAggMIAWgIQAagLASgKIAQgKIAFgDQAZgSAdgeIACgDQASgSAWgcIAWgZQCCiZBeh+IAwg+QAlgxAigvQAjgyAggxIACgEQASgbAOgZIAYgqIAWgqIADgHIAag3IASgrQAIgSAFgPIAEgNIABgDQAHgUADgYQAEgVADghIABgaIABgKQADgiAFgZQADgQAEgNQAHgWALgRIAKgPIADgEQATgYAcgVIACgCIAXgPIAcgRIASgJIAmgTIAEgSIAahVIAHgOQAZgvAgghIADgDQALgKAMgIQAUgOAbgLQAlgOAYgOQARgEAGgFIAqgRIBAgbIABAAQAggOAegKIATgFQALgCAHADQAJgBAGADQAigLgDgBIAAgJQgCACAEgcQAHgGAHgfQADggAKgqQAGg9AMguQAOgwASgvIAFgMQAMgxAkgmIAKgLIAZgYQAmgiAfgaIAHgGIAPgLQAkgdAfgSIANgHQAigWAVgDQAigDAjABQBBAABDAEQAoABAagDQAwgIAlgUQAdgXAfADIAWgBQARAAAZAKQAaAKAZAOQAgAOAVgBQAoABAdgeIAQgNQAWgXAXgbQAOgWASgUIAMgNIAbgcIAdgbQAUgTAbgBQAggKAogoIADgCQAbgdAXgOQAagSAbgEIAIgBQAqgDgIApIADAKQAIA1gDA+IgCANQgNAjAOArQAOAvgDAuQgBAMgDAMQgKAngcAkIgIAMQgTATgFANQgNAQgKAQIgKARIgQAgIgFALIgUAnQgHANgKANQgPAVgUATIgTATIgGAFIgkAfIgpAgIgCABIggAeQgVAVgOAVIgFAIQgIALAJABQAGAOgSAHIgDACQgNAngvA4QgSAagbAdIgHAHQgZAagfAcQg6A8AAAeQALAggbAbQgPASgPANQgVASgYARIgJAIIgOALQgYAUgrAmQggAhgZgKIgTgEQgkgCgfgNQgrgOgfA9IgZAfQg7Bng9A6IgIAJQgMAPgLALQgUAWgWAXQgiAhgiAdQgnAfgkAZIggAVQg0AhgYgDQgcAIgIgOQgOAAgRgCQgngIhhBDQhcBCgjA6QgJAqgbAjQgUAOghApIgbAdQgsAwgqAiQgXASgcAUIg0AmQgSANgRAPIguAlQgkAegqAmQgxAsgpAiQgkAdgfAWQgSANgdARQgcARgTAPIgBABQggAYgeAaIgGAEQgfAZgdAPQgTAKgTADIgRABQgHgBgFgCQg0Alg4AVQgZAJgXAEIgRADIgMAAQgRAAgPgDg");
	this.shape_118.setTransform(129.8007,805.2301);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("A1FVNQgRgFgMgLIgKgKQgHgJgDgIQgCgIABgGIABgDIgMACQgIABgGgDQgMgFgHgOIgBgDQgFgKABgJQAAgLAFgIIADgEQADgGAGgEQAIgIAKgEIAJgFIAdgNIAUgHQAZgLAQgJIAOgJIAFgDQAXgRAagcIACgCQAPgRAVgbIATgYQBwiNBXh6IAsg7IA/haQAggtAdguIACgEIAdgvIAWgnIAVgnIADgGIAXgyQAJgWAHgTQAGgRADgOIAEgNIAAgDQAFgSADgWIADgzIABgYIABgJQABgfAEgYIAFgbQAFgVAJgQIAIgPIACgEQAQgYAXgWIADgCIATgQIAYgTIAQgLIAhgVIAHgRIAlhMIAIgMQAdgqAjgZIADgDQALgHANgGQAWgKAbgGQAngIAXgIQARgDAFgDIApgMIA8gWIABAAIA5gXIARgGQAJgEAIAAIARgEQAkgVACgSQACgIAAgKIgDgxQACgMABgfQgBghAEglQABg6AKgqQALgrAVgsIAFgLQAOgoAjgmIAKgKIAXgWQAjghAcgXIAGgGIAOgKQAhgZAegQIALgHQAfgRAWgDQAfgDAgAAQA6AABBAHQAkACAaAAQAugCAogKQAegMAfAFIAVABQARACAVAIQAZAKAXALQAeAMATAAQAnADAdgWIAQgKQAXgTAXgYQANgTASgUIALgLIAZgaIAagaQATgSAXgHQAegPAigjIADgDQAZgbAUgNQAYgRAZgEIAHgBQAogEAIAjIAGAIQAaAxAJBAIABAMQgDAiALApQAMAqgCArQgBALgCAMQgHAlgWAjIgHAMQgOASgGAOIgTAfIgJAPIgPAeIgFAKIgUAjIgQAXQgQATgSASIgRAQIgFAFIgjAcIglAeIgCABQgPANgOAPQgTAUgLATIgFAIQgGALAFAEQAEATgMAUIgBADQgHAzgkAwQgPAZgZAbIgGAGQgWAWgfAbQg1AzgMAdQgEAegdAZQgPAQgOAMIgqAeIgJAIIgNAJQgYASgpAhQgdAagagCIgUABQglAFgggDQgrgBgfAuIgZAbQg7BShCA6IgIAJQgLAMgLAKIgpApQgfAegfAaQgkAdggAYIgdAUQgtAfgYAEQgcAOgHgIIggAIQgpAGhVA7QhQA4gtA2QgSAjgeAgQgWAOgeAhIgbAZQgrAogoAfIgwAjIgvAiIgiAZIgqAhQgkAcglAhIhUBGQggAbgdAVQgSANgZAQQgYAQgSAOIgBABIg4AtIgFAEQgdAWgbAPQgSAJgRAEIgPADIgMAAQgyAfg0ARQgYAGgWADIgPACQgWAAgTgGg");
	this.shape_119.setTransform(121.4683,816.9795);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AzgUDQgVgBgRgIQgPgGgJgMIgIgMQgFgLgBgIQgBgIADgIIABgDIgKADQgHABgGgDQgKgEgHgNIgCgDQgEgJgBgIQgBgLADgIIACgFQADgFAFgFQAGgIAJgFIAIgFQAMgHAOgGIASgIQAXgKAOgIIANgIIAFgDQAWgQAWgaIACgBQANgQATgaIAQgWQBeiCBQh4IAng2IA4hTIA3hVIACgDIAbgrIAUgjIATgjIADgGQALgYAJgXIANgmQAFgPACgOIACgLIABgEQADgQABgWQABgTAAgbIAAgWIAAgJQABgcACgWIADgZQADgVAHgPIAGgNIACgEQAMgZATgYIACgBIAQgSIAVgVIANgMIAdgZIAJgOQAbgpAUgaIAJgLQAjgkAkgSIAEgCQAMgFAOgDQAWgGAdgCQAngBAWgEQASAAADgCQAUgCAUgEQAdgHAcgKQAbgLAZgMIAQgIIAQgGIASgLQApgfAHgjQADgNABgOQABgVgKgyIgHgxQgHgjgBghQgFg2AJgmQAJgoAWgoIAFgKQAPgfAkgmIAJgJIAUgUQAiggAYgUIAGgEIAMgKQAegXAcgNIALgGQAagMAYgEQAcgDAeAAQAyABA/AIIA6AHQAtADAqABQAfgBAgAHIASADQARADATAHIAsARQAcAKARABQAmAFAcgOIARgHQAXgNAYgXIAfgiIAKgLIAWgYIAYgZQARgRATgLQAbgVAdgfIACgCQAYgZARgNQAWgQAXgFIAGgBQAlgFAZAcIAJAIQArAtAWBBIAEANQAGAhAJAkQAKAngBAoIgCAVQgFAjgPAiIgFAMQgKASgGAPIgQAdIgIAPIgOAaIgFAJIgUAeIgQAVQgPASgRAPIgQAPIgEAEIggAaIgjAbIgBABQgOANgMANQgRATgJATIgDAHQgFALACAHQAAAYgEAgIgBAFQAAA+gZApQgMAXgXAZIgFAFQgTAUgfAZQgvAqgZAcQgUAcgeAYQgOANgOAKIgnAbIgIAGIgNAIIg/AqQgaAUgbAGIgVAFQgnANggAIQgsALgdAgIgaAWQg8A+hGA6IgIAIIgVATIgnAkIg6AzIg9AxIgZAUQgnAegWALQgdATgFgCIgjASQgqAThJAyQhDAwg4AxQgaAdgiAcQgXAPgdAZIgaAUQgqAhgnAcIgrAeIgsAfIgfAXIgnAdQgjAagiAcIhMA+QgeAZgaATIgmAcIgmAdIgBABIgzAoIgEADQgaAUgZAOQgQAIgPAGIgOAEIgMADQgwAagwAMQgXAFgUABIgHABIgHgBg");
	this.shape_120.setTransform(113.1223,828.7502);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AzGSoQgTgMgHgXQgHgZANgRQgXANgQgdQgPgdAQgXQANgRAdgOQAigPAPgJQAdgQAbggQAQgUAbgqIEam6QAqhCASgkQAdg7AHgzQAEgfgFhRQgDhIAKgnQALgqAhguQAUgcAsgxQApgtAbgVQAoghApgJQAggHAxAEIBSAIQBcADBLg6QBOg8AEhWQADgugjhoQgghfAKg1QAIgoAegpQASgZApgrQAtgtAZgVQApghAngPQAsgQA5ABQApAAA9ALQCBAXB/ArQA3ATAbAEQAvAJAjgNQAXgIAYgVQAPgNAZgbIB4iDQAWgZAQgMQAXgSAXgEQAngHAwAfQBCArAkBMQAjBLgFBRQgGBPgoBJQgnBGhAA1Ig8AwQgiAegMAeQgNAiAGBJQAGBKgOAiQgKAZgYAYQgPAQgfAYQiKBrhPAxQguAbhkAzQhhAygxAdQhgA8iDBwIjYC5Qh1BdkMCrQkBClh9BmQiMB0gaASQhjBFhaAPQgSADgPAAQggAAgWgNg");
	this.shape_121.setTransform(104.731,840.5376);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AxrRJQgSgLgFgVQgHgXALgQQgUALgOgbIAAAAQgOgbAOgVQAMgQAagOQAegNAOgJQAbgQAXgeQAPgTAZgmQB/jOCCjNQAmg8ARgiIACgDQAZg1AHguQAEgcgDhLIAAgcQABgtAIgcQAKgnAfgqQANgUAbgdIAUgWQAlgqAZgUQAlgeAmgJQAdgHAtADQBHAGAFgBQBUABBFg1QBIg4AGhPQADgrgeheQgbhYALgxQAIgkAcgmQAPgVAggjIAHgHQApgpAXgUQAhgbAggOIAKgEQAogPA0AAQAhAAAtAHIARADQBdAPBbAbIA1ARQAzARAZAFQAnAIAfgJIAFgBQAVgHAWgSQAOgMAXgXIBRhUIAcgdQAUgWAOgKQAVgQAVgDQAkgFArAdIAQALQAvAlAdA5IADAFQAaA3ADA7IgBAeQgEBJgkBEQghA8g0AwIgIAHIg3AtQgeAcgLAcQgNAgAFBDQACAcgCAVQgBAfgHATQgKAXgWAXQgOAPgdAWQhOA+g7AqQgjAZgbARQgmAYhLAmIgVALQhZAvguAbIgJAGQhRA0hqBZIgOAMQhxBgg1ArIgkAfQhLA7iKBbQhAArhQAyIgqAaQiABShZA/Qg4AogoAhIhgBLQguAlgOAJQhXA6hPANIgJACQgOACgNAAQgfAAgVgOg");
	this.shape_122.setTransform(104.4083,837.3041);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AwPPsQgQgLgGgUQgGgUAKgPQgSAJgNgZIAAgBQgMgYANgTQAKgQAXgMQAbgNANgJQAXgPAWgbQANgSAWgkQByi/B2i8QAjg3AQggIACgCQAXgwAHgrQAFgagChEIAAgZQABgpAIgaQALgkAcgmQANgSAYgbIASgVQAjglAXgTQAigcAjgJQAagHApACQBAAFAFgCQBNgBA/gxQBCgzAGhIQAFgogZhWQgXhPAMgtQAIghAZgiQAPgUAdgfIAGgHQAmgmAWgSQAegZAdgNIAJgEQAlgOAwgBQAdAAAqAFIAPACQBVANBVAZIAwAPQAvAQAXAFQAkAIAcgHIAEgBQAUgGAUgPQANgJAUgUIBJhHIAZgZQATgTAMgIQATgNATgCQAggDAnAaIAOAKQArAiAbA1IADAFQAZAzACA1QABANAAAOQgDBDggA/QgeA4guAtIgHAGQgQAPgiAcQgbAZgLAaQgLAeADA9QACAZgCAUQgBAcgHASQgJAVgUAVQgOAOgaAUQhHA5g2AoQggAXgZAQQgjAXhEAjIgTAKQhRAsgqAaIgJAFQhKAwhiBRIgNALQhnBXgyAoIgiAdQhHA3h9BSQg6AmhLAuIgnAYQh3BKhSA5QgzAkgnAdQg1AqgkAaQgqAhgNAHQhRA0hIAKIgIABIgVACQgfAAgTgOg");
	this.shape_123.setTransform(104.077,834.0873);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("Au1OOQgOgKgEgSQgGgTAJgNQgQAHgLgXIAAgBQgLgWALgSQAJgOAUgMQAYgMALgJQAVgOASgZIAfgxQBlixBrirQAfgyAPgdIABgCQAWgsAHgnQAFgZAAg8IABgXQACglAIgXQAKggAagjQAMgRAWgYIARgTQAfgiAVgRQAfgaAfgJQAZgHAkABQA5ADAGgCQBFgDA5gtQA8gvAIhBQAGgkgVhNQgShHAMgpQAIgeAYgfQANgSAagcIAGgGQAigjAUgRQAcgWAagMIAIgEQAigOArgBQAcgBAlAFIAOABQBOAKBNAXQAWAGAWAHQArAPAVAFQAgAIAagFIADgBQASgFASgMQAMgHASgRIBBg6IAWgUQARgQALgGQARgLAQgBQAdAAAjAXIAMAKQAmAeAaAxIACAEQAYAvADAwQABAMgBANQgBA8gcA7QgaAzgpAqIgHAFQgOAOgdAaQgZAXgJAZQgLAbACA4QABAWgCASQgBAagHAQQgIATgTATQgMANgXATQhAA0gyAmQgdAVgWAPQghAVg8AhIgRAJQhJAognAZIgIAFQhEAshaBJIgMAKQhcBNgxAlIgfAaQhDAzhwBJQg0AihGAqIgkAVQhuBEhKAyQgwAggjAaQgyAlghAXQgmAcgNAHQhLAthBAGIgHABIgPABQgeAAgTgOg");
	this.shape_124.setTransform(103.7583,830.8445);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AtZMwQgMgJgFgRQgFgQAIgNQgOAGgKgVIAAgBQgJgVAKgQQAHgNASgLQAUgLAKgJQARgNAQgXIAbgtQBYiiBfiaQAcgtAOgbIABgCQATgnAIgjQAGgXABg1IABgUQACggAJgWQAJgdAYgfQALgPAUgWIAPgRQAdgeATgQQAcgXAcgKQAWgHAgAAQAyACAGgDQA+gFAzgpQA2gqAJg6QAHghgQhEQgNg/AMglQAIgbAVgcQANgQAXgZIAGgGQAegfATgPQAZgVAXgLIAHgDQAfgNAmgCQAZgCAhAEIANABQBGAHBHAUIAoANIA5ATQAdAHAXgEIADAAQAQgDAQgKQAKgFAQgNIA5guIAUgPQAOgMAKgFQAPgIAOAAQAZABAfAWIALAIQAhAbAYAtIACAEQAWAqAEAqIABAXQAAA2gYA2QgWAuglAnIgFAGQgNANgZAXQgWAWgIAWQgLAZABAyQABAUgCAQQgCAXgGAOQgIASgQARQgLANgVAQQg5AwgtAjIguAhQgeAVg0AdIgQAJQhBAlgjAWIgIAFQg9AohSBCIgLAIQhSBEguAjIgdAXQg/AvhjBAQgvAehBAlIggATQhlA8hDAsIhNAzQgtAggeAUQgjAYgNAGQhEAmg6ADIgGAAIgLAAQgcAAgRgOg");
	this.shape_125.setTransform(103.4436,827.5975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("Ar/LSQgKgJgEgOQgEgPAGgLQgMADgIgSIAAgCQgIgSAIgPQAHgMAOgKQARgLAIgIQAPgNAOgUIAWgpQBKiTBUiKQAYgoANgYIABgCQASgiAIgfQAGgVADgvIABgRQADgbAJgUQAJgaAWgbQAKgOASgTIANgPQAZgbASgPQAZgVAYgJQAUgHAcgBQArAAAGgEQA3gHAtgkQAvgmALgzQAIgegLg6QgIg3AMghQAIgYATgZQALgOAVgWIAFgFQAbgcARgOQAWgSAVgLIAHgDQAbgMAigCQAWgDAdADIALABQA/AEA/ASIAkALIA0ARQAZAHAUgBIADgBQAOgBANgHQAKgDANgKIAxghIARgLQANgJAIgCQANgGAMABQAWAEAaATIAJAHQAdAYAWApIACADQAVAmAEAlIABAUQABAwgUAxQgSAqgfAkIgFAFQgKAMgWAVQgTAUgHAUQgKAXAAAsQAAARgCAOQgCAUgGAOQgHAPgPAQQgKALgSAQIhaBLIgoAdQgcAWgtAZIgNAIQg5AiggAVIgHAEQg3AkhKA6IgKAHQhHA6gtAgIgaAVQg7ArhWA3QgpAag8AhIgdARQhcA0g8AmIhGArQgoAcgdAQQgfAVgMAEQg+AfgzAAIgGAAIgDAAQgcAAgRgPg");
	this.shape_126.setTransform(103.1524,824.3953);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Ap2KGIgFAAQgZgBgPgPQgJgIgDgNQgEgNAFgKQgKABgGgQIAAgCQgGgQAGgNQAFgLAMgKQANgKAHgHQAMgNALgSIASgkQA9iEBIh6IAhg4IABgCQAPgeAIgbQAHgTAEgnIACgOQAEgYAIgSQAKgWATgYIAZgdIAMgNQAWgXAQgOQAVgSAWgJQAQgHAYgCQAlgCAGgFQAvgIAoghQApghALgsQAKgbgGgxQgEguANgeQAIgVARgVIAcggIAEgEQAYgYAPgNQAUgQASgKIAGgDQAYgLAdgDQATgDAaABIAJABQA4ACA4APIAgAJIAtARQAWAGAQABIADgBQAMAAAMgDQAIgCAMgGQAUgLAVgJIAOgGQAKgGAHgBQAKgDALACQASAGAWAQIAHAHQAYAVAVAkIACADQATAhAEAgIACASQADAqgQAsQgPAlgZAhIgEAEQgJAMgTATQgPASgHASQgIAVgCAlQAAAPgCAMQgCASgGAMQgHAOgMAOQgJAKgQAOIhOBEIgjAaQgZAVgmAWIgLAHQgxAegdAUIgGAEQgwAghCAyIgJAGQg9AxgrAdIgYASQg2AmhJAuQgkAXg2AcIgbAPQhSAtg1AfIg/AlQgkAWgbANQgbARgLAEQgxAVgoAAIgLgBg");
	this.shape_127.setTransform(102.8419,820.958);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AokI3IgEgBQgVgCgMgOQgHgIgDgLQgCgLADgJQgIAAgFgOIAAgDQgEgOAFgLQAEgKAIgJQAKgJAFgIQAJgLAJgQIAOggQAvh2A9hoIAcgyIABgBQANgZAJgXQAHgRAGghIADgLQADgTAJgQQAJgTARgUIAWgZIALgMQASgTAPgMQASgQASgJQAOgHAUgEQAdgDAHgFQAogLAigcQAjgdAMglQALgXgBgpQABgmANgaQAIgRANgSIAagbIAEgEQAUgVAOgLQAQgOAQgJIAFgCQAVgLAYgEQARgDAVAAIAJAAQAwgBAxANIAbAIIAoAQQASAGANACIADAAQAKABAJgBQAHABAKgDQARgFAQgCIALgCQAIgCAGABQAIgBAJADQAPAIARAOIAGAFQATATAUAfIABADQASAdAEAaIADAQQADAkgLAmQgLAhgVAeIgDAEQgHAMgPAQQgMAQgGAPQgIAUgCAfIgDAXQgDAOgFALQgGAMgLAMQgIAKgNAMIhCA8IgeAYQgWAUgeASIgKAHIhCAtIgGAEIhjBGIgIAFQgyAngqAbIgVAPQgyAig9AlQgeATgxAYIgXAMQhJAlguAaIg4AdQggARgYALQgXANgMACQgjAMgdAAQgLAAgLgCg");
	this.shape_128.setTransform(102.5593,816.375);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AnSHoIgEgCQgPgEgKgNQgFgHgCgKQgCgJACgIQgFgCgEgLIAAgDQgDgMADgKQADgJAGgIQAHgIADgIQAGgKAGgOIAKgbQAihoAxhYIAYgpIAAgBQAMgVAJgTQAHgQAIgYIADgKQAEgPAJgNQAJgPAPgRIATgVIAJgKQAPgQANgLQAOgNAPgJQAMgHAQgFQAWgEAIgHQAggMAcgYQAcgZAOgdQAMgUAEggQAFgeAOgWQAHgOAMgPIAWgWIADgDQARgRAMgKQAOgNANgHIAEgCQARgKAUgFQAPgEARgBIAHAAQApgEApALIAYAHQAUAHANAHIAZAJIACABIAQAEQAGADAHABQANABAMAEIAJADQAGABAEADQAGACAHAEIAYAWIAEAEQAPAPASAbIABACQAQAZAFAVIADANQAFAegIAiQgHAbgPAcIgDAEQgFAKgLAOQgJAOgFAOQgHARgEAZIgEATQgCAMgGAJQgFAKgJAKQgGAJgLAKIg2A1IgYAWQgVATgWAPIgHAGIg3AnIgFAEIhWA7IgGAEQgoAdgoAYIgSAMQguAfgwAcQgYAOgsAUIgVAKIhmAxIgxAWQgcAMgWAIQgTAIgLACQgWAFgSAAQgSAAgPgFg");
	this.shape_129.setTransform(102.312,811.8323);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AmBGYIgCgCQgLgGgHgMIgFgPQgBgHABgGQgEgEgCgKIAAgDQgBgKACgIQABgIADgHIAFgPIAHgVIAFgXQAVhZAmhHIATgjIATggQAIgNAJgSIAEgHQAEgKAJgMQAJgLAMgOIAQgRIAIgIIAXgVIAXgUQAKgHALgGQAPgGAIgHQAZgPAWgUQAXgUAOgWQANgRAJgXQAKgVANgSIASgXIASgRIADgDQANgOALgIQALgKAKgHIADgCQAPgJAPgFQAMgFANgCIAGgBQAhgGAjAIIATAFQAQAGALAIIATALIABAAIAMAJIAKAJQAJAHAIALIAGAIIAHAIIAIAKQAIAMAIAJIADADQAKANARAXIABABQAOAVAFAPIAEALQAGAYgDAcQgEAYgKAYIgCADQgDALgHALIgLAXQgGAQgFATIgEAOQgDAJgFAHQgFAIgHAJIgNAQIgrAvIgTATQgRASgPALIgGAGIgrAjIgFADQgcAUgqAbIgFADQgeAUgmAVIgPAJQgrAbgjATQgSAKgnAQIgRAHIhXAjQgWAJgUAGQgXAIgUAEQgPAFgLAAIgPABQgbAAgSgLg");
	this.shape_130.setTransform(102.1041,807.3361);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AkwFGQgQgSgBgrQgDiSA3hYQAPgYAZgaIAuguIDfjZQAXgWAOgLQAWgRAVgHQAcgLAdAGQAfAHASAWQAPASAJApQALAuAJAQQAGAKAPASQAOARAFALQATAigLA3QgJAqgVAjQgPAcgqAzIgjApQgVAXgTAPQgWAQgiATIg8AeQgvAcgaAMQgPAHguAPQgtAPgZAHQgnAKghABIgKABQgnAAgTgVg");
	this.shape_131.setTransform(101.9696,803.0079);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},12).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_131}]},1).to({state:[]},1).wait(127));

	// поиск
	this.instance_4 = new lib.Анимация8("synched",0);
	this.instance_4.setTransform(640,591.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).wait(122).to({scaleX:1.4187,scaleY:1.4187,y:468.15},0).wait(40).to({startPosition:0},0).wait(1));

	// авиас
	this.instance_5 = new lib.Анимация10("synched",0);
	this.instance_5.setTransform(640,493.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:false},0).wait(122).to({scaleX:1.4187,scaleY:1.4187,y:344.7},0).wait(40).to({startPosition:0},0).wait(1));

	// день___копия
	this.instance_6 = new lib.день20();
	this.instance_6.setTransform(-21,-10,1.0305,1.0305);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(41));

	// солнце
	this.instance_7 = new lib.Солнце();
	this.instance_7.setTransform(628.7,638.85,1.2869,1.2869,166.7578,0,0,570.6,544.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(132).to({_off:false},0).to({scaleX:1.287,scaleY:1.287,rotation:245.9899,y:638.8},32).to({_off:true},1).wait(41));

	// рассвет
	this.instance_8 = new lib.Рассвет();
	this.instance_8.setTransform(-3,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(132).to({_off:false},0).wait(32).to({_off:true},1).wait(41));

	// Слой_14
	this.instance_9 = new lib.звезда();
	this.instance_9.setTransform(1104.35,317.25,0.7915,0.7915,0,0,0,47,47);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).wait(107).to({x:1104.85,y:186.25},0).to({_off:true},1).wait(8));

	// Слой_13
	this.instance_10 = new lib.звезда();
	this.instance_10.setTransform(974.85,146.3,0.5408,0.5408,0,0,0,47.1,47.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90).to({_off:false},0).wait(107).to({x:975.35,y:15.3},0).to({_off:true},1).wait(8));

	// Слой_12
	this.instance_11 = new lib.звезда();
	this.instance_11.setTransform(263.8,317.25,0.5827,0.5827,0,0,0,47,47);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90).to({_off:false},0).wait(107).to({x:264.3,y:186.25},0).to({_off:true},1).wait(8));

	// Слой_11
	this.instance_12 = new lib.звезда();
	this.instance_12.setTransform(120.05,182.7,0.5249,0.5249,0,0,0,47.1,47.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90).to({_off:false},0).wait(107).to({x:120.55,y:51.7},0).to({_off:true},1).wait(8));

	// Слой_8
	this.instance_13 = new lib.звезда();
	this.instance_13.setTransform(144.7,98.1,0.7915,0.7915);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90).to({_off:false},0).wait(41).to({regX:47,regY:47,x:181.9,y:135.3},0).wait(66).to({x:182.4,y:4.3},0).to({_off:true},1).wait(8));

	// ночь
	this.instance_14 = new lib.Ночь30();
	this.instance_14.setTransform(-22,-14,1.0336,1.0336);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(90).to({_off:false},0).wait(41).to({_off:true},1).wait(74));

	// закат
	this.instance_15 = new lib.закат20();
	this.instance_15.setTransform(-150,0,1.0135,1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(46).to({_off:false},0).wait(43).to({_off:true},1).wait(116));

	// Слой_18
	this.instance_16 = new lib.облако3_1();
	this.instance_16.setTransform(816.9,493.2,1.105,1.105);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45).to({_off:true},1).wait(160));

	// Слой_17
	this.instance_17 = new lib.облако2_1();
	this.instance_17.setTransform(916.4,374.55,1.2622,1.2622);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(45).to({regX:86.8,regY:47.1,scaleX:1.293,x:1036.8,y:434},0).wait(152).to({scaleX:1.2622,x:1026.45,y:303},0).to({_off:true},1).wait(8));

	// облака
	this.instance_18 = new lib.облако1_1();
	this.instance_18.setTransform(113.7,245.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(45).to({_off:true},1).wait(160));

	// день
	this.instance_19 = new lib.день20();
	this.instance_19.setTransform(-24,-12,1.0366,1.0366);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(45).to({_off:true},1).wait(160));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-24.1,1930,1678.3999999999999);
// library properties:
lib.properties = {
	id: '7EFFF1AF8E51DC458898D8DE00580805',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Самолет_atlas_1.png", id:"Самолет_atlas_1"},
		{src:"images/Самолет_atlas_2.png", id:"Самолет_atlas_2"},
		{src:"images/Самолет_atlas_3.png", id:"Самолет_atlas_3"},
		{src:"sounds/Авиасейлс_.mp3", id:"Авиасейлс"},
		{src:"sounds/звууксамолета_.mp3", id:"звууксамолета"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EFFF1AF8E51DC458898D8DE00580805'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;