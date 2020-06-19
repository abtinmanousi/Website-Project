/// Event Listener
document.getElementById('btn').addEventListener('click', check);

/// Function
function check() {

    /// Global Numbers

    let score = 0;
    let q1 = Number(document.getElementById('q1').value);
    let q2 = document.getElementById('q2').value;
    q2 = q2.toLowerCase();
    let q3 = document.getElementById('q3').value;
    q3 = q3.toLowerCase();

    ///IF STATEMENTS
    if (q1 == 1) {
        document.getElementById('q1color').classList.add("qgreen");
        score++
    } else {
        document.getElementById('q1color').classList.add("qred");
    }



    if (q2 == 'china' || q2 == '2008' || q2 == 'beijing') {
        document.getElementById('q2color').classList.add("qgreen");
        score++
    } else {
        document.getElementById('q2color').classList.add("qred");
    }

    if (q3 == 'swimming') {
        document.getElementById('q3color').classList.add("qgreen");
        score++
    } else {
        document.getElementById('q2color').classList.add("qred");
    }

    document.getElementById('comment').innerHTML = 'Good Job. You are done!';
    document.getElementById('score').innerHTML = score;
    document.getElementById('result').innerHTML = score / 3 * 100;
}