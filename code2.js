gdjs.NeptuneCode = {};
gdjs.NeptuneCode.forEachIndex2 = 0;

gdjs.NeptuneCode.forEachIndex3 = 0;

gdjs.NeptuneCode.forEachObjects2 = [];

gdjs.NeptuneCode.forEachObjects3 = [];

gdjs.NeptuneCode.forEachTemporary2 = null;

gdjs.NeptuneCode.forEachTemporary3 = null;

gdjs.NeptuneCode.forEachTotalCount2 = 0;

gdjs.NeptuneCode.forEachTotalCount3 = 0;

gdjs.NeptuneCode.GDPlayerObjects1= [];
gdjs.NeptuneCode.GDPlayerObjects2= [];
gdjs.NeptuneCode.GDPlayerObjects3= [];
gdjs.NeptuneCode.GDalienfloorObjects1= [];
gdjs.NeptuneCode.GDalienfloorObjects2= [];
gdjs.NeptuneCode.GDalienfloorObjects3= [];
gdjs.NeptuneCode.GDrocketplatObjects1= [];
gdjs.NeptuneCode.GDrocketplatObjects2= [];
gdjs.NeptuneCode.GDrocketplatObjects3= [];
gdjs.NeptuneCode.GDcloudObjects1= [];
gdjs.NeptuneCode.GDcloudObjects2= [];
gdjs.NeptuneCode.GDcloudObjects3= [];
gdjs.NeptuneCode.GDboltObjects1= [];
gdjs.NeptuneCode.GDboltObjects2= [];
gdjs.NeptuneCode.GDboltObjects3= [];
gdjs.NeptuneCode.GDscoreObjects1= [];
gdjs.NeptuneCode.GDscoreObjects2= [];
gdjs.NeptuneCode.GDscoreObjects3= [];
gdjs.NeptuneCode.GDliveObjects1= [];
gdjs.NeptuneCode.GDliveObjects2= [];
gdjs.NeptuneCode.GDliveObjects3= [];
gdjs.NeptuneCode.GDlivesObjects1= [];
gdjs.NeptuneCode.GDlivesObjects2= [];
gdjs.NeptuneCode.GDlivesObjects3= [];
gdjs.NeptuneCode.GDrobottingObjects1= [];
gdjs.NeptuneCode.GDrobottingObjects2= [];
gdjs.NeptuneCode.GDrobottingObjects3= [];
gdjs.NeptuneCode.GDleftObjects1= [];
gdjs.NeptuneCode.GDleftObjects2= [];
gdjs.NeptuneCode.GDleftObjects3= [];
gdjs.NeptuneCode.GDrightObjects1= [];
gdjs.NeptuneCode.GDrightObjects2= [];
gdjs.NeptuneCode.GDrightObjects3= [];
gdjs.NeptuneCode.GDcrashedshipObjects1= [];
gdjs.NeptuneCode.GDcrashedshipObjects2= [];
gdjs.NeptuneCode.GDcrashedshipObjects3= [];
gdjs.NeptuneCode.GDnotcompleteObjects1= [];
gdjs.NeptuneCode.GDnotcompleteObjects2= [];
gdjs.NeptuneCode.GDnotcompleteObjects3= [];
gdjs.NeptuneCode.GDendObjects1= [];
gdjs.NeptuneCode.GDendObjects2= [];
gdjs.NeptuneCode.GDendObjects3= [];
gdjs.NeptuneCode.GDtimerObjects1= [];
gdjs.NeptuneCode.GDtimerObjects2= [];
gdjs.NeptuneCode.GDtimerObjects3= [];
gdjs.NeptuneCode.GDcheatsObjects1= [];
gdjs.NeptuneCode.GDcheatsObjects2= [];
gdjs.NeptuneCode.GDcheatsObjects3= [];
gdjs.NeptuneCode.GDBlueEnemy1Objects1= [];
gdjs.NeptuneCode.GDBlueEnemy1Objects2= [];
gdjs.NeptuneCode.GDBlueEnemy1Objects3= [];
gdjs.NeptuneCode.GDRedLaser08Objects1= [];
gdjs.NeptuneCode.GDRedLaser08Objects2= [];
gdjs.NeptuneCode.GDRedLaser08Objects3= [];
gdjs.NeptuneCode.GDGreenLaser09Objects1= [];
gdjs.NeptuneCode.GDGreenLaser09Objects2= [];
gdjs.NeptuneCode.GDGreenLaser09Objects3= [];

