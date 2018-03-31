/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
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

    onLoadChartRender: function () {
        Ext.create('Ext.chart.CartesianChart', {
            reference: 'chart',
            renderTo: document.querySelector('#panel-1020-innerCt'),
            width: '100%',
            height: 500,
            insetPadding: '40 40 40 40',
            requires: [
                'Test.store.ChartData' 
            ],
            store: {
                type: 'chart'
            },
        
            interactions: {
                type: 'panzoom'
            },
        
            legend: {
                docked: 'right'
            },
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

    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    },
});
