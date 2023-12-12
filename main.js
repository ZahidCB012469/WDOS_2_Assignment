// Identifying DOM Elements Form The Book Room Form

    // Personal Information
const personNameInput = document.getElementById("personName");
const contactInput = document.getElementById("contactId");
const emailInput = document.getElementById("emailId");
const countryInput = document.getElementById("countryId");
const specialreqInput = document.getElementById("specialreqId");
const genderInput = document.getElementById("gender");
    // Branch Selection
const barnchInput = document.getElementsByName("branchName");
const colomboBranchInput = document.getElementById("colomboBranch");
const negomboBranchInput = document.getElementById("negomboBranch");
const galleBranchInput = document.getElementById("galleBranch"); 
    // Room Selection
const roomInput = document.getElementsByName("roomType");
const numberofRoomsInput = document.getElementById("rumberofRooms");
const extraBedInput = document.getElementById("extraBed");
const singleInput = document.getElementById("single");
const doubleInput = document.getElementById("double");
const tripleInput = document.getElementById("triple");
    // Num of adults and children
const numofmealsInput = document.getElementsByName("mealsNum");
const numofadultsInput = document.getElementById("adultsnumber");
const childrenbelwo5Input = document.getElementById("childrenbelwo5");
const childrenabove5Input = document.getElementById("childrenabove5");
    // Duration
const checkinInput = document.getElementById("checkIn");
const checkoutInput = document.getElementById("checkOut");
const daysOutput = document.getElementById("numofDays");
const durationInput = document.getElementsByName("duration");
    // Extra requirments
const extrareqInput = document.getElementsByName("extrareq");
const wifiInput = document.getElementById("wifi");
const poolviewInput = document.getElementById("poolview");
const gardenviewInput = document.getElementById("gardenview");
    // Promo Code
const promocodeInput = document.getElementById("promocode");
    // Current Cost outputs
const currentCostOutput1 = document.getElementById("currentCostOutput");
const currentCostOutput2 = document.getElementById("output2");
const currentCostOutput3 = document.getElementById("output3");
const currentCostOutput4 = document.getElementById("output4");
const currentCostOutput5 = document.getElementById("output5");
const currentCostOutput6 = document.getElementById("output6");
const currentCostOutput7 = document.getElementById("output7");
    // Book Rooms Buttons
const bookBtn = document.getElementById("bookButton");
const addfavBtn = document.getElementById("favButton");
const checkfavBtn = document.getElementById("checkFav");
const resetfavBtn = document.getElementById("resetForm");
const checkloyaltyBtn = document.getElementById("checkLoyaltyBtn");
    // Popup
const popUpoutput = document.getElementById("popup");
const continueBtn = document.getElementById("continueBtn");
const popusdetailsOutput = document.getElementById("popusdetails");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const closeBtnInput = document.getElementById("closeBtn");
const closeBtn2Input = document.getElementById("closeBtn2");

// Identifying DOM Elements From The Adventure Book Form
    // Adventure DOM Elements
const adventureInput = document.getElementsByName("adventure");
const divinguideInput = document.getElementsByName("divinguide");
const localadultsInput = document.getElementById("localadults");
const localkidsInput = document.getElementById("localkids");
const foreignadultsInput = document.getElementById("foreignadults");
const foreignkidsInput = document.getElementById("foreignkids");
const adultsguideInput = document.getElementById("adultsguide");
const kidsguideInput = document.getElementById("kidsguide");


    // Buttons
const advBookBtnInput = document.getElementById("advBookBtn");
const advcheckFavBtn = document.getElementById("advcheckFav");
const advresetFormInput = document.getElementById("advresetForm");
    // Personal Information DOM Elements
const personName2Input = document.getElementById("personName2");
const contactId2Input = document.getElementById("contactId2");
const emailId2Input = document.getElementById("emailId2");
const countryId2Input = document.getElementById("countryId2");
const gender2Input = document.getElementById("gender2");
const specialreqId2Input = document.getElementById("specialreqId2");
    // Branch Selection DOM Elements
const colomboBranch2Input = document.getElementById("colomboBranch2");
const negomboBranch2Input = document.getElementById("negomboBranch2");
const galleBranch2Input = document.getElementById("galleBranch2");
    // Loyalty Output
const loyaltyoutput = document.getElementById("loyaltyoutput");

// Identifying DOM Elements From The Pay Now Form
const paynowButtonInput = document.getElementById("paynowButton");

