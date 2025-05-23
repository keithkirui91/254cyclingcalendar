nodocument.addEventListener("DOMContentLoaded", function () {
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
      date: "2025-04-15T00:00:00Z",
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
      location: "Kisumu",
      altittude: "1700 meters"
    },
    {
      id: 6,
      name: "Safari Epic",
      date: "2025-05-29T00:00:00Z",
      days: 3,
      link: "https://planner.example.com/event/2",
      distance: "415km",
      location: "Nanyuki",
      altittude: "1700 meters"
    },
    {
      id: 7,
      name: "Maasai Mara Grand Migration",
      date: "2025-06-17T00:00:00Z",
      days:  "4 days,4 stages",
      link: "https://planner.example.com/event/1",
      distance: "600 km",
      location: "The Mara Calling",
      altittude: "1700 meters"
    },
    {
      id: 8,
      name: "Taita Enduro",
      date: "2025-06-29T00:00:00Z",
      days: 7,
      link: "https://planner.example.com/event/1",
      distance: "200 km",
      location: "Taita Hills",
      altittude: "1700 meters"
    },
    {
      id: 9,
      name: "Cycle Kenya",
      date: "2025-09-07T00:00:00Z",
      days: 5,
      link: "https://planner.example.com/event/1",
      distance: "415 km",
      location: "Nanyuki",
      altittude: "1700 meters"
    },
    {
      id: 10,
      name: "Vipingo Tri-athlon",
      date: "2025-12-21T00:00:00Z",
      days: 7,
      link: "https://planner.example.com/event/1",
      distance: "500 km",
      location: "The Mara Calling",
      altittude: "1700 meters"
    },
    //KCRS
    {
      id: 11,
      name: "Mawenzi MTB Race(kcrs)",
      date: "2025-01-19T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Mawenzi Resort Mombasa",
      altittude: "1700 meters"
    },
    {
      id: 12,
      name: "Kangundo Kaper XC(kcrs)",
      date: "2025-01-26T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Kangundo, Mua Hills Sports Club",
      altittude: "1700 meters"
    },
    {
      id: 13,
      name: "Safari Race Series Overall GC(Amani x LOOP)(kcrs)",
      date: "2025-03-08T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Machakos",
      altittude: "1700 meters"
    },
    {
      id: 14,
      name: "Kibuku XC(kcrs)",
      date: "2025-09-02T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Kibuku Forest",
      altittude: "1700 meters"
    },
    {
      id: 15,
      name: "The Wild XC IV(kcrs)",
      date: "2025-04-06T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "50km, 20km, 10km,",
      location: "Lukenya",
      altittude: "1700 meters"
    },
    {
      id: 16,
      name: "Sagana Enduro(kcrs)",
      date: "2025-05-03T00:00:00Z",
      days: 2,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Sagana",
      altittude: "1700 meters"
    },
    {
      id: 17,
      name: "Sokoke MTB Race(kcrs)",
      date: "2025-05-18T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "70 km",
      location: "Watamu",
      altittude: "1700 meters"
    },
    {
      id: 18,
      name: "Sule Kangangi Memorial Gravel(kcrs)",
      date: "2025-06-08T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "120 km",
      location: "Kajiado",
      altittude: "1700 meters"
    },
    {
      id: 19,
      name: "Machakos MTB Stage Race(kcrs)",
      date: "2025-01-19T00:00:00Z",
      days: 2,
      link: "https://planner.example.com/event/1",
      distance: "60 km",
      location: "Machakos",
      altittude: "1700 meters"
    },
    {
      id: 20,
      name: "The KARI Challange(kcrs)",
      date: "2025-07-27T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Karlo Mugunga",
      altittude: "1700 meters"
    },
    {
      id: 21,
      name: "Hells Gate Challange(kcrs)",
      date: "2025-08-31T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Hells Gate",
      altittude: "1700 meters"
    },
    {
      id: 22,
      name: "Forest XC (Kenya MTB classic)(kcrs)",
      date: "2025-09-20T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "80 km",
      location: "Kereita Falls",
      altittude: "1700 meters"
    },
    {
      id: 23,
      name: "Naro Moro Cycling Festival MTB Race(kcrs)",
      date: "2025-09-26T00:00:00Z",
      days: 2,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Naro Moru",
      altittude: "1700 meters"
    },
    {
      id: 24,
      name: "Ololua Forest XC(kcrs)",
      date: "2025-10-12T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Ololua Forest",
      altittude: "1700 meters"
    },
    {
      id: 25,
      name: "Solar XCO Enduro(kcrs)",
      date: "2025-12-19T00:00:00Z",
      days: 2,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Eburru Forest",
      altittude: "1700 meters"
    },
    {
      id: 26,
      name: "Njoroge Memorial Ride(kcrs)",
      date: "2025-04-27T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Engineer town North Kinangop",
      altittude: "1700 meters"
    },
    //list b
    {
      id: 27,
      name: "Malindi Road Race(kcrs)",
      date: "2025-01-19T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Malindi",
      altittude: "1700 meters"
    },
    {
      id: 28,
      name: "Southern Bypass ITT(kcrs)",
      date: "2025-03-01T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Thogoto",
      altittude: "1700 meters"
    },
    {
      id: 29,
      name: "Pedalmania Ladies Race(kcrs)",
      date: "2025-03-08T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Kimuka, Ngong",
      altittude: "1700 meters"
    },
    {
      id: 30,
      name: "Great Rift Valley Challange(kcrs)",
      date: "2025-03-30T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Iten",
      altittude: "1700 meters"
    },
    {
      id: 31,
      name: "Gachika Road Race(kcrs)",
      date: "2025-02-11T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "100 km",
      location: "Kiambu",
      altittude: "1700 meters"
    },
{      id: 32,
      name: "The Half Way Cycle",
      date: "2025-07-02T00:00:00Z",
      days: 1,
      link: "https://planner.example.com/event/1",
      distance: "42 km",
      location: "Nakuru to Mogotio equator",
      altittude: "1700 meters"}



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
            li.textContent = ` ${ev.name}, ${new Date(ev.date).toLocaleDateString()}`;
            
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

      const cellDate = new Date(year, month, day).toLocaleDateString('en-CA');

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
      Event: ${eventData.name || "N/A"}<br><br>
      Location: ${eventData.location || "N/A"}<br><br>
      Distance: ${eventData.distance || "N/A"}<br><br>
      Days: ${eventData.days || "N/A"}<br><br>
      
      Altitude: ${eventData.altittude || "N/A"}<br><br>
      Link:<a href="${eventData.link}" target="_blank">register /Planner Website</a><br>
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
