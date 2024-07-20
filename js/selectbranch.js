
 /*  <!--=====================================================
              I.T. THIRD SEM FORM LOGIC STARTS
 ========================================================-->*/
 function checkInputs() {
    const course = document.getElementById('course').value;
    const semester = document.getElementById('semester').value;

    if (course && semester) {
        if (course === 'Information technology' && semester === 'Third semester') {
            setTimeout(function() {
                window.location.href = '/html/IT-thirdsem.html';
            }, 500); // 500 milliseconds = 0.5 seconds
        } else {
            alert('Please select the correct course and semester.');
        }
    }
}
 /*  <!--=====================================================
              I.T. THIRD SEM FORM LOGIC ENDS
 ========================================================-->*/