// Event Listners For The Book Rooms Form
barnchInput.forEach(item => item.addEventListener("change", branchnamefunction));
roomInput.forEach(item => item.addEventListener("change", roomcostFuntion));
numofmealsInput.forEach(item => item.addEventListener("change", mealscalFunction));
durationInput.forEach(item => item.addEventListener("change", dateCalFunction));
extrareqInput.forEach(item => item.addEventListener("change", extrareqFunction));
bookBtn.addEventListener("click", outputfunction);
closeBtnInput.addEventListener("click", closeFunction);
closeBtn2Input.addEventListener("click", closeFunction2);
checkfavBtn.addEventListener("click", checkFavFunction);
resetfavBtn.addEventListener("click", resetbookroomFunction);

// Event Listners for Book Adventure Form
adventureInput.forEach(item => item.addEventListener("change", adventurecalFunction));
divinguideInput.forEach(item => item.addEventListener("change", guideCalFunction));
advBookBtnInput.addEventListener("click", advBookFunction);
barnchInput.forEach(item => item.addEventListener("change", branchnamefunction));
advcheckFavBtn.addEventListener("click", advcheckfavFuntion);
advresetFormInput.addEventListener("click", advformresetFunction);
checkloyaltyBtn.addEventListener("click", checkloyaltyFunction)

// Event Listners for the Pay Now Form
paynowButtonInput.addEventListener("click", paynowFunction)


// Declearing Variables
let personName;
let contact;
let email;
let country;
let gender;
let specialreq;
let barnchNames;
let roomType;
let roomCost;
let roomtotal;
let numberofRooms;
let pointsEarned;
let totaltpoints;
let previousloyaltypoint;
let extraBed;
let extraBedCost;
let numofadults;
let numofchildrenbelow5;
let numofchildrenabove5;
let totalMembers;
let finalmealCost;
let childmealsCost;
let numofDays;
let checkIndate;
let checkOutDate;
let extrareq;
let wifi;
let poolView;
let promoCode
let promoDiscount;
let currentCost;
let finalCost;
let finalPayable;
let finalCostwithoutpromo;

    // Variables for the adventure Booking from
let advType1;
let advCost;
let advType2;
let advType3;
let advType4;
let guide1;
let guideCost;
let guide2;
let totalAdv;
let adventureOutput;
let guide;
let advoutput1;
let advoutput2;
let advoutput3;
let advoutput4;
let localadultsvals;
let localkidsvals;
let foreignadultsvals;
let foreignkidsvals;
let adultsguidevals;    
let kidsguidevals;
let advCost1;
let advCost2;
let advCost3;
let advCost4;
let guideCost1;
let guideCost2;

// Initializing Variables
function initialize(){
    personName = "";
    contact = "";
    email = "";
    country = "";
    gender = "";
    specialreq = "";
    barnchNames = "";
    roomType = "";
    roomCost = 0;
    roomtotal = 0;
    numberofRooms = 0;
    pointsEarned = 0;
    totaltpoints = 0;
    previousloyaltypoint = 0;
    extraBed = "";
    extraBedCost = 0;
    numofadults = 0;
    numofchildrenbelow5 = 0;
    numofchildrenabove5 = 0;
    totalMembers = 0;
    finalmealCost = 0;
    numofDays = 0;
    checkIndate = "";
    checkOutDate = "";
    extrareq = "";
    wifi = "";
    poolView = "";
    promoCode = "";
    promoDiscount = 0;
    currentCost = 0;
    finalCost = 0;
    childmealsCost = 0;
    finalPayable = 0;
    finalCostwithoutpromo = 0;

    // Initializing Variables Related To The Adventure Booking Form
    advType1 = "";
    advCost = 0;
    advType2 = "";
    advType3 = "";
    advType4 = "";
    guide1 = "";
    guideCost = 0;
    guide2 = "";
    totalAdv = 0;
    adventureOutput = "";
    guide = "";
    advoutput1 = "";
    advoutput2 = "";
    advoutput3 = "";
    advoutput4 = "";
    localadultsvals = 0;
    localkidsvals = 0;
    foreignadultsvals = 0;
    foreignkidsvals = 0;
    adultsguidevals = 0;
    kidsguidevals = 0;
    advCost1 = 0;
    advCost2 = 0;
    advCost3 = 0;
    advCost4 = 0;
    guideCost1 = 0;
    guideCost2 = 0;
}

