# 1 Introduction

## 1.1 Document Scope

Europass promotes semantic interoperability by defining a specific vocabulary according to which the information
contained in Europass Documents is expressed. This vocabulary is definedaccording to an XML schema, which describes the
constraints on the structure and on the contents of Europass Documents.

Individuals, who use the Europass Online Editors to produce their Europass Curriculum Vitae or Europass Language
Passport, have the option to receive the document in Europass XML format or PDF format with the XML attached. The most
important benefit of this option is that it allows individuals to reuse their personal data and save time and effort
when accessing the Europass online editors at a later point, or other systems (job portals, employment /admission
services, etc.) that “understand” the Europass vocabulary.

The scope of this document is to provide a detailed description of the **Europass Curriculum Vitae (ECV)** for the new
release of the Europass portal, including its elements, cardinality and necessary business rules.

## 1.2 Intended Audience

The present document is intended to be read by the following teams, among others:

* The DG EMPL Team;
* Technical implementors of the new Europass platform;
* Technical integrator users interested in interoperating with the Europass Platform;

## 1.3 Document Structure

This document is structured in a comprehensible way, in order to facilitate implementation of the new CV standards
defined. It includes:

* **Background:** Information on design of technical solution (**Design Approach**) and lists the various imported and
included XML schema and explain the purpose each schema serves (**Namespaces**)
* **Europass XML Document elements; their structure and data types:** The main body of the document provides an in-depth
description of each possible element of a Europass XML document.
* **Code Lists:** tables containing codes or values representing concepts that have been agreed amongst several parties
as having the same meaning for all.