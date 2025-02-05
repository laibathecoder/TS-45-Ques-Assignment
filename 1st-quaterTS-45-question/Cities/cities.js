//Question NO : 38
//CITIES
function desc_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in The ").concat(country, "."));
}
desc_city("Karachi"); //defult country massage
desc_city("Lahore"); //defult cuntry massage
desc_city("france", "europe");
desc_city("Islamabad", "Pakistan."); //outof defult coonrtry massage