// Event Listner Functions
function branchnamefunction(){
    if (this.value == "colombo"){
        barnchNames = "Colombo Branch";
    } else if (this.value == "negombo"){
        barnchNames = "Negombo Branch";
    } else if (this.value == "galle"){
        barnchNames = "Galle Branch";
    } else{
        barnchNames = "Branch Not Selected";
    }
}

function personalinfoFunction(){
    personName = personNameInput.value;
    contact = contactInput.value;
    email = emailInput.value;
    country = countryInput.value;
    specialreq = specialreqInput.value;
    if (genderInput.options[genderInput.selectedIndex].value == "male"){
        gender = "Mr. "
    }else{
        gender = "Ms. "
    }
}
function personalinfoFunction2(){
    personName = personName2Input.value;
    contact = contactId2Input.value;
    email = emailId2Input.value;
    country = countryId2Input.value;
    specialreq = specialreqId2Input.value;
    if (gender2Input.options[gender2Input.selectedIndex].value == "male"){
        gender = "Mr. "
    }else{
        gender = "Ms. "
    }
}
function roomcostFuntion(){
    if(this.value == "single"){
        roomType = "Single Room(s)";
        roomCost = 25000.00;
    }else if(this.value == "double"){
        roomType = "Double Room(s)";
        roomCost = 35000.00;
    }else if(this.value == "triple"){
        roomType = "Triple Room(s)";
        roomCost = 40000.00;
    }
    if(extraBedInput.checked){
        extraBedCost = 8000.00;
        extraBed = " Extra Bed Added ";
    }else{
        extraBedCost = 0;
        extraBed = "";
    }
    numberofRooms = numberofRoomsInput.value;
    if (numberofRooms > 3){
        pointsEarned = numberofRooms * 20;
    }else{
        pointsEarned = 0;
    }
    localStorage.setItem("pointsEarned", `${pointsEarned}`);
    roomtotal = (roomCost + extraBedCost) * numberofRooms;

    previousloyaltypoint = Number(localStorage.getItem("previousloyaltypoint"));
    totaltpoints = pointsEarned + previousloyaltypoint;
    localStorage.setItem("totaltpoints", `${totaltpoints}`);
    currentCostOutput1.innerText = `Room Type and Costs are ${roomType} ${roomCost} ${extraBed}. The number of rooms ${numberofRooms} and the Room payable is ${roomtotal}`;
}
function mealscalFunction(){
    numofadults = parseInt(numofadultsInput.value);
    numofchildrenbelow5 = parseInt(childrenbelwo5Input.value);
    numofchildrenabove5 = parseInt(childrenabove5Input.value);
    totalMembers = numofadults + numofchildrenabove5;
    let mealCost = (totalMembers * 10000);
    if (numofchildrenabove5 > 0){
        childmealsCost = 5000;
    }else{
        childmealsCost = 0;
    }
    finalmealCost = mealCost + childmealsCost;
    currentCostOutput2.innerText  = `Number of adults is ${numofadults} and the number of children below and above is ${numofchildrenbelow5} and ${numofchildrenabove5}, The total Meal Cost is LKR ${finalmealCost}` ;
}
function dateCalFunction(){

    checkIndate =  checkinInput.value;
    checkOutDate = checkoutInput.value;

    let checkOut = new Date(checkoutInput.value);
    let checkIn = new Date(checkinInput.value);

    if (isNaN(checkOut)){
        daysOutput.innerText = "Invalid Date";
    }else if (isNaN(checkIn)){
        daysOutput.innerText = "Invalid Date";
    }
    else{
        let difference = checkOut.getTime() - checkIn.getTime();
        if (`${difference}` < 0){
            daysOutput.innerText = "Invalid Date";
        }else{
            numofDays = difference / (1000 * 3600 * 24);
            daysOutput.innerText = `${numofDays}`;
        }
    }
    finalCost = (roomtotal + finalmealCost) * numofDays;
    finalCostwithoutpromo = (roomtotal + finalmealCost) * numofDays;
    currentCostOutput4.innerText = `Final Payable is (Wihtout Promotion Discounts) LKR ${finalCostwithoutpromo}`;
}
function extrareqFunction(){
    if(this.value == "wifi"){
        if(this.checked){
            wifi = "WIFI Included \n";
        }else{
            wifi = " ";
        }
    }else if(this.value == "poolview"){
        poolView = " Pool View Included";
    }else if(this.value == "gardenview"){
        poolView = " Garden View Included";
    }else{
        poolView = " ";
    }
    extrareq = wifi + poolView;
    currentCostOutput3.innerText = `Extra requirements\n ${extrareq}`;
}
function promoFunction(){
    promoCode = promocodeInput.value;
    if(promoCode === "Promo123"){
        promoDiscount = finalCost * (5/100);
        finalCost -= promoDiscount;
        finalPayable = finalCost;
    }
}

