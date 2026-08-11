
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

const donors = [
  {
    name: "Rahul Sharma",
    blood: "O+",
    city: "Delhi",
    gender: "Male",
    age: 26,
    lastDonated: "10 May 2026",
    donations: 5,
    status: "available",
    phone: "9812345678",
    image: "person3.png"
  },
  {
    name: "Ankit Verma",
    blood: "B+",
    city: "Ambala",
    gender: "Male",
    age: 30,
    lastDonated: "2 June 2026",
    donations: 4,
    status: "available",
    phone: "9876543211",
    image: "person5.png"
  },
  {
  name: "Neha Kapoor",
  blood: "A+",
  city: "Chandigarh",
  gender: "Female",
  age: 25,
  lastDonated: "22 June 2026",
  donations: 4,
  status: "available",
  phone: "9876501234",
  image: "person18.png"
},
  {
    name: "Simran Kaur",
    blood: "A-",
    city: "Ludhiana",
    gender: "Female",
    age: 24,
    lastDonated: "18 April 2026",
    donations: 3,
    status: "available",
    phone: "9988776655",
    image: "person4.png"
  },
  {
    name: "Rohit Mehta",
    blood: "AB+",
    city: "Jaipur",
    gender: "Male",
    age: 29,
    lastDonated: "12 March 2026",
    donations: 6,
    status: "available",
    phone: "9123456789",
    image: "person6.png"
  },
  {
    name: "Pooja Singh",
    blood: "O-",
    city: "Sonipat",
    gender: "Female",
    age: 23,
    lastDonated: "5 July 2026",
    donations: 2,
    status: "available",
    phone: "9001122334",
    image: "person1.png"
  },
  {
    name: "Yash Arora",
    blood: "O+",
    city: "Gurgaon",
    gender: "Male",
    age: 22,
    lastDonated: "3 June 2026",
    donations: 3,
    status: "available now",
    phone: "9111122233",
    image: "person7.png"
  },
  {
    name: "Sneha Mishra",
    blood: "AB-",
    city: "Lucknow",
    gender: "Female",
    age: 23,
    lastDonated: "20 March 2026",
    donations: 2,
    status: "not available",
    phone: "9222233344",
    image: "person2.png"
  },
  {
    name: "Arjun Patel",
    blood: "A+",
    city: "Ahmedabad",
    gender: "Male",
    age: 28,
    lastDonated: "14 Feb 2026",
    donations: 5,
    status: "available",
    phone: "9333344455",
    image: "person9.png"
  },
  {
    name: "Priyanka Das",
    blood: "B-",
    city: "Kolkata",
    gender: "Female",
    age: 21,
    lastDonated: "30 April 2026",
    donations: 3,
    status: "available now",
    phone: "9444455566",
    image: "person8.png"
  },
  {
    name: "Manoj Yadav",
    blood: "O-",
    city: "Varanasi",
    gender: "Male",
    age: 23,
    lastDonated: "12 Jan 2026",
    donations: 4,
    status: "not available",
    phone: "9555566677",
    image: "person10.png"
  },
  {
    name: "Ritika Jain",
    blood: "AB+",
    city: "Indore",
    gender: "Female",
    age: 26,
    lastDonated: "7 July 2026",
    donations: 5,
    status: "available",
    phone: "9666677788",
    image: "person11.png"
  },
  {
    name: "Aman Gupta",
    blood: "B-",
    city: "Noida",
    gender: "Male",
    age: 27,
    lastDonated: "15 June 2026",
    donations: 3,
    status: "available",
    phone: "9012345670",
    image: "person12.png"
  },
  {
    name: "Kavya Sharma",
    blood: "A+",
    city: "Panipat",
    gender: "Female",
    age: 22,
    lastDonated: "10 Jan 2026",
    donations: 2,
    status: "available now",
    phone: "9023456781",
    image: "person13.png"
  },
  {
    name: "Ravi Kumar",
    blood: "O-",
    city: "Karnal",
    gender: "Male",
    age: 31,
    lastDonated: "2 Feb 2026",
    donations: 6,
    status: "not available",
    phone: "9034567892",
    image: "person14.png"
  },
  {
    name: "Meena Joshi",
    blood: "AB+",
    city: "Rohtak",
    gender: "Female",
    age: 25,
    lastDonated: "8 April 2026",
    donations: 4,
    status: "available",
    phone: "9045678910",
    image: "person15.png"
  },
  {
    name: "Deepak Singh",
    blood: "B+",
    city: "Delhi",
    gender: "Male",
    age: 29,
    lastDonated: "1 March 2026",
    donations: 5,
    status: "available now",
    phone: "9056789123",
    image: "person16.png"
  },
  {
    name: "Anjali Verma",
    blood: "A-",
    city: "Chandigarh",
    gender: "Female",
    age: 21,
    lastDonated: "11 May 2026",
    donations: 2,
    status: "not available",
    phone: "9067891234",
    image: "person17.png"
  }
  

];
function displayDonors(data) {
  const container = document.getElementById("donorContainer");
  const msg = document.getElementById("noResults");

  container.innerHTML = "";

  if (data.length === 0) {
    msg.classList.add("show");
    return;
  } else {
    msg.classList.remove("show");
  }

  data.forEach(donor => {
    let statusText = "";
if (donor.status === "available") {
  statusText = "Available";
} else if (donor.status === "available now") {
  statusText = "Available Now";
} else {
  statusText = "Not Available";
}
    container.innerHTML += `
      <div class="container2">

        <div class="profile">
          <img src="${donor.image}" alt="donor">
          <div class="info">
            <h3>${donor.name}</h3>
            <p class="verified-text">✔ Verified Donor</p>
          </div>
        </div>

        <div class="details">
          <div>
            <p class="blood">Blood: ${donor.blood}</p>
            
          </div>
          <div>
            <p class="city">City: ${donor.city}</p>
            
          </div>
          <div>
            <p class="gender">Gender: ${donor.gender}</p>
           
          </div>
          <div>
            <p>Age: ${donor.age}</p>
            
          </div>
        </div>

        <div class="extra">
          <p>🩸 Last Donated: ${donor.lastDonated}</p>
          <p>❤️ Donations: ${donor.donations}</p>
        </div>

        <div class="action">
        
          <p class="status ${donor.status}">${statusText}</p>
          <a href="tel:${donor.phone}" class="call-btn">Call Now</a>
        </div>

      </div>
    `;
  });
}

