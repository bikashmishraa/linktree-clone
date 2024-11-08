import connectDB from "../../../lib/mongodb"; // Adjust the path if needed
import userModel from "../../../lib/model/userModel";
import { toast } from 'react-hot-toast';


export async function POST(request) {
    try {
        // Connect to MongoDB
        await connectDB();

        // Parse the request body
        const body = await request.json();
       
        // Insert data using Mongoose model
        const result = await userModel.create(body);

        console.log(result);
        return new Response(JSON.stringify({
            success: true,
            message: "Data inserted successfully",
        }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error inserting data:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Error inserting data",
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