function outputfunction(){
    personalinfoFunction();
    promoFunction();
    popUpoutput.classList.toggle('active');
    popusdetailsOutput.innerHTML =
    `
    <h2>Order Placed!!!</h2>
    <h3>Hi, ${gender} ${personName}</h3>
    <p>
        Order details are as Follows : <br>
        Selected branch is ${barnchNames}<br>
        Selected Room Type is ${roomType} ${extraBed}and the Room(s) Cost is LKR ${roomCost} <br>
        Entered Number of Rooms ${numberofRooms} <br>
        The Room Total payable is LKR ${roomtotal}<br>
        Loyalty Points Earned ${pointsEarned} <br>
        Entered Number of Adults  ${numofadults} <br>
        Entered Number of Children (Below 5 years old) is ${numofchildrenbelow5}<br>
        Entered Number of Children (Above 5 years old) is ${numofchildrenabove5}<br>
        The total Meal Cost is LKR ${finalmealCost}<br>
        Check In date ${checkIndate}<br>
        Check Out date ${checkOutDate}<br>
        ${extrareq}<br>
        Final Cost (Without Promotion Discounts) LKR ${finalCostwithoutpromo}<br>
        Final Cost (With Promotion if there any) LKR ${finalPayable} <br>

        Contact Details : ${contact}<br>
        Email address : ${email}<br>
        Country : ${country}<br>
        Special Requests : ${specialreq}
    </p>`

}  




