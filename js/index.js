let carArr = [];

logVehicle = () =>{
    let vehicleType = document.getElementById("type").value
    let vehicleMake = document.getElementById("make").value
    let vehicleModel = document.getElementById("model").value
    let vehicleRegNo = document.getElementById("regNo").value
    let vehicleCondition = document.getElementById("condition").value


    carArr.push({
        vehicleType: vehicleType,
        vehicleMake: vehicleMake,
        vehicleModel: vehicleModel,
        vehicleRegistration: vehicleRegNo,
        vehicleCondition: vehicleCondition
    });

    console.log(carArr)

    document.getElementById("form").reset();
}