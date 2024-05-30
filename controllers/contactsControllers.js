import contactsService from "../services/contactsServices.js";
import {HttpError, controllerWrapper} from "../helpers/index.js";
import Contact from "../models/contact.js";

const getAllContacts = controllerWrapper(async (req, res) => {
    // const contacts = await contactsService.getAll(req.body);
    const contacts = await Contact.find();
    res.json(contacts);
});

const getOneContact = controllerWrapper(async (req, res) => {
    const { id } = req.params;
    const contact = await contactsService.getById(id);
    if (!contact) {
        throw HttpError(404, "Not found");
    }
    res.json(contact);
});

const createContact = controllerWrapper(async (req, res) => {
    // const contact = await contactsService.addContact(req.body);
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
});

const updateContact = controllerWrapper(async (req, res) => {
    const { id } = req.params;
    const contact = await contactsService.updateById(id, req.body);
    if (!contact) {
        throw HttpError(404, "Not found");
    }
    res.json(contact);
});

const deleteContact = controllerWrapper(async (req, res) => {
    const { id } = req.params;
    const contact = await contactsService.removeContact(id);
    if (!contact) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Delete success",
    });
});

export {
    getAllContacts,
    getOneContact,
    createContact,
    updateContact,
    deleteContact
}

