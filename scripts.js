window.onload=function(){
    function createAssignment(id, title) {
        let trElement = document.createElement('template');
        let elementToAppend ='<tr class="table-element">' +
            '                                <td class="assignment-id">' + id + '</td>\n' +
            '                                <td class="description">' + title  + '</td>\n' +
            '                                <td class="assignment-actions">\n' +
            '                                    <button type="button" class="btn btn-sm btn-info"><i class="fas fa-eye"></i> View\n' +
            '                                    </button>\n' +
            '                                    <button type="button" class="btn btn-sm btn-primary"><i class="fas fa-edit"></i>\n' +
            '                                        Edit\n' +
            '                                    </button>\n' +
            '                                    <button type="button" class="btn btn-sm btn-danger delete-action"><i class="far fa-trash-alt"></i>\n' +
            '                                        Delete\n' +
            '                                    </button>\n' +
            '                                </td>\n' +
            ' </tr>';
        trElement.innerHTML = elementToAppend;

        let assignmentsTable = document.querySelector('.assignments-table');
        assignmentsTable.appendChild(trElement.content.firstElementChild)
    }

    function appendDeleteListener(){
        let deleteButtons = document.getElementsByClassName("delete-action");

        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', function(e) {
                let tgt = e.target;
                if (tgt.tagName.toUpperCase() == "BUTTON") {
                    let parentToRemove = parentFinderHelper(tgt, "table-element");

                    if (null !== parentToRemove) {
                        parentToRemove.remove(); // or tgt.remove();
                    }
                }
            });
        }
    }

    function parentFinderHelper(elem, selector) {
            for ( ; elem && elem !== document; elem = elem.parentNode ) {
                if ( elem.className === selector) return elem;
            }
            return null;
    }

    function handleForm(){
        const name_id = document.querySelector('input[name="name_id"]')
        const title = document.querySelector('input[name="title"]')

        createAssignment(name_id.value, title.value)
        appendDeleteListener()
    }

    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()
        handleForm()
    })

    appendDeleteListener();
}
