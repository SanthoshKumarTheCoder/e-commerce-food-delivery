import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const AdminPanel = () => {
    const { admin } = useContext(StoreContext);

    if (!admin) {
        return null; // If not admin, do not render anything
    }

    return (
        <div className="admin-panel">
            <h1>Welcome to Admin Panel</h1>
            <p>Only admins can see this panel.</p>
            <ul>
                <li>Manage Users</li>
                <li>Manage Orders</li>
                <li>Manage Products</li>
                <li>View Reports</li>
            </ul>
        </div>
    );
};

export default AdminPanel;
