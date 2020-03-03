// donut elements
// -----------------------------------------------------
const donutUno = document.querySelector( '#donutUno' );
const donutDuo = document.querySelector( '#donutDuo' );
const donutTre = document.querySelector( '#donutTre' );

// donut skills values
// -----------------------------------------------------
const donutUnoSkill = 96;
const donutDuoSkill = 89;
const donutTreSkill = 66;


// donut datas
// -----------------------------------------------------
const donutUnoData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutUnoSkill, 100 - donutUnoSkill ]
};
const donutDuoData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutDuoSkill, 100 - donutDuoSkill ]
};
const donutTreData = {
    labels: [ 'Skill', 'No skill' ],
    series: [ donutTreSkill, 100 - donutTreSkill ]
};

// donut options
// -----------------------------------------------------
const donutOptions = {
    donut: true,
    showLabel: false,
    donutWidth: 22
};

window.addEventListener( 'load', function () {

    // draw donut charts
    // -----------------------------------------------------
    const chartUno = new Chartist.Pie( donutUno, donutUnoData, donutOptions );
    const chartDuo = new Chartist.Pie( donutDuo, donutDuoData, donutOptions );
    const chartTre = new Chartist.Pie( donutTre, donutTreData, donutOptions );
   
    // add donut values
    // -----------------------------------------------------
    const chartUnoValue = document.createElement( 'div' );
    chartUnoValue.classList.add( 'holder-value' );
    chartUnoValue.innerHTML = donutUnoData.series[0] + '%';
    donutUno.appendChild( chartUnoValue );
    // -----------------------------------------------------
    const chartDuoValue = document.createElement( 'div' );
    chartDuoValue.classList.add( 'holder-value' );
    chartDuoValue.innerHTML = donutDuoData.series[0] + '%';
    donutDuo.appendChild( chartDuoValue );
    // -----------------------------------------------------
    const chartTreValue = document.createElement( 'div' );
    chartTreValue.classList.add( 'holder-value' );
    chartTreValue.innerHTML = donutTreData.series[0] + '%';
    donutTre.appendChild( chartTreValue );
    

}, false );