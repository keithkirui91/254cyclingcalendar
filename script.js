document.addEventListener("DOMContentLoaded", function () {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const simulatedEvents = [
    {
      id: 1,
      name: "Ride Africa (The Mara Calling)",
      date: "2025-02-01T00:00:00Z",
      type: "MTB/Gravel",
      days: 7,
      link: "https://planner.example.com/event/1",
      distance: "500 km",
      location: "The Maasai Mara ",
      altittude: "1700 meters"
    },
    {
      id: 2,
      name: "SIPI Enduro",
      date: "2025-02-08T00:00:00Z",
      days: 8,
      link: "https://planner.example.com/event/2",
      distance: "80 km",
      location: "Mombasa",
      altittude: "1700 meters"
    },
    {
      id: 3,
      name: "Kijabe Enduro",
      date: "2025-03-16T00:00:00Z",
      days: 2,
      link: "https://planner.example.com/event/2",
      distance: "80 km",
      location: "Kijabe",
      altittude: "1700 meters"
    },
    {
      id: 4,
      name: "Cycle Kenya",
      date: "2025-02-15T00:00:00Z",
      days: 5,
      link: "https://planner.example.com/event/2",
      distance: "415km",
      location: "Nanyuki",
      altittude: "1700 meters"
    },
    {
      id: 5,
      name: "Dalla Adventures & Travel",
      date: "2025-07-18T00:00:00Z",
      days: 5,
      link: "https://planner.example.com/event/2",
      distance: "415km",
      location: "Naivasha",
      altittude: "1700 meters"
    },
    {
      id: 6,
      name: "Cycle Kenya",
      date: "2025-05-07T00:00:00Z",
      days: 5,
      link: "https://planner.example.com/event/2",
      distance: "415km",
      location: "Nanyuki",
      altittude: "1700 meters"
    },
    {
      id: 7,
      name: "Ride Africa",
      date: "2025-11-15T00:00:00Z",
      days: 7,
      link: "https://planner.example.com/event/1",
      distance: "500 km",
      location: "The Mara Calling",
      altittude: "1700 meters"
    }
  ];

  initializeCalendars(simulatedEvents);
  function initializeCalendars(events) {
    document.querySelectorAll(".month").forEach((monthContainer) => {
      const h2 = monthContainer.querySelector("h2");
      const monthName = h2?.textContent.trim();
      const monthIndex = monthNames.indexOf(monthName);

      if (monthIndex === -1) return;

      const calendarBody = monthContainer.querySelector(".calendar-body");
      if (calendarBody) {
        generateCalendar(monthIndex, new Date().getFullYear(), calendarBody, events);
      }

      const eventList = monthContainer.querySelector(".event-list");
      if (eventList) {
        eventList.innerHTML = "";
        events
          .filter(ev => new Date(ev.date).getMonth() === monthIndex)
          .forEach(ev => {
            const li = document.createElement("li");
            li.textContent = `  ${ev.name} on ${new Date(ev.date).toLocaleDateString()}`;
            
            li.addEventListener("click", () => togglePopover(li, ev));
          
            eventList.appendChild(li);
          });
      }
    });
  }

  function generateCalendar(month, year, calendarBody, events) {
    calendarBody.innerHTML = "";
    const firstDay = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let row = document.createElement("tr");

    for (let i = 0; i < adjustedFirstDay; i++) {
      const emptyCell = document.createElement("td");
      emptyCell.classList.add("empty");
      row.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      if (row.children.length === 7) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }

      const cell = document.createElement("td");
      cell.textContent = day;

      const cellDate = new Date(year, month, day).toISOString().slice(0, 10);
      const dayEvents = events.filter(ev => ev.date.slice(0, 10) === cellDate);

      if (dayEvents.length > 0) {
        cell.style.backgroundColor = "red";

        // Click and hover support
        cell.addEventListener("click", () => togglePopover(cell, dayEvents[0]));
        cell.addEventListener("mouseenter", () => showPopover(cell, dayEvents[0]));
      }

      row.appendChild(cell);
    }

    if (row.children.length > 0) {
      calendarBody.appendChild(row);
    }
  }

  let activePopover = null;

  function togglePopover(targetElement, eventData) {
    if (activePopover === targetElement) {
      closePopover();
    } else {
      showPopover(targetElement, eventData);
    }
  }

  function showPopover(targetElement, eventData) {
    let popover = document.getElementById("event-popover");

    if (!popover) {
      popover = document.createElement("div");
      popover.id = "event-popover";
      popover.style.position = "absolute";
      popover.style.backgroundColor = "#fff";
      popover.style.border = "1px solid #ccc";
      popover.style.padding = "10px";
      popover.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
      popover.style.zIndex = "10000";
      document.body.appendChild(popover);
    }

    activePopover = targetElement;

    popover.innerHTML = `
      Event: ${eventData.name || "N/A"}<br>
      Location: ${eventData.location || "N/A"}<br>
      Distance: ${eventData.distance || "N/A"}<br>
      Days: ${eventData.days || "N/A"}<br>
      
      Altitude: ${eventData.altittude || "N/A"}<br>
      <a href="${eventData.link}" target="_blank">Planner Website</a><br>
      <button id="close-popover-btn">Close</button>
    `;

    const rect = targetElement.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const margin = 10;
    let left = rect.left + window.scrollX + margin;

    if (left + popoverRect.width > window.innerWidth) {
      left = rect.right + window.scrollX - popoverRect.width - margin;
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${rect.top + window.scrollY + 20}px`;
    popover.style.display = "block";

    document.getElementById("close-popover-btn").addEventListener("click", closePopover);
  }

  function closePopover() {
    const popover = document.getElementById("event-popover");
    if (popover) {
      popover.style.display = "none";
    }
    activePopover = null;
  }

  // Close if clicked outside the popover
  document.addEventListener("click", function (e) {
    const popover = document.getElementById("event-popover");
    if (popover && !popover.contains(e.target) && e.target !== activePopover) {
      closePopover();
    }
  });
});
