$(document).ready(initialize);
//shipping_time
var shipping_time= 5;
var radios= 0; 
//apply_event_handlers
 {
    $(".days").onclick = function() {
        add(change_shipping_type);
    
    var change_shipping_type = $(input[type="radio"]);
}
}
//keydown
function initialize(){
    console.log("shipping calculator online");
    $("#weight").on("keydown", validate_keydown);
    $('#shipping-form').on('submit', onShippingFormSubmit)
}
function validate_keydown(event) {
    console.log("keydown", event.which);
    if (event.which == 190 || (event.which >= 48 && event.which <= 57)) {
        return true;
} else {
    return false;
    }
}
function onShippingFormSubmit(event){
    console.log("submit", onShippingFormSubmit)
    event.preventDefault();
    var weight = $("#weight").val();
    var shipping_time = $("input[name=shipping_time]:checked").val();
    var valueObject = calculate_shipping(weight, shipping_time);
    // display_values(valueObject);
}
//calculate shipping
function calculate_shipping(weight, shipping_time)
{
    var today = new Date();
    shipping_time = parseInt(shipping_time);
    if(today.getDay() == 0) {
        shipping_time += 1;
    }
    var arrival = new Date();
    arrival.setDate(arrival.getDate()+ shipping_time);
    if(arrival.getDay() == 0) {
        shipping_time += 1;
    }
    console.log("today", today, today.getDay());
    console.log("arrival", arrival, arrival.getDay());
    var returnObject = {
        arrival_date: '',
        weight:0,
        cost:0
   };
   console.log("return", returnObject);
 return returnObject;
}
