document.addEventListener("DOMContentLoaded", function () {
    
    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Fetch events from your database/API
    // For demo purposes, here's a simulated events array.
    // Replace the following with an actual fetch if available:
    /*
    fetch('/api/events')
      .then(response => response.json())
      .then(events => {
        initializeCalendars(events);
      })
      .catch(error => console.error('Error fetching events:', error));
    */
    // Simulated events data:
    const simulatedEvents = [
      {
        id: 1,
        name:"Ride Africa",
        date: "2025-02-1T00:00:00Z",
        days: 7,
        link: "https://planner.example.com/event/1",
        distance: "500 km",
        location: "The Mara Calling",
        altittude: "1700 meters" 
      },
      
      {
        id: 2,
        name:"SIPI Enduro",
        date: "2025-02-8T00:00:00Z",
        days: 8,
        link: "https://planner.example.com/event/2",
        distance: "80 km",
        location: "Mombasa",
        altittude: "1700 meters" 
      },
      {
        id: 3,
        name:"Kijabe Enduro",
        date: "2025-03-16T00:00:00Z",
        days: 2,
        link: "https://planner.example.com/event/2",
        distance: "80 km",
        location: "Kijabe",
        altittude: "1700 meters" 
      },
      {
        id: 4,
        name:"Cycle Kenya",
        date: "2025-02-15T00:00:00Z",
        days: 5,
        link: "https://planner.example.com/event/2",
        distance: "415km",
        location: "Nanyuki",
        altittude: "1700 meters" 
      },
      {
        id: 5,
        name:"Dalla Adventures & travel",
        date: "2025-18-07T00:00:00Z",
        days: 5,
        link: "https://planner.example.com/event/2",
        distance: "415km",
        location: "Naivasha",
        altittude: "1700 meters" 
      },
      {
        id: 6,
        name:"Cycle Kenya",
        date: "2025-5-07T00:00:00Z",
        days: 5,
        link: "https://planner.example.com/event/2",
        distance: "415km",
        location: "Nanyuki",
        altittude: "1700 meters" 
      },
      {
        id: 7,
        name:"Ride Africa",
        date: "2025-11-15T00:00:00Z",
        days: 7,
        link: "https://planner.example.com/event/1",
        distance: "500 km",
        location: "The Mara Calling",
        altittude: "1700 meters" 
      },
    ];
    
    // Initialize calendars and event lists using the events data
    initializeCalendars(simulatedEvents);
  
    function initializeCalendars(events,eventData) {
      document.querySelectorAll(".month").forEach((monthContainer) => {
        const h2 = monthContainer.querySelector("h2");
        if (h2) {
          const monthName = h2.textContent.trim();
          const monthIndex = monthNames.indexOf(monthName);
  
          if (monthIndex !== -1) {
            const calendarBody = monthContainer.querySelector(".calendar-body");
            if (calendarBody) {
              generateCalendar(monthIndex, new Date().getFullYear(), calendarBody, events);
            }
            // Populate the event list for this month
            const eventList = monthContainer.querySelector(".event-list");
            if (eventList) {
              // Clear previous events
              eventList.innerHTML = "";
              // Filter events for the current month
              events.filter(ev => new Date(ev.date).getMonth() === monthIndex)
                    .forEach(ev => {
                const li = document.createElement("li");
                li.textContent = `Event  ${ev.name || "N/A"} on ${new Date(ev.date).toLocaleDateString()}`;
                // Attach hover events for the pop-up
                li.addEventListener("mouseenter", () => showPopover(li, ev));
                li.addEventListener("mouseleave", hidePopover);
                eventList.appendChild(li);
              });
            }
          }
        }
      });
    }
  
    // Function to generate calendar for a given month and year, and mark event dates
    function generateCalendar(month, year, calendarBody, events) {
      calendarBody.innerHTML = ""; // Clear existing content
  
      const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      let row = document.createElement("tr");
  
      // Adjust first day so Monday is first (0 = Monday, 6 = Sunday)
      let adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  
      // Add empty cells before the first date
      for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyCell = document.createElement("td");
        emptyCell.classList.add("empty");
        row.appendChild(emptyCell);
      }
  
      // Add the day numbers
      for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
          calendarBody.appendChild(row);
          row = document.createElement("tr");
        }
  
        const cell = document.createElement("td");
        cell.textContent = day;
  
        // Format the date to compare (yyyy-mm-dd)
        const cellDate = new Date(year, month, day);
        const dateStr = cellDate.toISOString().slice(0, 10);
  
        // Check for events on this date (if an event spans multiple days, more logic would be needed)
        const dayEvents = events.filter(ev => ev.date.slice(0, 10) === dateStr);
        if (dayEvents.length > 0) {
          // Mark the cell with a red background
          cell.style.backgroundColor = "red";
  
          // Attach hover events to show pop-up details (showing info for the first event if multiple exist)
          cell.addEventListener("mouseenter", () => showPopover(cell, dayEvents[0]));
          cell.addEventListener("mouseleave", hidePopover);
        }
  
        row.appendChild(cell);
      }
  
      // Append the last row if it's not empty
      if (row.children.length > 0) {
        calendarBody.appendChild(row);
      }
    }
  
    // Function to show pop-up with event details near the hovered element
    function showPopover(targetElement, eventData) {
      let popover = document.getElementById("event-popover");
      if (!popover) {
        popover = document.createElement("div");
        popover.id = "event-popover";
        document.body.appendChild(popover);
      }
      popover.innerHTML = `<strong>Event :</strong><br>
                 ${eventData.name || "N/A"}<br>                    
                Distance: ${eventData.distance || "N/A"}<br>

                          location: ${eventData.location || "N/A"}<br>
                           Altittude: ${eventData.altittude || "N/A"}<br>
                           <a href="${eventData.link}" target="_blank">Planner Website</a>`;
  
      popover.style.display = "block";
    }
  //hide popover
    function hidePopover() {
        const popover = document.getElementById("event-popover");
        if (popover) {
          setTimeout(() => {
            popover.style.display = "none";
          }, 4300); // delay of 300ms
        }
      }
      
  });
  