function continueFunction(){
    previousloyaltypoint = totaltpoints;
    localStorage.setItem("previousloyaltypoint", `${previousloyaltypoint}`);
    popUpoutput.classList.toggle('active');
    currentCostOutput1.innerText = "";
    currentCostOutput2.innerText = "";
    currentCostOutput3.innerText = "";
    currentCostOutput4.innerText = "";
    currentCostOutput5.innerText = "";
    currentCostOutput6.innerText = "";
    currentCostOutput7.innerText = "";

    //Setting values to default
    initialize();
    colomboBranchInput.checked = false;
    negomboBranchInput.checked = false;
    galleBranchInput.checked = false;
    singleInput.checked = false;
    doubleInput.checked = false;
    tripleInput.checked = false;
    extraBedInput.checked = false;
    numberofRoomsInput.value = 1;
    numofadultsInput.value = 1;
    childrenbelwo5Input.value = 0;
    childrenabove5Input.value = 0;
    checkinInput.value = "yyyy-mm-dd";
    checkoutInput.value = "yyyy-mm-dd";
    daysOutput.innerText = "Number of Days";
    wifiInput.checked = false;
    poolviewInput.checked = false;
    gardenviewInput.checked = false;
    promocodeInput.value = "";
    personNameInput.value = "";
    contactInput.value = "";
    emailInput.value = "";
    countryInput.value = "";
    specialreqInput.value = "";
    genderInput.value = "male";
    
    // Setting values in adventure book form to default
    localadultsInput.checked = false;
    localkidsInput.checked = false;
    foreignadultsInput.checked = false;
    foreignkidsInput.checked = false;
    adultsguideInput.checked = false;
    kidsguideInput.checked = false;
    personName2Input.value = "";
    contactId2Input.value = "";
    emailId2Input.value = "";
    countryId2Input.value = "";
    specialreqId2Input.value = "";
    gender2Input.value = "male";
    colomboBranch2Input.checked = false;
    negomboBranch2Input.checked = false;
    galleBranch2Input.checked = false;
    localadultsInput.value = 0;
    localkidsInput.value = 0;
    foreignadultsInput.value = 0;
    foreignkidsInput.value = 0;
    adultsguideInput.value = 0;
    kidsguideInput.value = 0;
}
function addfavFunction(){
    popup2.classList.toggle('active');
    // Local Storage for the Room Bookings
    localStorage.setItem("name", `${personName}`);
    localStorage.setItem("gender", `${gender}`);
    localStorage.setItem("selectedBranch", `${barnchNames}`);
    localStorage.setItem("roomType", `${roomType}`);
    localStorage.setItem("extraBed", `${extraBed}`);
    localStorage.setItem("roomCost", `${roomCost}`);
    localStorage.setItem("numberofRooms", `${numberofRooms}`);
    localStorage.setItem("roomtotal", `${roomtotal}`);
    localStorage.setItem("numofadults", `${numofadults}`);
    localStorage.setItem("numofchildrenbelow5", `${numofchildrenbelow5}`);
    localStorage.setItem("numofchildrenabove5", `${numofchildrenabove5}`);
    localStorage.setItem("finalmealCost", `${finalmealCost}`);
    localStorage.setItem("checkIndate", `${checkIndate}`);
    localStorage.setItem("checkOutDate", `${checkOutDate}`);
    localStorage.setItem("extrareq", `${extrareq}`);
    localStorage.setItem("finalCostwithoutpromo", `${finalCostwithoutpromo}`);
    localStorage.setItem("finalPayable", `${finalPayable}`);
    localStorage.setItem("contact", `${contact}`);
    localStorage.setItem("email", `${email}`);
    localStorage.setItem("country", `${country}`);
    localStorage.setItem("specialreq", `${specialreq}`);

    //Adding Favorites from the adventure bookings to Local Storage
    localStorage.setItem("adventures", `${adventureOutput}`);
    localStorage.setItem("guideforAdults", `${guide1}`);
    localStorage.setItem("guideforKids", `${guide2}`);
    localStorage.setItem("guideCost", `${guideCost}`);
    localStorage.setItem("advfinalPayable", `${totalAdv}`);
    localStorage.setItem("adventureCost", `${advCost}`);



    // Adding reset funtion
    continueFunction();
}
function closeFunction(){
    popup2.classList.toggle('active');
}
function closeFunction2(){
    popup3.classList.toggle('active');
}
function checkFavFunction(){
    popUpoutput.classList.toggle('active');

    // Setting values to variables from Local Storage
    let setGender = localStorage.getItem("gender");
    let setName = localStorage.getItem("name");
    let setBranch = localStorage.getItem("selectedBranch");
    let setroomType = localStorage.getItem("roomType");
    let setExtraBed = localStorage.getItem("extraBed" );
    let setRoomCost = localStorage.getItem("roomCost");
    let setNumofRooms = localStorage.getItem("numberofRooms");
    let setroomtotal = localStorage.getItem("roomtotal");
    let setnumofadults = localStorage.getItem("numofadults");
    let setnumofchildrenbelow5 = localStorage.getItem("numofchildrenbelow5");
    let setnumofchildrenabove5 = localStorage.getItem("numofchildrenabove5");
    let setfinalmealCost = localStorage.getItem("finalmealCost");
    let setcheckIndate = localStorage.getItem("checkIndate");
    let setcheckOutDate = localStorage.getItem("checkOutDate");
    let setextrareq = localStorage.getItem("extrareq");
    let setfinalCostwithoutpromo = localStorage.getItem("finalCostwithoutpromo");
    let setfinalPayable = localStorage.getItem("finalPayable");
    let setcontact = localStorage.getItem("contact");
    let setemail = localStorage.getItem("email");
    let setcountry = localStorage.getItem("country");
    let setspecialreq = localStorage.getItem("specialreq");


    popusdetailsOutput.innerHTML =
    `
    <h2>Previous Order Details!!!</h2>
    <h3>Hi, ${setGender} ${setName}</h3>
    <p>
        Previous Order details are as Follows : <br>
        Selected branch is ${setBranch}<br>
        Selected Room Type is ${setroomType} ${setExtraBed}and the Room(s) Cost is LKR ${setRoomCost} <br>
        Entered Number of Rooms ${setNumofRooms} <br>
        The Room Total payable is LKR ${setroomtotal}<br>
        Entered Number of Adults  ${setnumofadults} <br>
        Entered Number of Children (Below 5 years old) is ${setnumofchildrenbelow5}<br>
        Entered Number of Children (Above 5 years old) is ${setnumofchildrenabove5}<br>
        The total Meal Cost is LKR ${setfinalmealCost}<br>
        Check In date ${setcheckIndate}<br>
        Check Out date ${setcheckOutDate}<br>
        ${setextrareq}<br>
        Final Cost (Without Promotion Discounts) LKR ${setfinalCostwithoutpromo}<br>
        Final Cost (With Promotion if there any) LKR ${setfinalPayable} <br>

        Contact Details : ${setcontact}<br>
        Email address : ${setemail}<br>
        Country : ${setcountry}<br>
        Special Requests : ${setspecialreq}
    </p>`
}
function resetbookroomFunction(){
    currentCostOutput1.innerText = "";
    currentCostOutput2.innerText = "";
    currentCostOutput3.innerText = "";
    currentCostOutput4.innerText = "";
    currentCostOutput5.innerText = "";
    currentCostOutput6.innerText = "";
    currentCostOutput7.innerText = "";

    //Setting values to default
    initialize();
    colomboBranchInput.checked = false;
    negomboBranchInput.checked = false;
    galleBranchInput.checked = false;
    singleInput.checked = false;
    doubleInput.checked = false;
    tripleInput.checked = false;
    extraBedInput.checked = false;
    numberofRoomsInput.value = 1;
    numofadultsInput.value = 1;
    childrenbelwo5Input.value = 0;
    childrenabove5Input.value = 0;
    checkinInput.value = "yyyy-mm-dd";
    checkoutInput.value = "yyyy-mm-dd";
    daysOutput.innerText = "Number of Days";
    wifiInput.checked = false;
    poolviewInput.checked = false;
    gardenviewInput.checked = false;
    promocodeInput.value = "";
    personNameInput.value = "";
    contactInput.value = "";
    emailInput.value = "";
    countryInput.value = "";
    specialreqInput.value = "";
    genderInput.value = "male";
}
function checkloyaltyFunction(){
    popup3.classList.toggle('active');

    let setpointsEarned = localStorage.getItem("pointsEarned");
    let settotaltpoints = localStorage.getItem("totaltpoints");
    let setpreviousloyaltypoint = localStorage.getItem("previousloyaltypoint");

    loyaltyoutput.innerHTML = `
    <h3>Loyalty Points Information : </h3>
    Previous Loyalty Points : ${setpreviousloyaltypoint} <br>
    Earned Loyalty Points : ${setpointsEarned} <br>
    Total Loyalty Points : ${settotaltpoints}
    `

}

    // Functions Related To The Adventure Booking Event Listners
