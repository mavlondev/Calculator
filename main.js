const box = document.getElementById("box"),
    last_operation_history = document.getElementById("last_operation_history"),
    oparation = ['+', '-', '/', '*'], 
    hs = [','],
    last_num = [];


// percentage
const calculate_percentage = () =>{
    if(!oparation.includes(hs[hs.length-1])){
        box.innerHTML = box.innerHTML/100;
        last_operation_history.innerHTML = '';
    }
}

// CE button
const clear_entry = () =>{
    box.innerHTML = '0';
}

// C button
const button_clear = () =>{
    box.innerHTML = '0';
    last_operation_history.innerHTML = '';
    hs.push(',');
}

// backspace remove button
const backspace_remove = () =>{
    if(box.innerHTML.length === 1) box.innerHTML = '0';
    else box.innerHTML = box.innerHTML.slice(0, -1);
}

// 1/x button
const division_one = () =>{
    box.innerHTML = 1/box.innerHTML;
}

// square root button
const square_root = () =>{
    box.innerHTML = Math.sqrt(box.innerHTML);
}

// power of button
const power_of = () =>{
    box.innerHTML = Math.pow(box.innerHTML, 2);
}

// button_number
const button_number = (num) =>{
    if(num === '='){
        if(hs[hs.length-1]=='='){
            box.innerHTML = eval(box.innerHTML + hs[hs.length-2] + last_num[last_num.length-1]);
            return;
        }
        last_num.push(box.innerHTML);
        if(last_operation_history.innerHTML == '') return;
        last_operation_history.innerHTML = last_operation_history.innerHTML + box.innerHTML;
        box.innerHTML = eval(last_operation_history.innerHTML);
        console.log(eval(last_operation_history.innerHTML + box.innerHTML));
        hs.push('=');
        return;
    }
    if(oparation.includes(num)){
        hs.push(num);
    }
    if(oparation.includes(num)){
        if(oparation.includes(hs[hs.length-2])) {
            last_operation_history.innerHTML = last_operation_history.innerHTML.slice(0, -1);
            last_operation_history.innerHTML += num;
            return;
        }
        last_operation_history.innerHTML = box.innerHTML + " " + num;
        box.innerHTML = '0';
        return;
    }
    if(box.innerHTML.includes('.') && num == '.') return;
    if(box.innerHTML === '0') box.innerHTML = num;
    else box.innerHTML += num;
}

// plus_minus
const plus_minus = () =>{
    box.innerHTML = -box.innerHTML;
}