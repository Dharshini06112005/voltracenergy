// Handles contact form submissions
exports.submitContact = (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Simple Server-side Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed: Name, email, and message are required fields.' 
      });
    }

    const referenceId = `VOL-CON-${Math.floor(10000 + Math.random() * 90000)}`;

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting Voltrac Energy. Our sales engineers will get back to you within 24 hours.',
      referenceId
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error processing contact form', error: error.message });
  }
};

// Handles customer complaint registrations
exports.submitComplaint = (req, res) => {
  try {
    const { customerName, phone, email, productSerial, invoiceNumber, purchaseDate, issueDescription } = req.body;

    if (!customerName || !phone || !email || !productSerial || !invoiceNumber || !purchaseDate || !issueDescription) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed: All form fields are mandatory to lodge a complaint ticket.'
      });
    }

    const ticketId = `TKT-VOL-${Math.floor(1000 + Math.random() * 9000)}`;

    res.status(200).json({
      success: true,
      message: 'Complaint ticket lodged successfully. A technical support agent will contact you shortly.',
      ticketId
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error processing complaint', error: error.message });
  }
};

// Handles dealer partner registrations
exports.submitPartner = (req, res) => {
  try {
    const { businessName, contactPerson, email, phone, businessType, experienceYears, city, state } = req.body;

    if (!businessName || !contactPerson || !email || !phone || !businessType || !city || !state) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed: Business name, contact person, email, phone, business type, city, and state are required fields.'
      });
    }

    const applicationId = `VOL-PTN-${Math.floor(10000 + Math.random() * 90000)}`;

    res.status(200).json({
      success: true,
      message: 'Your dealership application has been received. Our Partnership Operations team will contact you for verification.',
      applicationId
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error processing partner registration', error: error.message });
  }
};
