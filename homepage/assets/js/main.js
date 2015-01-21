$.typeahead({
    input: "#q",
    maxItem: 12,
    minLength: 1,
    order: "asc",
    dynamic: true,
    delay: 500,
    group: "conference",
    hint: true,
    selector: {
        filter: "input-group-btn",
        // filterButton: "btn btn-default",
        dropdown: "dropdown-menu dropdown-menu-right",
        list: "dropdown-menu",
        hint: "form-control"
    },
    list: true,
    display: "title",
    template:
        '<span class="title">{{title}}</span>' +
        '<span class="original-title"><small>({{original_title}})</small></span>',
    source: {
        Видео: [
            {
                type: "POST",
                url: "http://127.0.0.1:8000/api/search_videos",
                data: {q: "{{query}}"},
            }
        ]
    },
    callback: {
        onClick: function (node, a, obj, e) {
            document.location.href = obj.url;
        }
    },
    debug: true
});
