gdjs.intro_58NCode = {};
gdjs.intro_58NCode.GDNewObjectObjects1= [];
gdjs.intro_58NCode.GDNewObjectObjects2= [];
gdjs.intro_58NCode.GDLevel1Objects1= [];
gdjs.intro_58NCode.GDLevel1Objects2= [];
gdjs.intro_58NCode.GDbackgroundObjects1= [];
gdjs.intro_58NCode.GDbackgroundObjects2= [];
gdjs.intro_58NCode.GDleveldescObjects1= [];
gdjs.intro_58NCode.GDleveldescObjects2= [];

gdjs.intro_58NCode.conditionTrue_0 = {val:false};
gdjs.intro_58NCode.condition0IsTrue_0 = {val:false};
gdjs.intro_58NCode.condition1IsTrue_0 = {val:false};


gdjs.intro_58NCode.eventsList0 = function(runtimeScene) {

{


gdjs.intro_58NCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58NCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.intro_58NCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "intro");
}}

}


{


gdjs.intro_58NCode.condition0IsTrue_0.val = false;
{
gdjs.intro_58NCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "intro");
}if (gdjs.intro_58NCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Neptune", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.intro_58NCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.intro_58NCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.intro_58NCode.GDbackgroundObjects1[i].setZOrder(-(2));
}
}}

}


};

gdjs.intro_58NCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro_58NCode.GDNewObjectObjects1.length = 0;
gdjs.intro_58NCode.GDNewObjectObjects2.length = 0;
gdjs.intro_58NCode.GDLevel1Objects1.length = 0;
gdjs.intro_58NCode.GDLevel1Objects2.length = 0;
gdjs.intro_58NCode.GDbackgroundObjects1.length = 0;
gdjs.intro_58NCode.GDbackgroundObjects2.length = 0;
gdjs.intro_58NCode.GDleveldescObjects1.length = 0;
gdjs.intro_58NCode.GDleveldescObjects2.length = 0;

gdjs.intro_58NCode.eventsList0(runtimeScene);
return;

}

gdjs['intro_58NCode'] = gdjs.intro_58NCode;