gdjs.NeptuneCode.conditionTrue_0 = {val:false};
gdjs.NeptuneCode.condition0IsTrue_0 = {val:false};
gdjs.NeptuneCode.condition1IsTrue_0 = {val:false};
gdjs.NeptuneCode.condition2IsTrue_0 = {val:false};
gdjs.NeptuneCode.condition3IsTrue_0 = {val:false};
gdjs.NeptuneCode.conditionTrue_1 = {val:false};
gdjs.NeptuneCode.condition0IsTrue_1 = {val:false};
gdjs.NeptuneCode.condition1IsTrue_1 = {val:false};
gdjs.NeptuneCode.condition2IsTrue_1 = {val:false};
gdjs.NeptuneCode.condition3IsTrue_1 = {val:false};


gdjs.NeptuneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.NeptuneCode.GDPlayerObjects1, gdjs.NeptuneCode.GDPlayerObjects2);


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.NeptuneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects2[k] = gdjs.NeptuneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects2.length = k;}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects2[i].setAnimationName("stand");
}
}}

}


{

gdjs.copyArray(gdjs.NeptuneCode.GDPlayerObjects1, gdjs.NeptuneCode.GDPlayerObjects2);


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects2[k] = gdjs.NeptuneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects2.length = k;}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDboltObjects1Objects = Hashtable.newFrom({"bolt": gdjs.NeptuneCode.GDboltObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.NeptuneCode.GDBlueEnemy1Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.NeptuneCode.GDleftObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.NeptuneCode.GDBlueEnemy1Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.NeptuneCode.GDrightObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.NeptuneCode.GDrobottingObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.NeptuneCode.GDleftObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.NeptuneCode.GDrobottingObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.NeptuneCode.GDrightObjects1});gdjs.NeptuneCode.eventsList1 = function(runtimeScene) {

};gdjs.NeptuneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.NeptuneCode.GDboltObjects1);

