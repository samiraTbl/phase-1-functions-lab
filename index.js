// Code your solution in this file!
function distanceFromHqInBlocks(piLo)
{
const scHC =42;
return Math.abs(scHC-piLo);
}
function distanceFromHqInFeet(piLo)
{
const disBl=distanceFromHqInBlocks(piLo);
return disBl*264;
}
function distanceTravelledInFeet (sb,db)
{
    return Math.abs((db-sb)*264);
}
function calculatesFarePrice(sb,db)
{
    const dis=distanceTravelledInFeet(sb,db)
    if (dis <=400 )
    return 0;
    if (dis >400 && dis <=2000 )
        return (dis-400)*0.02
    else if (dis >2000 && dis <=2500 )
        return 25;
    else if (dis>2500)
        return 'cannot travel that far';
}