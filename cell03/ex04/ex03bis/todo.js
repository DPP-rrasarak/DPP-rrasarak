$(document).ready(function() {
  loadToDos();

  // Click new
  $('#new').click(function() {
    const txt = prompt('Enter a new TO DO:');
    if (txt && txt.trim() !== '') {
      addTodoList(txt.trim());
      saveToDos();
    }
  });

  function addTodoList(txt) {
    const $item = $('<div></div>').text(txt);
    // Click to delete
    $item.click(function() {
      if (confirm('Do you want to remove this TO DO?')) {
        $(this).remove();
        saveToDos();
      }
    });
    // On top
    $('#ft_list').prepend($item);
  }

  function saveToDos() {
    const todos = [];
    $('#ft_list div').each(function() {
      todos.push($(this).text());
    });
    document.cookie = "ft_list=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=31536000";
  }

  function loadToDos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('ft_list='));
    if (todoCookie) {
      try {
        const jsonStr = decodeURIComponent(todoCookie.split('=')[1]);
        const todos = JSON.parse(jsonStr);
        todos.reverse().forEach(txt => addTodoList(txt));
      } catch (e) {
        console.error(e);
      }
    }
  }
});
