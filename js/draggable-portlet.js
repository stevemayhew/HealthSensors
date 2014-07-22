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


            var withingsDataItems = [
                {
                    data_type: 'weight',
                    data: [],
                    label: "Weight",
                    lines: { fill: true },
                    points: { show: true }
                },
                {
                    data_type: 'fat_ratio',
                    data: [],
                    label: "Ratio",
                    lines: { fill: false },
                    points: { show: true },
                    yaxis: 2
                }
            ];

            _.each(withingsDataItems, function(dataItem) {
                dataItem.ajax_query =  $.get('http://alpha.bitwear.net/Withings/Withings_Fetch.py', {
                    userName: 'ckoehler',
                    dataType: dataItem.data_type
                });
                dataItem.ajax_query.done(function(data) {
                    dataItem.data = data;
                })
            });

            var queries = _.pluck(withingsDataItems, 'ajax_query');

            $.when.apply(this, queries).done(function() {

                $.plot($("#fixed_main_portlet .panel-body"), withingsDataItems, {
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
                        yaxes: [
                            {
                                /* First y axis */
                            },
                            {
                                /* Second y axis */
                                position: "right" /* left or right */
                            }
                        ]
                    }
                );
            });

        }


    };

}();