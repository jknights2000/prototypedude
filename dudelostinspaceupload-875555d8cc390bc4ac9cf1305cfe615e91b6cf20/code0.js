gdjs.Title_32screenCode = {};
gdjs.Title_32screenCode.GDbackgroundObjects1= [];
gdjs.Title_32screenCode.GDbackgroundObjects2= [];
gdjs.Title_32screenCode.GDTitleObjects1= [];
gdjs.Title_32screenCode.GDTitleObjects2= [];
gdjs.Title_32screenCode.GDdescObjects1= [];
gdjs.Title_32screenCode.GDdescObjects2= [];

gdjs.Title_32screenCode.conditionTrue_0 = {val:false};
gdjs.Title_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32screenCode.condition1IsTrue_0 = {val:false};


gdjs.Title_32screenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Title_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro:N", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.Title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32screenCode.GDbackgroundObjects1.length = 0;
gdjs.Title_32screenCode.GDbackgroundObjects2.length = 0;
gdjs.Title_32screenCode.GDTitleObjects1.length = 0;
gdjs.Title_32screenCode.GDTitleObjects2.length = 0;
gdjs.Title_32screenCode.GDdescObjects1.length = 0;
gdjs.Title_32screenCode.GDdescObjects2.length = 0;

gdjs.Title_32screenCode.eventsList0(runtimeScene);
return;

}

gdjs['Title_32screenCode'] = gdjs.Title_32screenCode;
