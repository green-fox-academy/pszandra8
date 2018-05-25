Ext.define('Test.view.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    // create function to render the chart
    onLoadChartRender: function () {
        Ext.create('Ext.chart.CartesianChart', {
            // add reference to chart so it can be referred to
            reference: 'chart',
            // add location to rendering
            renderTo: document.querySelector('#panel-1020-innerCt'),
            // set width of chart
            width: '100%',
            // set highth of chart
            height: 500,
            // set inner padding
            insetPadding: '40 40 40 40',
            // require chart store for data
            requires: [
                'Test.store.ChartData' 
            ],

            // require the chart fake data store
            store: {
                type: 'chart'
            },
            
            // set interaction for chart
            interactions: {
                type: 'panzoom'
            },
            
            // set legend's position
            legend: {
                docked: 'right'
            },
            // set sprites, add fake url
            sprites: [{
                type: 'text',
                text: 'Test chart',
                fontSize: 20,
                width: 100,
                height: 30,
                x: 65,
                y: 15
            }, {
                type: 'text',
                text: 'Source: http://www.loremipsum.org.',
                fontSize: 11,
                x: 65,
                y: 480
            }],
            
            // set both left and bottom axes
            axes: [{
                title: 'Numeric axis',
                type: 'numeric',
                position: 'left',
                grid: true
            }, {
                type: 'category',
                position: 'bottom',
                visibleRange: [0, 0.8],
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            
            // set series
            series: [{
                type: 'area',
                xField: 'name',
                yField: ['data1', 'data2', 'data3'],
                title: ['data1', 'data2', 'data3'],
                style: {
                    stroke: '#666666',
                    fillOpacity: 0.6
                }
            }]
    })
    },

    // definie preview function
    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    },
});