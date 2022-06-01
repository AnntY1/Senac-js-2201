//bilbioteca morris, para usar os graficos.

new Morris.Line({

    element: 'grafico',
    
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
        ],

    xkey: 'year',

    ykeys: ['value'],

    labels: ['Value']
});


new Morris.Bar({

    element: 'grafico',
    
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
        ],

    xkey: 'year',

    ykeys: ['value'],

    labels: ['Value']
});


new Morris.Donut({

    element: 'grafico',
    
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
        ],

    xkey: 'year',

    ykeys: ['value'],

    labels: ['Value']
});

new Morris.Area({

    element: 'grafico',
    
    data: [
        { year: '2018', value: 642 },
        { year: '2019', value: 845 },
        { year: '2020', value: 345 },
        { year: '2021', value: 467 },
        { year: '2022', value: 750 }
        ],

    xkey: 'year',

    ykeys: ['value'],

    labels: ['Value']
});
