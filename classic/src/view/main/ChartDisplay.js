Ext.require('Ext.chart.*');

Ext.define('Test.view.main.ChartDisplay', {
    extend: 'Ext.Panel',
    alias: 'chartDisplay',

    title: 'Chart',

    xtype: 'chartDisplay',

    requires: [
        'Test.store.ChartData' 
    ],

    tbar: [
        '->',
        {
            text: 'Load',
            handler: 'onLoad'
        },
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    // chart: Ext.create('Ext.chart.Chart', {
    //     renderTo: Ext.getBody(),
    //     width: 760,
    //     height: 480,
    
    //     legend: {
    //         docked: 'bottom'
    //     },
    
    //     interactions: {
    //         type: 'panzoom'
    //     },
  
    //     axes: [{
    //         type: 'numeric',
    //         position: 'left',
    //         grid: true
    //     }, {
    //         type: 'category',
    //         position: 'bottom',
    //         visibleRange: [0, 0.4]
    //     }],
    
    //     series: [{
    //         type: 'area',
    //         xField: 'name',
    //         yField: ['g1', 'g2'],
    //         title: ['data1', 'data2'],
    //         style: {
    //             stroke: '#666666',
    //             fillOpacity: 0.8
    //         }
    //     }]
    // }),
});