function filterDonors() {
  let blood = document.getElementById("bloodGroup").value.toLowerCase();
  let location = document.getElementById("location").value.toLowerCase().trim();
  let gender = document.getElementById("gender").value.toLowerCase();
  let availability = document.getElementById("availability").value.toLowerCase();

  let filtered = donors.filter(donor => {
    return (
      (blood === "all blood groups" || donor.blood.toLowerCase() === blood) &&
      (location === "" || donor.city.toLowerCase().includes(location)) &&
      (gender === "gender" || donor.gender.toLowerCase() === gender) &&
      (availability === "availability" || donor.status.toLowerCase().includes(availability))
    );
  });

  displayDonors(filtered);
}

function resetFilters() {
  document.getElementById("bloodGroup").value = "All Blood Groups";
  document.getElementById("gender").value = "Gender";
  document.getElementById("availability").value = "Availability";
  document.getElementById("location").value = "";

  displayDonors(donors);
}


document.addEventListener("DOMContentLoaded", function () {
  displayDonors(donors);

  document.getElementById("bloodGroup").addEventListener("change", filterDonors);
  document.getElementById("location").addEventListener("input", filterDonors);
  document.getElementById("gender").addEventListener("change", filterDonors);
  document.getElementById("availability").addEventListener("change", filterDonors);
});