function adventurecalFunction(){
    localadultsvals = localadultsInput.value;
    if(localadultsvals > 0){
        advType1 = "Diving for local Adults (1 hr) Included - LKR 5000\n";
        advoutput1 = `Diving for local Adults (1 hr) Included - LKR 5000 <br>`
        advCost1 = 5000 * localadultsvals;
    }else{
        adventure1 = "";
        advType1 = "";
        advCost1 = 0;
    }

    localkidsvals = localkidsInput.value;
    if(localkidsvals > 0){
        advType2 = " Diving for local kids (above 5 years) Included - LKR 2000\n";
        advoutput2 = `Diving for local kids (above 5 years) Included - LKR 2000 <br>`
        advCost2 = 2000 * localkidsvals;
    }else{
        adventure2 = "";
        advType2 = "";
        advCost2 = 0;
    }

    foreignadultsvals = foreignadultsInput.value;
    if(foreignadultsvals > 0){
        advType3 = " Diving for foreign adults Included - LKR 10000\n";
        advoutput3 = `Diving for foreign adults Included - LKR 10000 <br>`
        advCost3 = 10000 * foreignadultsvals;
    }else{
        adventure3 = "";
        advType3 = "";
        advCost = 0;
    }

    foreignkidsvals = foreignkidsInput.value;
    if(foreignkidsvals > 0){
        advType4 = " Diving for foreign kids Included - LKR 5000";
        advoutput4 = `Diving for foreign kids Included - LKR 5000 <br>`
        advCost4 = 5000 * foreignkidsvals;
    }else{
        adventure4 = "";
        advType4 = "";
        advCost4 = 0;
    }

    advCost = advCost1 + advCost2 + advCost3 + advCost4;
}
function guideCalFunction(){
    adultsguidevals = adultsguideInput.value;
    if(adultsguidevals > 0){
        guide1 = `Guide during the diving session for Adults The Guide Cost is LKR 1000\n`;
        guideCost1 = 1000;
    }else {
        guide1 = "";
        guideCost1 = 0;
    }

    kidsguidevals = kidsguideInput.value;
    if(kidsguidevals > 0){
        guide2 = `Guide during the diving session for Kids The Guide Cost is LKR 500\n`;
        guideCost2 = 500;
    }else {
        guide2 = "";
        guideCost2 = 0;
    }

    guideCost = guideCost1 + guideCost2;
    guide = `${guide1} ${guide2} Total Guide Cost is ${guideCost}`;
    currentCostOutput6.innerText = `${guide}`;
    totalAdv = advCost + guideCost;
    currentCostOutput7.innerText = `Total Payable is LKR ${totalAdv}`
}
function advBookFunction(){
    personalinfoFunction2();
    popUpoutput.classList.toggle('active');
    popusdetailsOutput.innerHTML =
    `
    <h2>Order Placed!!!</h2>
    <h3>Hi, ${gender} ${personName}</h3>
    <p>
        Order details are as Follows : <br>
        Selected branch is ${barnchNames}<br>
        Selected Adventures are, <br>
            ${adventureOutput} <br>
        Number of Local Adults : ${localadultsvals} <br>
        Number of Local Kids : ${localkidsvals} <br>
        Number of Foreign Adults : ${foreignadultsvals} <br>
        Number of Foreign Kids : ${foreignkidsvals} <br>
        Guidance Selection, <br>
            ${guide1} <br> \n ${guide2} <br>
        The Total Payable is ${totalAdv} <br>

        Contact Details : ${contact}<br>
        Email address : ${email}<br>
        Country : ${country}<br>
        Special Requests : ${specialreq}
    </p>
    `
}
function  advcheckfavFuntion(){
    popUpoutput.classList.toggle('active');

    let setGender = localStorage.getItem("gender");
    let setName = localStorage.getItem("name");
    let setBranch = localStorage.getItem("selectedBranch");
    let setcontact = localStorage.getItem("contact");
    let setemail = localStorage.getItem("email");
    let setcountry = localStorage.getItem("country");
    let setspecialreq = localStorage.getItem("specialreq");
    let setadventures = localStorage.getItem("adventures");
    let setguideforAdults = localStorage.getItem("guideforAdults");
    let setguideforKids = localStorage.getItem("guideforKids");
    let setguideCost = localStorage.getItem("guideCost");
    let setfinalPayable = localStorage.getItem("advfinalPayable");
    let setadventureCost = localStorage.getItem("adventureCost");



    popusdetailsOutput.innerHTML =
    `
    <h2>Order Placed!!!</h2>
    <h3>Hi, ${setGender} ${setName}</h3>
    <p>
        Order details are as Follows : <br>
        Selected branch is ${setBranch}<br>
        Selected Adventures are, <br>
            ${setadventures} <br>
        Guidance Selection, <br>
            ${setguideforAdults} <br> \n ${setguideforKids} <br>
        The Total Payable is ${setfinalPayable} <br>

        Contact Details : ${setcontact}<br>
        Email address : ${setemail}<br>
        Country : ${setcountry}<br>
        Special Requests : ${setspecialreq}
    </p>
    `
}
function advformresetFunction(){
    currentCostOutput1.innerText = "";
    currentCostOutput2.innerText = "";
    currentCostOutput3.innerText = "";
    currentCostOutput4.innerText = "";
    currentCostOutput5.innerText = "";
    currentCostOutput6.innerText = "";
    currentCostOutput7.innerText = "";
    initialize();
    // Setting values in adventure book form to default
    localadultsInput.checked = false;
    localkidsInput.checked = false;
    foreignadultsInput.checked = false;
    foreignkidsInput.checked = false;
    adultsguideInput.checked = false;
    kidsguideInput.checked = false;
    personName2Input.value = "";
    contactId2Input.value = "";
    emailId2Input.value = "";
    countryId2Input.value = "";
    specialreqId2Input.value = "";
    gender2Input.value = "male";
    colomboBranch2Input.checked = false;
    negomboBranch2Input.checked = false;
    galleBranch2Input.checked = false;
    localadultsInput.value = 0;
    localkidsInput.value = 0;
    foreignadultsInput.value = 0;
    foreignkidsInput.value = 0;
    adultsguideInput.value = 0;
    kidsguideInput.value = 0;  
}
function paynowFunction(){
    popup3.classList.toggle('active');
    loyaltyoutput.innerHTML = `
    <h3>Payment Successfull!!!</h3>
    `
}

initialize()