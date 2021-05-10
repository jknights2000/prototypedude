gdjs.EndCode = {};
gdjs.EndCode.GDbackgroundObjects1= [];
gdjs.EndCode.GDbackgroundObjects2= [];
gdjs.EndCode.GDVictoryObjects1= [];
gdjs.EndCode.GDVictoryObjects2= [];
gdjs.EndCode.GDdancingguyObjects1= [];
gdjs.EndCode.GDdancingguyObjects2= [];
gdjs.EndCode.GDBackObjects1= [];
gdjs.EndCode.GDBackObjects2= [];
gdjs.EndCode.GDNewObjectObjects1= [];
gdjs.EndCode.GDNewObjectObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title screen", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDbackgroundObjects1.length = 0;
gdjs.EndCode.GDbackgroundObjects2.length = 0;
gdjs.EndCode.GDVictoryObjects1.length = 0;
gdjs.EndCode.GDVictoryObjects2.length = 0;
gdjs.EndCode.GDdancingguyObjects1.length = 0;
gdjs.EndCode.GDdancingguyObjects2.length = 0;
gdjs.EndCode.GDBackObjects1.length = 0;
gdjs.EndCode.GDBackObjects2.length = 0;
gdjs.EndCode.GDNewObjectObjects1.length = 0;
gdjs.EndCode.GDNewObjectObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
