var DraggablePortlet = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            $("#draggable_portlets").sortable({
                connectWith: ".panel",
                items: ".panel",
                opacity: 0.8,
                coneHelperSize: true,
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                cancel: '.tools.pull-right,.tools.pull-right > *,input,textarea,button,select,option'
            });

            $(".column").disableSelection();

            $('.graph-container').graphPanelWidget();

            $('.sidebar-toggle-box .fa-bars').click(function (e) {
                $('#container').toggleClass('open-right-panel');
                $('.right-sidebar').toggleClass('open-right-bar');
                $('.header').toggleClass('merge-header');

                e.stopPropagation();
            });

            var data7_1 = [
                [1354586000000, 185],
                [1354587000000, 175],
                [1354588000000, 175],
                [1354589000000, 170],
                [1354590000000, 165],
                [1354591000000, 165],
                [1354592000000, 165],
                [1354593000000, 163],
                [1354594000000, 167],
                [1354595000000, 167],
                [1354596000000, 162],
                [1354597000000, 162]
            ];
            var data7_2 = [
                [1354586000000, 80],
                [1354587000000, 120],
                [1354588000000, 120],
                [1354589000000, 110],
                [1354590000000, 90],
                [1354591000000, 85],
                [1354592000000, 100],
                [1354593000000, 94],
                [1354594000000, 94],
                [1354595000000, 72],
                [1354596000000, 73],
                [1354597000000, 80]
            ];

            $.plot($("#fixed_main_portlet .panel-body"), [{
                data: data7_1,
                label: "Weight",
                lines: {
                    fill: true
                }
            }, {
                data: data7_2,
                label: "Heart Rate",

                points: {
                    show: true
                },
                lines: {
                    show: true
                },
                yaxis: 2
            }
            ],
                {
                    series: {
                        lines: {
                            show: true,
                            fill: false
                        },
                        points: {
                            show: true,
                            lineWidth: 2,
                            fill: true,
                            fillColor: "#ffffff",
                            symbol: "circle",
                            radius: 5
                        },
                        shadowSize: 0
                    },
                    grid: {
                        hoverable: true,
                        clickable: true,
                        tickColor: "#f9f9f9",
                        borderWidth: 1,
                        borderColor: "#eeeeee"
                    },
                    colors: ["#79D1CF", "#E67A77"],
                    tooltip: true,
                    tooltipOpts: {
                        defaultTheme: false
                    },
                    xaxis: {
                        mode: "time"
                    },
                    yaxes: [{
                        /* First y axis */
                    }, {
                        /* Second y axis */
                        position: "right" /* left or right */
                    }]
                }
            );

        }


    };

}();