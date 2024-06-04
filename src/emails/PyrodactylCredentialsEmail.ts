import type Email from "@/emails/Email";

export default (email: string, password: string): Email => {
	return {
		subject: "Login to your new Pyro server",
		html: undefined,
		fallback: `Welcome to Pyro! Your Pyrodactyl credentials have been created. You can log in at ${process.env.PTERODACTYL_API_URL} with the following credentials:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease change your password after logging in.`,
	};
};
