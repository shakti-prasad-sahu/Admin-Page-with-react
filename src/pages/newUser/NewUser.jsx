import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
               <div className="newUserItem">
                 <label>UserName</label>
                 <input type="text" placeholder="jhon" />
               </div>
               <div className="newUserItem">
                 <label>Full Name</label>
                 <input type="text" placeholder="Jhon smith" />
               </div>
               <div className="newUserItem">
                 <label>Email</label>
                 <input type="email" placeholder="Jhonsmith72@gmail.com" />
               </div>
               <div className="newUserItem">
                 <label>Password</label>
                 <input type="password" placeholder="Password" />
               </div>
               <div className="newUserItem">
                 <label>Phone</label>
                 <input type="number" placeholder="+1 123 456 789" />
               </div>
               <div className="newUserItem">
                 <label>Address</label>
                 <input type="text" placeholder="Address" />
               </div>
               <div className="newUserItem">
                 <label>Gender</label>
                 <div className="newUserGender">
                 <input type="radio" name="gender" id="male" value="male" />
                 <label for="male">Male</label>
                 <input type="radio" name="gender" id="female" value="female" />
                 <label for="female">Fe-male</label>
                 <input type="radio" name="gender" id="others" value="others" />
                 <label for="others">Others</label>
                 </div>
               </div>
               <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                 <option value="yes">Yes</option>
                 <option value="no">No</option>
                </select>
               </div>
               <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