for(gdjs.NeptuneCode.forEachIndex2 = 0;gdjs.NeptuneCode.forEachIndex2 < gdjs.NeptuneCode.GDboltObjects1.length;++gdjs.NeptuneCode.forEachIndex2) {
gdjs.NeptuneCode.GDboltObjects2.length = 0;


gdjs.NeptuneCode.forEachTemporary2 = gdjs.NeptuneCode.GDboltObjects1[gdjs.NeptuneCode.forEachIndex2];
gdjs.NeptuneCode.GDboltObjects2.push(gdjs.NeptuneCode.forEachTemporary2);
gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}
}

}


};gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.NeptuneCode.GDrobottingObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.NeptuneCode.GDBlueEnemy1Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.NeptuneCode.GDrobottingObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.NeptuneCode.GDalienfloorObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.NeptuneCode.GDalienfloorObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrocketplatObjects1Objects = Hashtable.newFrom({"rocketplat": gdjs.NeptuneCode.GDrocketplatObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.NeptuneCode.GDcrashedshipObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.NeptuneCode.GDcrashedshipObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.NeptuneCode.GDcrashedshipObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects = Hashtable.newFrom({"crashedship": gdjs.NeptuneCode.GDcrashedshipObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDendObjects1Objects = Hashtable.newFrom({"end": gdjs.NeptuneCode.GDendObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects = Hashtable.newFrom({"robotting": gdjs.NeptuneCode.GDrobottingObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects = Hashtable.newFrom({"BlueEnemy1": gdjs.NeptuneCode.GDBlueEnemy1Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.eventsList3 = function(runtimeScene) {

};gdjs.NeptuneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.NeptuneCode.GDboltObjects1);

for(gdjs.NeptuneCode.forEachIndex2 = 0;gdjs.NeptuneCode.forEachIndex2 < gdjs.NeptuneCode.GDboltObjects1.length;++gdjs.NeptuneCode.forEachIndex2) {
gdjs.NeptuneCode.GDboltObjects2.length = 0;


gdjs.NeptuneCode.forEachTemporary2 = gdjs.NeptuneCode.GDboltObjects1[gdjs.NeptuneCode.forEachIndex2];
gdjs.NeptuneCode.GDboltObjects2.push(gdjs.NeptuneCode.forEachTemporary2);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.NeptuneCode.GDboltObjects2.length ;i < len;++i) {
    gdjs.NeptuneCode.GDboltObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.NeptuneCode.eventsList5 = function(runtimeScene) {

};gdjs.NeptuneCode.eventsList6 = function(runtimeScene) {

};gdjs.NeptuneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects2);

for(gdjs.NeptuneCode.forEachIndex3 = 0;gdjs.NeptuneCode.forEachIndex3 < gdjs.NeptuneCode.GDrobottingObjects2.length;++gdjs.NeptuneCode.forEachIndex3) {
gdjs.NeptuneCode.GDrobottingObjects3.length = 0;


gdjs.NeptuneCode.forEachTemporary3 = gdjs.NeptuneCode.GDrobottingObjects2[gdjs.NeptuneCode.forEachIndex3];
gdjs.NeptuneCode.GDrobottingObjects3.push(gdjs.NeptuneCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects3.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);

for(gdjs.NeptuneCode.forEachIndex2 = 0;gdjs.NeptuneCode.forEachIndex2 < gdjs.NeptuneCode.GDBlueEnemy1Objects1.length;++gdjs.NeptuneCode.forEachIndex2) {
gdjs.NeptuneCode.GDBlueEnemy1Objects2.length = 0;


gdjs.NeptuneCode.forEachTemporary2 = gdjs.NeptuneCode.GDBlueEnemy1Objects1[gdjs.NeptuneCode.forEachIndex2];
gdjs.NeptuneCode.GDBlueEnemy1Objects2.push(gdjs.NeptuneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects2.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.NeptuneCode.GDRedLaser08Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.NeptuneCode.GDGreenLaser09Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.NeptuneCode.GDGreenLaser09Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.NeptuneCode.GDRedLaser08Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.NeptuneCode.GDGreenLaser09Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.NeptuneCode.GDalienfloorObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.NeptuneCode.GDRedLaser08Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects = Hashtable.newFrom({"alienfloor": gdjs.NeptuneCode.GDalienfloorObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects = Hashtable.newFrom({"GreenLaser09": gdjs.NeptuneCode.GDGreenLaser09Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects = Hashtable.newFrom({"RedLaser08": gdjs.NeptuneCode.GDRedLaser08Objects1});gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NeptuneCode.GDPlayerObjects1});gdjs.NeptuneCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NeptuneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("none");
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].setAnimationName("jump");
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NeptuneCode.GDPlayerObjects1.length !== 0 ? gdjs.NeptuneCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.NeptuneCode.GDrocketplatObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDrocketplatObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrocketplatObjects1[i].setZOrder(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("cloud"), gdjs.NeptuneCode.GDcloudObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcloudObjects1[i].setZOrder(-(2));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcrashedshipObjects1[i].setZOrder(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("bolt"), gdjs.NeptuneCode.GDboltObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDboltObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDboltObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.NeptuneCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDboltObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDboltObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "66136__aji__ding30603-spedup.wav", false, 5, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.NeptuneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("cheats"), gdjs.NeptuneCode.GDcheatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("live"), gdjs.NeptuneCode.GDliveObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.NeptuneCode.GDlivesObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.NeptuneCode.GDscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("timer"), gdjs.NeptuneCode.GDtimerObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDscoreObjects1[i].setString("Amount of bolts " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "/ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDlivesObjects1[i].setString("X" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDtimerObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9))));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDscoreObjects1[i].setX((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDscoreObjects1[i].setY((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDlivesObjects1[i].setX((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointX("")) - 130);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDlivesObjects1[i].setY((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointY("")) - 150);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDliveObjects1[i].setX((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointX("")) - 200);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDliveObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDliveObjects1[i].setY((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointY("")) - 170);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDtimerObjects1[i].setX((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointX("")) + 200);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDtimerObjects1[i].setY((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcheatsObjects1[i].setX((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDcheatsObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcheatsObjects1[i].setY((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointY("")) - 200);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
gdjs.NeptuneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.NeptuneCode.condition1IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
}
if (gdjs.NeptuneCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Neptune");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getY() >= 600 ) {
        gdjs.NeptuneCode.condition0IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Neptune");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.NeptuneCode.GDleftObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Left");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Left";
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.NeptuneCode.GDrightObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString("Right");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "Right";
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.NeptuneCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.NeptuneCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Right");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Left";
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects1[i].flipX(false);
}
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "Right";
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects1[i].flipX(true);
}
}}

}


{



}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.NeptuneCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.NeptuneCode.GDnotcompleteObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.NeptuneCode.GDrightObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Left");
}{for(var i = 0, len = gdjs.NeptuneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDleftObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.NeptuneCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDnotcompleteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcrashedshipObjects1[i].setAnimationName("stand");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}
{ //Subevents
gdjs.NeptuneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NeptuneCode.condition1IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
/* Reuse gdjs.NeptuneCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NeptuneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NeptuneCode.condition1IsTrue_0.val = true;
        gdjs.NeptuneCode.GDPlayerObjects1[k] = gdjs.NeptuneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NeptuneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDBlueEnemy1Objects1 */
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Neptune");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.NeptuneCode.GDalienfloorObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() * (2));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].addPolarForce(180, 2, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "icy");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.NeptuneCode.GDalienfloorObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.NeptuneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() * (2));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].addPolarForce(0, 2, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "icy");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("rocketplat"), gdjs.NeptuneCode.GDrocketplatObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrocketplatObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
{gdjs.NeptuneCode.conditionTrue_1 = gdjs.NeptuneCode.condition1IsTrue_0;
gdjs.NeptuneCode.conditionTrue_1.val = ((( gdjs.NeptuneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDPlayerObjects1[0].getPointY("")) > (( gdjs.NeptuneCode.GDrocketplatObjects1.length === 0 ) ? 0 :gdjs.NeptuneCode.GDrocketplatObjects1[0].getY()));
}
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "icy");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].clearForces();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects, true, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.NeptuneCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDnotcompleteObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
{gdjs.NeptuneCode.conditionTrue_1 = gdjs.NeptuneCode.condition1IsTrue_0;
gdjs.NeptuneCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) != gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notcomplete"), gdjs.NeptuneCode.GDnotcompleteObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDnotcompleteObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDnotcompleteObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
{gdjs.NeptuneCode.conditionTrue_1 = gdjs.NeptuneCode.condition1IsTrue_0;
gdjs.NeptuneCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDPlayerObjects1 */
/* Reuse gdjs.NeptuneCode.GDcrashedshipObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcrashedshipObjects1[i].setAnimationName("fixit");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fixingtime");
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fixingtime");
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
{gdjs.NeptuneCode.conditionTrue_1 = gdjs.NeptuneCode.condition1IsTrue_0;
gdjs.NeptuneCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcrashedshipObjects1[i].setAnimationName("fly");
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDcrashedshipObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDcrashedshipObjects1[i].addForce(0, -(1000), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("crashedship"), gdjs.NeptuneCode.GDcrashedshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.NeptuneCode.GDendObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDcrashedshipObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDendObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{



}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("robotting"), gdjs.NeptuneCode.GDrobottingObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDrobottingObjects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDrobottingObjects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDrobottingObjects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDrobottingObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDBlueEnemy1Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDBlueEnemy1Objects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NeptuneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NeptuneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


{



}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(60);
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "leveltimer");
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)) != 1;
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "leveltimer");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{



}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fire");
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(gdjs.randomInRange(1, 3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fire");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 1;
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.NeptuneCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 2;
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.NeptuneCode.GDGreenLaser09Objects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{


gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) == 3;
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "firerate");
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueEnemy1"), gdjs.NeptuneCode.GDBlueEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.NeptuneCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.NeptuneCode.GDRedLaser08Objects1);
{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects, 90, 40, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.NeptuneCode.GDBlueEnemy1Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getBehavior("FireBullet").Fire((gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointX("")), (gdjs.NeptuneCode.GDBlueEnemy1Objects1[i].getPointY("")), gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects, 90, 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.NeptuneCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.NeptuneCode.GDalienfloorObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDGreenLaser09Objects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDGreenLaser09Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDGreenLaser09Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.NeptuneCode.GDRedLaser08Objects1);
gdjs.copyArray(runtimeScene.getObjects("alienfloor"), gdjs.NeptuneCode.GDalienfloorObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDalienfloorObjects1Objects, false, runtimeScene, false);
}if (gdjs.NeptuneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NeptuneCode.GDRedLaser08Objects1 */
{for(var i = 0, len = gdjs.NeptuneCode.GDRedLaser08Objects1.length ;i < len;++i) {
    gdjs.NeptuneCode.GDRedLaser08Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenLaser09"), gdjs.NeptuneCode.GDGreenLaser09Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDGreenLaser09Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Neptune");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.NeptuneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLaser08"), gdjs.NeptuneCode.GDRedLaser08Objects1);

gdjs.NeptuneCode.condition0IsTrue_0.val = false;
gdjs.NeptuneCode.condition1IsTrue_0.val = false;
{
gdjs.NeptuneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDRedLaser08Objects1Objects, gdjs.NeptuneCode.mapOfGDgdjs_46NeptuneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NeptuneCode.condition0IsTrue_0.val ) {
{
gdjs.NeptuneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) != 1;
}}
if (gdjs.NeptuneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Neptune");
}}

}


};

gdjs.NeptuneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NeptuneCode.GDPlayerObjects1.length = 0;
gdjs.NeptuneCode.GDPlayerObjects2.length = 0;
gdjs.NeptuneCode.GDPlayerObjects3.length = 0;
gdjs.NeptuneCode.GDalienfloorObjects1.length = 0;
gdjs.NeptuneCode.GDalienfloorObjects2.length = 0;
gdjs.NeptuneCode.GDalienfloorObjects3.length = 0;
gdjs.NeptuneCode.GDrocketplatObjects1.length = 0;
gdjs.NeptuneCode.GDrocketplatObjects2.length = 0;
gdjs.NeptuneCode.GDrocketplatObjects3.length = 0;
gdjs.NeptuneCode.GDcloudObjects1.length = 0;
gdjs.NeptuneCode.GDcloudObjects2.length = 0;
gdjs.NeptuneCode.GDcloudObjects3.length = 0;
gdjs.NeptuneCode.GDboltObjects1.length = 0;
gdjs.NeptuneCode.GDboltObjects2.length = 0;
gdjs.NeptuneCode.GDboltObjects3.length = 0;
gdjs.NeptuneCode.GDscoreObjects1.length = 0;
gdjs.NeptuneCode.GDscoreObjects2.length = 0;
gdjs.NeptuneCode.GDscoreObjects3.length = 0;
gdjs.NeptuneCode.GDliveObjects1.length = 0;
gdjs.NeptuneCode.GDliveObjects2.length = 0;
gdjs.NeptuneCode.GDliveObjects3.length = 0;
gdjs.NeptuneCode.GDlivesObjects1.length = 0;
gdjs.NeptuneCode.GDlivesObjects2.length = 0;
gdjs.NeptuneCode.GDlivesObjects3.length = 0;
gdjs.NeptuneCode.GDrobottingObjects1.length = 0;
gdjs.NeptuneCode.GDrobottingObjects2.length = 0;
gdjs.NeptuneCode.GDrobottingObjects3.length = 0;
gdjs.NeptuneCode.GDleftObjects1.length = 0;
gdjs.NeptuneCode.GDleftObjects2.length = 0;
gdjs.NeptuneCode.GDleftObjects3.length = 0;
gdjs.NeptuneCode.GDrightObjects1.length = 0;
gdjs.NeptuneCode.GDrightObjects2.length = 0;
gdjs.NeptuneCode.GDrightObjects3.length = 0;
gdjs.NeptuneCode.GDcrashedshipObjects1.length = 0;
gdjs.NeptuneCode.GDcrashedshipObjects2.length = 0;
gdjs.NeptuneCode.GDcrashedshipObjects3.length = 0;
gdjs.NeptuneCode.GDnotcompleteObjects1.length = 0;
gdjs.NeptuneCode.GDnotcompleteObjects2.length = 0;
gdjs.NeptuneCode.GDnotcompleteObjects3.length = 0;
gdjs.NeptuneCode.GDendObjects1.length = 0;
gdjs.NeptuneCode.GDendObjects2.length = 0;
gdjs.NeptuneCode.GDendObjects3.length = 0;
gdjs.NeptuneCode.GDtimerObjects1.length = 0;
gdjs.NeptuneCode.GDtimerObjects2.length = 0;
gdjs.NeptuneCode.GDtimerObjects3.length = 0;
gdjs.NeptuneCode.GDcheatsObjects1.length = 0;
gdjs.NeptuneCode.GDcheatsObjects2.length = 0;
gdjs.NeptuneCode.GDcheatsObjects3.length = 0;
gdjs.NeptuneCode.GDBlueEnemy1Objects1.length = 0;
gdjs.NeptuneCode.GDBlueEnemy1Objects2.length = 0;
gdjs.NeptuneCode.GDBlueEnemy1Objects3.length = 0;
gdjs.NeptuneCode.GDRedLaser08Objects1.length = 0;
gdjs.NeptuneCode.GDRedLaser08Objects2.length = 0;
gdjs.NeptuneCode.GDRedLaser08Objects3.length = 0;
gdjs.NeptuneCode.GDGreenLaser09Objects1.length = 0;
gdjs.NeptuneCode.GDGreenLaser09Objects2.length = 0;
gdjs.NeptuneCode.GDGreenLaser09Objects3.length = 0;

gdjs.NeptuneCode.eventsList8(runtimeScene);
return;

}

gdjs['NeptuneCode'] = gdjs.NeptuneCode;
