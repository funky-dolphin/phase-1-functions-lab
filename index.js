function distanceFromHqInBlocks(blocks){
    const hq = 42
    if (blocks >= 42){
        return blocks - hq
    }else (blocks < 42)
        return hq - blocks
    
} function distanceFromHqInFeet(blocks){
    distanceFromHqInBlocks(blocks)
    return distanceFromHqInBlocks(blocks) * 264
} 
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264
} 
function calculatesFarePrice(start, destination){
  const feet = (Math.abs(destination - start) * 264)
    if (feet < 400){
        return 0
    }else if (feet <= 2000) {
        return (feet - 400) * .02 
    }else if (feet <= 2500){
        return 25
    }else (feet > 2500)
    return "cannot travel that far"
}
