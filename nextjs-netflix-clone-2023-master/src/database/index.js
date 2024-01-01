import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://bhaveshdsharma:bhavesh123@netflixcluster.cz6ff2i.mongodb.net/"
        );


        console.log("MongoDB is connected");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
    }
};

export default connectToDB;

