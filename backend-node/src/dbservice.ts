import { MongoClient } from 'mongodb';
import { Project } from './models/Project';
import { Converter } from './models/Converter';

export const InitializeConnection = async () => {
    try {
        // it will be always defined because of the check in app.ts
        // this is just to make typescript happy
        if (!process.env.DATABASE_URI) throw "Environment variable DATABASE_URI is not set";
        const client = new MongoClient(process.env.DATABASE_URI);
        
        await client.connect();

        const database = client.db(process.env.DATABASE_NAME);
        const projects = database.collection<Project>('projects');
        const converters = database.collection<Converter>('converters');

        console.log('Successfully connected to database');
        return { projects, converters };
    }
    catch (error) {
        console.log('Error while connecting to database:');
        throw error;
    }
}
