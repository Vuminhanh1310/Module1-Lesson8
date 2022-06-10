function cal() {

    let year = +document.getElementById("year").value;

    console.log(year);

    console.log(333);

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(" Năm " + year + " là năm nhuận ");
        }
        else {
            alert(" Năm " + year + " không phải là năm nhuận ");
        }
    }
    else {
        if (year % 4 == 0) {
            alert(" Năm " + year + " là năm nhuận ");
        }
        else{
            alert(" Năm " + year + " không phải là năm nhuận ");
        }
    }
}