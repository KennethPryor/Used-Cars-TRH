function displayResults(animals) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    cars.forEach(function(car) {
      // Append each of the car's properties to the table
      var tr = $("<tr>").append(
        $("<td>").text(car.StockNumber),
        $("<td>").text(car.Year),
        $("<td>").text(car.Make),
        $("<td>").text(car.Model),
        $("<td>").text(car.Status),
        $("<td>").text(car.LastUpdated)
      );
  
      $("tbody").append(tr);
    });
  }
  
  $.getJSON("/all", function(data) {
    displayResults(data);
  });
  