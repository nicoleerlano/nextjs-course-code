function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log(`Received newsletter registration for email: ${email}`);

    res
      .status(201)
      .json({ message: "Successfully registered for newsletter!" });
  }
}

export default handler;
