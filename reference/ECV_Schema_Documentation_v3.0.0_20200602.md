## Page 1

&lt;img&gt;European Union Flag with wavy lines&lt;/img&gt;

# EUROPEAN COMMISSION
DG Employment, Social Affairs and Inclusion

# EUROPASS2 CV XML Schema Documentation

<table>
  <tr>
    <td>Subject</td>
    <td>EUROPASS CV formats and standards specification</td>
  </tr>
  <tr>
    <td>Version</td>
    <td>3.0.0</td>
  </tr>
  <tr>
    <td>Release Date</td>
    <td>17/02/2020</td>
  </tr>
  <tr>
    <td>Filename</td>
    <td>ECV_Schema_Documentation_v3.0.0.docx</td>
  </tr>
</table>

<footer>DG EMPL 2020</footer>&lt;page_number&gt;Page 1 of 160&lt;/page_number&gt;

---


## Page 2

&lt;img&gt;europass&lt;/img&gt; Europass2 CV XML Schema Documentation

## Abstract

The purpose of this document is to describe in detail the Europass Curriculum Vitae (ECV) Data Standard Specification, which is the format used for the exchanges of CVs in Europass e-portfolio, a free web-based tools that foster mobility and employment in the EU. This document defines the structure, the code lists to be used and the Business Rules that apply for each of the elements in the ECV schema.

## Change log

<table>
  <thead>
    <tr>
      <th>Version</th>
      <th>Description</th>
      <th>Author</th>
      <th>Creation Date</th>
      <th>Required review date</th>
      <th>Reviewed By</th>
      <th>Approval date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.0</td>
      <td>First draft of the document</td>
      <td>EVERIS</td>
      <td>27/11/2019</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2.0</td>
      <td>Second draft of the document</td>
      <td>EVERIS</td>
      <td>13/12/2019</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3.0</td>
      <td>Third draft of the document</td>
      <td>EVERIS</td>
      <td>17/02/2020</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020 &lt;page_number&gt;Page 2 of 160&lt;/page_number&gt;

---


## Page 3

# Table of Contents

&lt;img&gt;European Union Flag&lt;/img&gt;

<table>
  <tr>
    <td>I</td>
    <td>Introduction</td>
    <td>7</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Background</td>
    <td>8</td>
  </tr>
  <tr>
    <td>2.1</td>
    <td>Design Approach</td>
    <td>8</td>
  </tr>
  <tr>
    <td>2.2</td>
    <td>Namespaces</td>
    <td>9</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Europass XML Document elements, their structure and datatypes</td>
    <td>12</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>/Candidate (level 0)</td>
    <td>12</td>
  </tr>
  <tr>
    <td>3.2</td>
    <td>/Processing Information (level 1)</td>
    <td>16</td>
  </tr>
  <tr>
    <td>3.3</td>
    <td>/CandidateSupplier (level 1)</td>
    <td>18</td>
  </tr>
  <tr>
    <td>3.4</td>
    <td>/CandidateSupplier/PersonContact (level 2)</td>
    <td>20</td>
  </tr>
  <tr>
    <td>3.5</td>
    <td>/CandidatePerson (level 1)</td>
    <td>28</td>
  </tr>
  <tr>
    <td>3.6</td>
    <td>/CandidatePerson/PersonName (level 2)</td>
    <td>32</td>
  </tr>
  <tr>
    <td>3.7</td>
    <td>/CandidatePerson/Communication (level 2)</td>
    <td>34</td>
  </tr>
  <tr>
    <td>3.8</td>
    <td>/CandidatePerson/Disability (level 2)</td>
    <td>39</td>
  </tr>
  <tr>
    <td>3.9</td>
    <td>/CandidateProfile (level 1)</td>
    <td>42</td>
  </tr>
  <tr>
    <td>3.10</td>
    <td>/CandidateProfile/PersonAvailability (level 2)</td>
    <td>49</td>
  </tr>
  <tr>
    <td>3.11</td>
    <td>/CandidateProfile/EducationHistory (level 2)</td>
    <td>51</td>
  </tr>
  <tr>
    <td>3.12</td>
    <td>/CandidateProfile/PersonQualifications (level 2)</td>
    <td>62</td>
  </tr>
  <tr>
    <td>3.13</td>
    <td>/CandidateProfile/ExperienceSummary (level 2)</td>
    <td>68</td>
  </tr>
  <tr>
    <td>3.14</td>
    <td>/CandidateProfile/EmploymentHistory (level 2)</td>
    <td>70</td>
  </tr>
  <tr>
    <td>3.15</td>
    <td>/CandidateProfile/EmploymentReferences (level 2)</td>
    <td>78</td>
  </tr>
  <tr>
    <td>3.16</td>
    <td>/CandidateProfile/Certifications (level 2)</td>
    <td>81</td>
  </tr>
  <tr>
    <td>3.17</td>
    <td>/CandidateProfile/CandidateEmployerPreferences (level 2)</td>
    <td>87</td>
  </tr>
  <tr>
    <td>3.18</td>
    <td>/CandidateProfile/CandidatePositionPreferences (level 2)</td>
    <td>89</td>
  </tr>
  <tr>
    <td>3.19</td>
    <td>/CandidateProfile/Licenses (level 2)</td>
    <td>101</td>
  </tr>
  <tr>
    <td>3.20</td>
    <td>/CandidateProfile/MilitaryHistory (level 2)</td>
    <td>104</td>
  </tr>
  <tr>
    <td>3.21</td>
    <td>/CandidateProfile/PatentHistory (level 2)</td>
    <td>108</td>
  </tr>
  <tr>
    <td>3.22</td>
    <td>/CandidateProfile/PublicationHistory (level 2)</td>
    <td>112</td>
  </tr>
  <tr>
    <td>3.23</td>
    <td>/CandidateProfile/OrganizationAffiliations (level 2)</td>
    <td>116</td>
  </tr>
  <tr>
    <td>3.24</td>
    <td>/CandidateProfile/SpeakingHistory (level 2)</td>
    <td>118</td>
  </tr>
  <tr>
    <td>3.25</td>
    <td>/CandidateProfile/Attachment (level 2)</td>
    <td>120</td>
  </tr>
  <tr>
    <td>3.26</td>
    <td>/CandidateProfile/HobbiesAndInterests</td>
    <td>123</td>
  </tr>
</table>

DG EMPL 2020 &lt;page_number&gt;Page 3 of 160&lt;/page_number&gt;

---


## Page 4

<table>
  <tr>
    <td>3.27</td>
    <td>/CandidateProfile/CreativeWorks</td>
    <td>123</td>
  </tr>
  <tr>
    <td>3.28</td>
    <td>/CandidateProfile/Projects</td>
    <td>124</td>
  </tr>
  <tr>
    <td>3.29</td>
    <td>/CandidateProfile/CommunicationAndInterpersonalSkills</td>
    <td>124</td>
  </tr>
  <tr>
    <td>3.30</td>
    <td>/CandidateProfile/ManagementAndLeadershipSkills</td>
    <td>125</td>
  </tr>
  <tr>
    <td>3.31</td>
    <td>/CandidateProfile/OrganisationalSkills</td>
    <td>125</td>
  </tr>
  <tr>
    <td>3.32</td>
    <td>/CandidateProfile/DigitalSkills</td>
    <td>126</td>
  </tr>
  <tr>
    <td>3.33</td>
    <td>/CandidateProfile/NetworksAndMemberships</td>
    <td>126</td>
  </tr>
  <tr>
    <td>3.34</td>
    <td>/CandidateProfile/ConferencesAndSeminars</td>
    <td>127</td>
  </tr>
  <tr>
    <td>3.35</td>
    <td>/CandidateProfile/SocialAndPoliticalActivities</td>
    <td>127</td>
  </tr>
  <tr>
    <td>3.36</td>
    <td>/CandidateProfile/Others</td>
    <td>128</td>
  </tr>
  <tr>
    <td>3.37</td>
    <td>Common DataType Elements with Attributes</td>
    <td>129</td>
  </tr>
  <tr>
    <td>3.38</td>
    <td>Common Attributes</td>
    <td>134</td>
  </tr>
  <tr>
    <td>3.39</td>
    <td>Code Lists</td>
    <td>137</td>
  </tr>
  <tr>
    <td colspan="2">Annex 1. Treatment of Unfulfilled Business Rules</td>
    <td>156</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 4 of 160&lt;/page_number&gt;

---


## Page 5

# Reference and Applicable Documents

The following contents or documents may be relevant for better understanding the project and the contents of this document.

**REFERENCE DOCUMENTS**

<table>
  <thead>
    <tr>
      <th>Ref.</th>
      <th>Title</th>
      <th>Reference</th>
      <th>Version</th>
      <th>Release</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RD01</td>
      <td>EURES Job Vacancy Data Standard description</td>
      <td>EURES-JV-StandardStaticModel</td>
      <td>1.3.1</td>
      <td>2018</td>
    </tr>
    <tr>
      <td>RD02</td>
      <td>EURES ReferenceData</td>
      <td>EURES-ReferenceData</td>
      <td>1.3.1</td>
      <td>2018</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 5 of 160&lt;/page_number&gt;

---


## Page 6

# Abbreviations and Acronyms

<table>
  <tr>
    <td><b>BR</b></td>
    <td>Business Rule</td>
  </tr>
  <tr>
    <td><b>Card.</b></td>
    <td>Cardinality</td>
  </tr>
  <tr>
    <td><b>CV</b></td>
    <td>Curriculum Vitæ</td>
  </tr>
  <tr>
    <td><b>CVO</b></td>
    <td>CV Online</td>
  </tr>
  <tr>
    <td><b>ECV</b></td>
    <td>Europass CV Schema</td>
  </tr>
  <tr>
    <td><b>EEA</b></td>
    <td>European Economic Area</td>
  </tr>
  <tr>
    <td><b>ES</b></td>
    <td>Employment Services</td>
  </tr>
  <tr>
    <td><b>ESCO</b></td>
    <td>European Skills/Competences, qualifications and Occupations</td>
  </tr>
  <tr>
    <td><b>EURES</b></td>
    <td>EUROpean Employment Services</td>
  </tr>
  <tr>
    <td><b>HR-XML</b></td>
    <td>Human Resources Open Standards</td>
  </tr>
  <tr>
    <td><b>JV</b></td>
    <td>Job Vacancy</td>
  </tr>
  <tr>
    <td><b>N/A</b></td>
    <td>Not Applicable (or Not Available)</td>
  </tr>
  <tr>
    <td><b>OAGi</b></td>
    <td>Open Applications Group</td>
  </tr>
  <tr>
    <td><b>PES</b></td>
    <td>Public Employment Services</td>
  </tr>
  <tr>
    <td><b>PRES</b></td>
    <td>Private Employment Services</td>
  </tr>
  <tr>
    <td><b>XML</b></td>
    <td>eXtended Markup Language</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 6 of 160&lt;/page_number&gt;

---


## Page 7

# 1 Introduction

## 1.1 Document Scope

Europass promotes semantic interoperability by defining a specific vocabulary according to which the information contained in Europass Documents is expressed. This vocabulary is definedaccording to an XML schema, which describes the constraints on the structure and on the contents of Europass Documents.

Individuals, who use the Europass Online Editors to produce their Europass Curriculum Vitae or Europass Language Passport, have the option to receive the document in Europass XML format or PDF format with the XML attached. The most important benefit of this option is that it allows individuals to reuse their personal data and save time and effort when accessing the Europass online editors at a later point, or other systems (job portals, employment /admission services, etc.) that “understand” the Europass vocabulary.

The scope of this document is to provide a detailed description of the **Europass Curriculum Vitae (ECV)** for the new release of the Europass portal, including its elements, cardinality and necessary business rules.

## 1.2 Intended Audience

The present document is intended to be read by the following teams, among others:

*   The DG EMPL Team;
*   Technical implementors of the new Europass platform;
*   Technical integrator users interested in interoperating with the Europass Platform;

## 1.3 Document Structure

This document is structured in a comprehensible way, in order to facilitate implementation of the new CV standards defined. It includes:

*   **Background:** Information on design of technical solution (**Design Approach**) and lists the various imported and included XML schema and explain the purpose each schema serves (**Namespaces**)
*   **Europass XML Document elements; their structure and data types:** The main body of the document provides an in-depth description of each possible element of a Europass XML document.
*   **Code Lists:** tables containing codes or values representing concepts that have been agreed amongst several parties as having the same meaning for all.

DG EMPL 2020
&lt;page_number&gt;Page 7 of 160&lt;/page_number&gt;

---


## Page 8

# 2 Background

The Europass CV model is based on the HR-Open Standards and EURES specifications.

## 2.1 Design Approach

The **tec**nical solution is designed to take advantage of the information contained in the ECV.

The approach was to:

*   Reuse existing interoperability solutions.
*   Reuse an existing business language.
*   Select an international standard (HR-Open)
*   Extend already existing EURES schema.
*   Have an open and royalty-free standard.

The standards adopted are **HR-Open Standards** and **EURES**, as:

*   HR-Open Standards is an open and free international standard.
*   HR-Open Standards is not a merely generic business language.
*   HR-Open Standards covers a large part of the Europass business domain.
*   HR-Open Standards is already being used by EURES.

DG EMPL 2020
&lt;page_number&gt;Page 8 of 160&lt;/page_number&gt;

---


## Page 9

2.2 Namespaces

The overall namespace approach of the schemas is as follows (Figure 1).

Europass namespace
Europass

Eures namespace
EURES

http://www.hr-xml.org/3
HR-Open

http://www.openapplications.org/oagis/9
OAGi

Elements
Attributes
DataTypes

Elements
Attributes
DataTypes

Elements
Attributes
DataTypes

Elements
Attributes
DataTypes

Figure 1: Namespaces used in Europass2

Europass CV builds further on the EURES schema by adding own elements and constraining or extending further the elements and attributes of the EURES schema.

Moreover, the EURES schema is largely based on the adaptation of HR-Open schemata. While the EURES xsd itself is an edited version of the HR-Open xsd, we did find it cleaner to explicitly indicate and assign the EURES made modifications to an own namespace, so it becomes clear what is properties are taken from HR-Open and what is EURES specific.

Figure 1 shows the overall picture where:

*   Europass XSD imports the namespaced version of the EURES XSD,
*   EURES XSD imports the official HR-Open XSD
*   HR-Open¹ XSD is reusing OAGI² elements, attributes and datatypes.

---
¹ https://hropenstandards.org/
² The Open Applications Group (OAGi) is a not-for-profit open standards development organization.
https://oagi.org/AboutOAGi/tabid/84/Default.aspx

DG EMPL 2020
&lt;page_number&gt;Page 9 of 160&lt;/page_number&gt;

---


## Page 10

The table below shows the namespaces used by the ECV.

<table>
<thead>
<tr>
<th>Application</th>
<th>Namespace</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td>Europass</td>
<td>http://www.europass.eu/1.0</td>
<td>Main Europass namespace</td>
</tr>
<tr>
<td>EURES</td>
<td>http://www.europass_eures.eu/1.0</td>
<td></td>
</tr>
<tr>
<td>HR-Open</td>
<td>http://www.hr-xml.org/3</td>
<td></td>
</tr>
<tr>
<td>OAGIS</td>
<td>http://www.openapplications.org/oagis/9</td>
<td></td>
</tr>
</tbody>
</table>

*Table 1: Namespaces used in by the ECV*

**2.2.1 XSD structure per namespace**

Every namespace follows the structure as used by HR-Open.

The main entry xsd’s (e.g. Candidate.xsd) is in the Nouns folder, which define the global structure of the respective documents to be validated.

These main xsd’s **include** the elements, attributes and datatypes from 4 supporting schemas all to be found in the Common folder of the same namespace:

*   Components.xsd
*   Fields.xsd
*   Codelists.xsd
*   Meta.xsd

And **import** the schema artefacts of the other relevant namespaces.

**2.2.2 Structure on the filesystem**

The ECV XSD follows the file and folder structure mirrored from HR-Open:

&lt;img&gt;Screenshot 1: Folder structure of Europass&lt;/img&gt;
Screenshot 1: Folder structure of Europass

&lt;img&gt;Screenshot 2 Folder structure of HR-Open&lt;/img&gt;
Screenshot 2 Folder structure of HR-Open

The figure above indicates the folder name and namespaces used by the applications. The XSD to be used for Europass validation is Candidate.xsd within org_europass/1.0/Developer/Nouns. All other xsd’s are automatically imported and included from there.

DG EMPL 2020
&lt;page_number&gt;Page 10 of 160&lt;/page_number&gt;

---


## Page 11

Table 2: Namespaces and folders that contains the XSDs

<table>
<thead>
<tr>
<th>Application</th>
<th>Namespace</th>
<th>Folder</th>
</tr>
</thead>
<tbody>
<tr>
<td>Europass</td>
<td>http://www.europass.eu/1.0</td>
<td>org_europass</td>
</tr>
<tr>
<td>EURES (eures)</td>
<td>http://www.europass_eures.eu/1.0</td>
<td>org_eures_europass</td>
</tr>
<tr>
<td>HR-Open (hr)</td>
<td>http://www.hr-xml.org/3</td>
<td>org_hr-xml</td>
</tr>
<tr>
<td>OAGIS (oa)</td>
<td>http://www.openapplications.org/oagis/9</td>
<td>org_openapplications_platform</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 11 of 160&lt;/page_number&gt;

---


## Page 12

# 3 Europass XML Document elements, their structure and datatypes

The Europass schema uses the following namespace definitions:

*   `xmlns="http://www.europass.eu/1.0"`
*   `xmlns:hr=http://www.hr-xml.org/3`
*   `xmlns:oa="http://www.openapplications.org/oagis/9"`
*   `xmlns:xsi=http://www.w3.org/2001/XMLSchema-instance`
*   `xmlns:eures="http://www.europass_eures.eu/1.0"`

## 3.1 /Candidate (level 0)

Candidate is the root element of Europass2 XML document. This element defines a candidate, i.e. jobseeker or Job changer’s CV that is exchanged between an Employment Services (ES) and Interoperability Platform and that is to be matched with open Job Vacancies.

### 3.1.1 Candidate Element Description

<mermaid>
graph TD
    subgraph Candidate
        direction LR
        A[CandidateType] --> B[Attributes]
        B --> C[eures:DocumentIDGroup]
        C --> D[hr:DocumentID]
        C --> E[hr:AlternateDocumentID]
        C --> F[eures:ProcessingInformation]
        C --> G[CandidateSupplier]
        C --> H[hr:PositionSeekingStatusCode]
        C --> I[CandidatePerson]
        C --> J[CandidateProfile]
    end

    subgraph Attributes
        direction LR
        B --> B1[Attributes]
    end

    subgraph eures:DocumentIDGroup
        direction LR
        C --> C1[eures:DocumentIDGroup]
        C1 --> C2[Document Identification Group. Details Provides the Identifier(s) of the document being communicated. Uniquely...]
    end

    subgraph hr:DocumentID
        direction LR
        D --> D1[hr:DocumentID]
        D1 --> D2[Document Identification. Identifier The DocumentID serves as an identifier of an entity corresponding to the noun. The...]
    end

    subgraph hr:AlternateDocumentID
        direction LR
        E --> E1[hr:AlternateDocumentID]
        E1 --> E2[The DocumentID serves as an identifier of an entity corresponding to the noun instance (i.e., the entity being managed...]
    end

    subgraph eures:ProcessingInformation
        direction LR
        F --> F1[eures:ProcessingInformation]
        F1 --> F2[It includes the target system codes that are related to document processing. It is used to carry "visibility" and "data"...]
    end

    subgraph CandidateSupplier
        direction LR
        G --> G1[CandidateSupplier]
        G1 --> G2[It contains information about the supplier of the candidate details.]
    end

    subgraph hr:PositionSeekingStatusCode
        direction LR
        H --> H1[hr:PositionSeekingStatusCode]
        H1 --> H2[A code classifying the candidate's job search posture or disposition. In other words, whether the candidate is actively...]
    end

    subgraph CandidatePerson
        direction LR
        I --> I1[CandidatePerson]
        I1 --> I2[It contains personal details of the person seeking a job, such as his/her name, age, gender, and so on.]
    end

    subgraph CandidateProfile
        direction LR
        J --> J1[CandidateProfile]
        J1 --> J2[It contains structured information about a candidate.]
    end

    subgraph Candidate
        direction LR
        Candidate --> CandidateType
        Candidate --> Attributes
        Candidate --> eures:DocumentIDGroup
        Candidate --> hr:DocumentID
        Candidate --> hr:AlternateDocumentID
        Candidate --> eures:ProcessingInformation
        Candidate --> CandidateSupplier
        Candidate --> hr:PositionSeekingStatusCode
        Candidate --> CandidatePerson
        Candidate --> CandidateProfile
    end
</mermaid>

<footer>DG EMPL 2020</footer>&lt;page_number&gt;Page 12 of 160&lt;/page_number&gt;

---


## Page 13

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Candidate</strong></td>
      <td>The root element containing the definition of a candidate, i.e. jobseeker or Job changer’s CV that is exchanged between an ES and Interoperability Platform and that is to be matched with open Job Vacancies.<br><br>Only one candidate element is allowed.</td>
      <td>1</td>
      <td>BR-CV-02: Only One Candidate (CV) per XML document instance is allowed.</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><strong>Sub-elements</strong></td>
    </tr>
    <tr>
      <td><strong>DocumentID</strong></td>
      <td>Original document identifier (id within document supplier system). Provided by first sender of the document! ID issued by first publishing system. (Originator).</td>
      <td>1</td>
      <td>BR-COM-4: The Document ID identifier must be a UUID and it must be provided by the first sender of the document.<br><br>schemeVersionID attribute should use of ECV09-VersionCodes list.</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>AlternateDocumentID</strong></td>
      <td>Alternate/Additional document identifier (e.g. id within eures information system). (Republishers)<br><br>Additional identifiers for this document. If EURES has to exchange this document with third parties, a EURES alternate ID (only an identifier within the EURES information system) is added. This construct is designed to allow for these different identifications.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>ProcessingInformation</strong></td>
      <td>Includes the target system codes that are related to document processing.<br><br>In EURES, this element is used to carry “visibility” and “data protection” instructions to the Interoperability Portal.<br><br>See the description of this element for more details.</td>
      <td>0..1</td>
      <td><strong>Information:</strong> If the /Candidate /Processing Information element is not present in a Candidate’s XML document instance, no visibility restrictions concerning this CV will be applied (i.e., all fields will be visible)</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

See section /ProcessingInformation for more information.

DG EMPL 2020
&lt;page_number&gt;Page 13 of 160&lt;/page_number&gt;

---


## Page 14

html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>CandidateSupplier</strong></td>
      <td>Information about the supplier of the candidate details. This can be the candidate him/herself through the EURES Portal, or a third party (a PES, for instance).</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">See section /CandidateSupplier for more information.</td>
    </tr>
    <tr>
      <td><strong>PositionSeekingStatus</strong></td>
      <td>A code classifying the candidate's job search pattern or disposition. (e.g. "Active", "Passive", "NotConsideringPositions").</td>
      <td>0..1</td>
      <td>BR-CV-4: The "PositionSeekingCodeContentType" HR-Open Standards Code List must be used to codify the /Candidate /Position Seeking Status.</td>
      <td>"Active", "Passive", "NotConsideringPositions"<br><br>HR-Open:<br>PositionSeekingStatusEnumType<br>[CL39]</td>
    </tr>
    <tr>
      <td><strong>CandidatePerson</strong></td>
      <td>Personal details of the person seeking a job, such as his/her name, age, gender, and so on.</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">See section /CandidatePerson for more information.</td>
    </tr>
    <tr>
      <td><strong>CandidateProfile</strong></td>
      <td>The candidate's structured set of characteristics, such as his/her Qualifications, Work Experience, and so on.<br><br>More than one profile is allowed in order to provide the information in different languages. Thus the need for cardinality 1..n.<br><br>It is the responsibility of the person who builds up the CV to make sure that a profile is expressed in the same language and those different profile language versions contain exactly the same information.</td>
      <td>1..n</td>
      <td>BR-COM-01: If not otherwise specified, "English" is used as the default language.<br><br>BR-COM-02: Multiple profiles are allowed, but it must be expressed in different languages.</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">See section /CandidateProfile for more information.</td>
    </tr>
  </tbody>
</table>
```

DG EMPL 2020
&lt;page_number&gt;Page 14 of 160&lt;/page_number&gt;

---


## Page 15

*Error processing this page: cannot access local variable 'e' where it is not associated with a value*


## Page 16

<table>
  <tr>
    <td>listName</td>
    <td>The code list name</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>listVersionID</td>
    <td>The code list identification</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>name</td>
    <td>The text equivalent of the code content component</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>listURI</td>
    <td>The Uniform Resource Identifier that identifies where the code list is located.</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td>The Uniform Resource Identifier that identifies where the code list scheme is located.</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
</table>

DocumentID attributes

<table>
  <tr>
    <td>Attributes</td>
    <td>Description</td>
    <td>Card.</td>
    <td>Rule</td>
  </tr>
  <tr>
    <td colspan="4">Refer to IdentifierType Attributes for additional attributes.</td>
  </tr>
</table>

AlternateDocumentID attributes

<table>
  <tr>
    <td>Attributes</td>
    <td>Description</td>
    <td>Card.</td>
    <td>Rule</td>
  </tr>
  <tr>
    <td colspan="4">It is the same as the “DocumentID” attributes.</td>
  </tr>
</table>

3.2 /Processing Information (level 1)

3.2.1 Processing Information Element Description

<mermaid>
graph TD
    subgraph ProcessingInformationType
        A(eures:ProcessingInformation)
        B(ProcessingInstructionCode)
        C(oa:StringType)
    end
    D((It includes the target system codes that are related to document processing. It is used to carry "visibility" and "data...))
    E((Includes codes relevant to a target system (such as a resume parser or transformation engine) related to the processing...))
    F((Contains information relating to the processing of a document, such as a resume to be parsed.))

    A --> D
    B --> E
    C --> F
</mermaid>

<table>
  <tr>
    <td>Element</td>
    <td>Description</td>
    <td>Cardinality</td>
    <td>Rule</td>
    <td>Examples</td>
  </tr>
  <tr>
    <td>Processing Information</td>
    <td>Includes codes relevant to a target system related to document processing.<br><br>In EURES, this element is used to provide "visibility" and "data</td>
    <td>0..1</td>
    <td>If the /Candidate /Processing Information element is not present in a Candidate's XML document instance, no visibility restrictions concerning this CV will be applied (i.e., all fields will be visible)</td>
    <td>N/A</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 16 of 160&lt;/page_number&gt;

---


## Page 17

protection” instructions to the Interoperability Portal.

See the description of this element for more details.

<table>
  <thead>
    <tr>
      <th colspan="4">Sub-elements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Processing Instructions</td>
      <td>Codes relevant to a target system (such as a resume parser or transformation engine) related to document processing. The Interoperability Portal uses this element to hide certain CV data, such as the Candidate’s name, phone number, etc., and to define which the data protection information is. (e.g. hideCandidateName)</td>
      <td>0..n</td>
      <td>Information<br>If the /Candidate /Processing Information element is not present in a Candidate’s XML document instance, no visibility restrictions concerning this CV will be applied (i.e., all fields will be visible)<br><br>BR-CV-32: The Xpath must be valid</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">A hidden element cannot be searched on the platform.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 17 of 160&lt;/page_number&gt;

---


## Page 18

3.3 /CandidateSupplier (level 1)

3.3.1 CandidateSupplier Element Description

<mermaid>
graph TD
    subgraph CandidateSupplierType
        A[CandidateSupplier]
        B[hr:PartyID]
        C[hr:PartyName]
        D[PersonContact]
        E[hr:CandidateSourceCode]
        F[hr:PrecedenceCode]

        A -- "It contains information about the supplier of the candidate details." --> A
        B -- "It contains identifier of registered partner system. The id is provided once registered by the Interoperability..." --> B
        C -- "The name of the candidate supplier. For example, the name of the job board. The name of the employee who made the..." --> C
        D -- "A detailed set of data about one or more people who should be contacted in order to communicate with the candidate's..." --> D
        E -- "A code classifying the source that supplied the candidate ("JobBoard", "StaffingAgency", "Intermediary", "Referrer")." --> E
        F -- "To distinguish the primary or first source in cases where the same candidate was supplied by several sources. May be..." --> F

        A --- B
        A --- C
        A -- "1..∞" --> D
        A --- E
        A --- F
    end
</mermaid>

Information about the supplier of the candidate details.

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CandidateSupplier</strong></td>
<td>Information about the supplier of the candidate details. This can be the candidate through the EURES Portal, or a third party (a EURES network member, for example).</td>
<td>1..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>PartyID</strong></td>
<td>Identifier of registered EURES Partner system. The id is provided once registered by the Interoperability platform ("SUP-34833")</td>
<td>1</td>
<td><strong>Information</strong><br>The /Candidate /SupplierID must be an UUID provided by the sender system</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>PartyName</strong></td>
<td>The name of the company supplying the cv.</td>
<td>1</td>
<td>N/A</td>
<td>"Randstad", "Temp Jobs"</td>
</tr>
<tr>
<td><strong>PersonContact</strong></td>
<td>A detailed set of data about one or more people who should be contacted in order to communicate with the candidate's supplier.</td>
<td>1..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 18 of 160&lt;/page_number&gt;

---


## Page 19

See section CandidateSupplier/PersonContact for more information

<table>
  <tr>
    <td><strong>CandidateSourceCode</strong></td>
    <td>A code classifying the source that supplied the candidate ( "JobBoard", "StaffingAgency", "Intermediary", "Referrer")</td>
    <td>0..1</td>
    <td><strong>BR-CV-07:</strong> The HR-Open Standards Code List "CandidateSourceCodeType" must be used to codify the /Candidate /Supplier /Source.</td>
    <td>HR-Open/EURES: CandidateSourceCodeType [CL04]</td>
  </tr>
  <tr>
    <td></td>
    <td>This is an HR-Open Standards open list.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><strong>PrecedenceCode</strong></td>
    <td>As more than one supplier can be provided, this set of enumerations indicates the identifiers' order of arrival.</td>
    <td>1</td>
    <td><strong>BR-CV-08:</strong> The HR-Open Standards Code List "PrecedenceEnumType" must be used to codify the /Candidate /Supplier /Precedence.</td>
    <td>HR-Open/EURES: PrecedenceEnumType [CL41]</td>
  </tr>
  <tr>
    <td></td>
    <td>This is an HR-Open Standards open list.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

3.3.2 CandidateSupplier Attributes

<mermaid>
graph TD
    subgraph CandidateSupplierType
        A[Attributes]
        B(hr:EffectiveDateAttributeGroup)
        C(@ validFrom)
        D(@ validTo)
        E[HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...]
        F[Information about the supplier of the candidate details.]

        A --> B
        B --> C
        B --> D
        C -- "Card." --> |0..1| C
        D -- "Card." --> |0..1| D
        style A fill:#fff,stroke:#333,stroke-width:2px
        style B fill:#fff,stroke:#333,stroke-width:2px
        style C fill:#fff,stroke:#333,stroke-width:2px
        style D fill:#fff,stroke:#333,stroke-width:2px
        style E fill:#fff,stroke:#333,stroke-width:2px
        style F fill:#fff,stroke:#333,stroke-width:2px
    end
    CandidateSupplier -- "It contains information about the supplier of the candidate details." --> A
</mermaid>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>validFrom</strong></td>
      <td>Validity start date for this Supplier</td>
      <td>0..1</td>
      <td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td><strong>validTo</strong></td>
      <td>Validity end date for this Supplier</td>
      <td>0..1</td>
      <td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**PartyID attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <!-- No specific attributes listed under PartyID -->
  </tbody>
</table>

**PartyName attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>languageID</strong></td>
      <td>The language in which the name of the Party is mentioned.</td>
      <td>0..1</td>
      <td></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 19 of 160&lt;/page_number&gt;

---


## Page 20

mermaid
erDiagram
    PersonContact ||--o{ Communication : "Method of communication of the related entity."
    PersonContact {
      @attributes
      PersonName : "It contains name of the supplier contact person."
      Communication : "A detailed set of data about one or more people who should be contacted in order to communicate with the candidate's..."
    }
```

<table>
  <thead>
    <tr>
      <th colspan="4">PersonContact attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateSupplier/PersonContact Attributes for more information</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">CandidateSourceCode attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">PrecedenceCode attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">PrecedenceCode has no attributes.</td>
    </tr>
  </tbody>
</table>

3.4 /CandidateSupplier/PersonContact (level 2)

3.4.1 PersonContact Element Description

&lt;img&gt;A diagram showing the PersonContact element with its sub-elements: PersonContactType, Attributes, PersonName, and Communication.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PersonContact</td>
      <td>A detailed set of data about one or more people who should be contacted in order to communicate with the supplier of the candidate</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PersonName</td>
      <td>Name of the contact of the supplier<br>See section /CandidateSupplier/PersonContact/PersonName for more information</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Communication</td>
      <td>A detailed set of data about communication data of the supplier contact person<br>See section /CandidateSupplier/PersonContact/Communication for more information</td>
      <td>1..n</td>
      <td>BR-COM-10: If the Communication element is filled in, at least one of its sub elements should be filled in too.</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.4.2 PersonContact Attributes

&lt;img&gt;A diagram showing the PersonContact element with its sub-element: PersonContactType, which includes Attributes and contactTypeCode.&lt;/img&gt;

<footer>DG EMPL 2020</footer>&lt;page_number&gt;Page 20 of 160&lt;/page_number&gt;

---


## Page 21

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>contactTypeCode</td>
      <td>The person's type of contact, such as "CompanyManager" or "WorkplaceContact"<br>This is a free text element.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

**PersonName attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateSupplier/PersonContact/PersonName for more information</td>
    </tr>
  </tbody>
</table>

**Communication attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateSupplier/PersonContact/Communication for more information</td>
    </tr>
  </tbody>
</table>

3.4.3 Sub-element: /CandidateSupplier/PersonContact/PersonName (level 3)

3.4.3.1 PersonName Element Description

&lt;img&gt;UML Diagram showing PersonNameType, PersonNameBaseType (extension base), FormattedName, LegalName, GivenName, FamilyName, Attributes, and their descriptions.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PersonName</td>
      <td>Name of the contact of the supplier</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>FormattedName</td>
      <td>This is a formatted presentation of a name (for example, a Person Name) that might alternatively be presented as discretely fielded components, or it could be a name with alternative formatted representations.<br>The formatCode is an optional available attribute for specifying the applicable "mask" or type of format presentation to which the content conforms.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Paula Cook", "James Black", etc.</td>
    </tr>
    <tr>
      <td>LegalName</td>
      <td>The name that an individual is given at birth and/or is recognised by a government or other legal entity, or that appears on a birth certificate</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Paula Cook", "James Black", etc.</td>
    </tr>
    <tr>
      <td>GivenName</td>
      <td>A people given name or first name.</td>
      <td>1</td>
      <td>N/A</td>
      <td>"Mark", "Silvia", etc.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 21 of 160&lt;/page_number&gt;

---


## Page 22

mermaid
erDiagram
    PersonNameType ||--o{ PersonName : "It contains name of the supplier contact person."
    PersonNameType {
      @ Attributes
      @ scriptCode
      It contains type of alphabet that the name is written with such as "Roman", "Kenji", etc.
      @ hr:EffectiveDateAttributeGroup
      @ validFrom
      @ validTo
      HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...
      @ nameTypeCode
      A code classifying the type of name, such as "CurrentName" or "FormerName".
      @ legalNameIndicator
      Indicates whether or not the PersonName represents a "legal" or "official" name. Note that in some business contexts, a...
    }
```

3.4.3.2 *PersonName Attributes*

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>scriptCode</td>
<td>Type of alphabet that the name is written with such as “Roman”, “Kenji”, etc.</td>
<td>0..1</td>
<td>N/A</td>
</tr>
<tr>
<td>nameTypeCode</td>
<td>A code classifying the type of name, such as “CurrentName” or “FormerName” (full code list “4.28.21 Name Enum-Type Codes [CL32]”)<br><br>This is an HR-Open Standards open list.</td>
<td>0..1</td>
<td>BR-COM-09: Compulsory use of the Name Enum Type Codes [CL32].</td>
</tr>
<tr>
<td>legalNameIndicator</td>
<td>Boolean indicating if it is the legal name or not</td>
<td>0..1</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 22 of 160&lt;/page_number&gt;

---


## Page 23

<table>
  <tr>
    <td><b>validFrom</b></td>
    <td>Validity start date for this Person Name</td>
    <td>0..1</td>
    <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
  </tr>
  <tr>
    <td><b>validTo</b></td>
    <td>Validity end date for this Person Name</td>
    <td>0..1</td>
    <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
  </tr>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4"><b>LegalName attributes</b></th>
    </tr>
    <tr>
      <th><b>Attributes</b></th>
      <th><b>Description</b></th>
      <th><b>Card.</b></th>
      <th><b>Rule</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>formatCode</b></td>
      <td>Type of format shown</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>languageID</b></td>
      <td>Language in which the LegalName is mentioned</td>
      <td>0..1</td>
      <td>"en"</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4"><b>FormattedName attributes</b></th>
    </tr>
    <tr>
      <th><b>Attributes</b></th>
      <th><b>Description</b></th>
      <th><b>Card.</b></th>
      <th><b>Rule</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The same as the "LegalName" attributes</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4"><b>GivenName attributes</b></th>
    </tr>
    <tr>
      <th><b>Attributes</b></th>
      <th><b>Description</b></th>
      <th><b>Card.</b></th>
      <th><b>Rule</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to NameType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4"><b>FamilyName sub-element</b></th>
    </tr>
    <tr>
      <th><b>Attributes</b></th>
      <th><b>Description</b></th>
      <th><b>Card.</b></th>
      <th><b>Rule</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>primaryIndicator</b></td>
      <td>Boolean indicating that it is a single name</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>sequence</b></td>
      <td>Establishes the name order as an integer</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>prefix</b></td>
      <td>A family name's prefix</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>languageID</b></td>
      <td>Language in which the LegalName is mentioned</td>
      <td>0..1</td>
      <td>"en"</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 23 of 160&lt;/page_number&gt;

---


## Page 24

3.4.4 Sub-element: /CandidateSupplier/PersonContact/Communication (level 3)

3.4.4.1 Communication Element Description

<mermaid>
graph TD
    A[CommunicationABlEType] --> B[Attributes]
    B --> C[ChannelCode]
    B --> D[UseCode]
    B --> E[OtherTitle]
    C --> F[ChannelCodeDesc]
    D --> G[UseCodeDesc]
    E --> H[OtherTitleDesc]
    C --> I[CountryDialing]
    C --> J[AreaDialing]
    C --> K[DialNumber]
    C --> L[CountryCode]
    C --> M[Address]
    C --> N[URI]
    I --> O[CountryDialingDesc]
    J --> P[AreaDialingDesc]
    K --> Q[DialNumberDesc]
    L --> R[CountryCodeDesc]
    M --> S[AddressDesc]
    N --> T[URIDesc]

    subgraph CommunicationABlEType
        A
    end

    subgraph Attributes
        B
    end

    subgraph ChannelCode
        C
    end

    subgraph ChannelCodeDesc
        ChannelCodeDesc[The communication channel used to contact a person or an organization. (e.g. "Telephone", "MobileTelephone", "Fax",...)]
    end

    subgraph UseCode
        D
    end

    subgraph UseCodeDesc
        UseCodeDesc[The type of use given to the communication channel used to contact a person or an organization. (e.g."Personal"...)]
    end

    subgraph OtherTitle
        E
    end

    subgraph OtherTitleDesc
        OtherTitleDesc[It specifies the title of ChannelCode or UseCode when Other is chosen.]
    end

    subgraph CountryDialing
        I
    end

    subgraph AreaDialing
        J
    end

    subgraph DialNumber
        K
    end

    subgraph DialNumberDesc
        DialNumberDesc[The communication number, not including country dialing or area dialing codes.]
    end

    subgraph CountryCode
        L
    end

    subgraph Address
        M
    end

    subgraph AddressDesc
        AddressDesc[Properties which specify the physical location of an entity.]
    end

    subgraph URI
        N
    end

    subgraph URIDesc
        URIDesc[Uniform Resource Identifier Reference (URI). A URI value can be absolute or relative, and may have an optional fragment..]
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#f9f,stroke:#333,stroke-width:2px
    style E fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
    style I fill:#fff,stroke:#333,stroke-width:2px
    style J fill:#fff,stroke:#333,stroke-width:2px
    style K fill:#fff,stroke:#333,stroke-width:2px
    style L fill:#fff,stroke:#333,stroke-width:2px
    style M fill:#fff,stroke:#333,stroke-width:2px
    style N fill:#fff,stroke:#333,stroke-width:2px
    style O fill:#fff,stroke:#333,stroke-width:2px
    style P fill:#fff,stroke:#333,stroke-width:2px
    style Q fill:#fff,stroke:#333,stroke-width:2px
    style R fill:#fff,stroke:#333,stroke-width:2px
    style S fill:#fff,stroke:#333,stroke-width:2px
    style T fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

This flexibly allows capture of information about a variety of communication channels (telephone, email, fax,...

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Communication</strong></td>
<td>A person's contact information:<br>ChannelCode,<br>Address, URI –for email, for instance—,<br>etc.</td>
<td>1..n</td>
<td><strong>BR-COM-10:</strong> If the Communication element is filled in, at least one of its sub elements should be filled in too.</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>ChannelCode</strong></td>
<td>The communication channel used to contact a person or an organization. (e.", "MobileTelephone", "Fax", "Email", "InstantMessage", "Web")</td>
<td>0..1</td>
<td><strong>ECV05:</strong> ChannelCodeContentType must be used to codify the /ChannelCode element.<br><br><strong>BR-CV-31:</strong> If URI element is provided, ChannelCode element must contain either "Email" or "Web".<br><br>For Email: Maximum number of 99 characters, allow adding more than one email address [1-n].</td>
<td>Europass2: ChannelCodeContentType [ECV04]</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 24 of 160&lt;/page_number&gt;

---


## Page 25

<table>
  <tr>
    <td><b>UseCode</b></td>
    <td>The type of use given to the communication channel used to contact a person or an organization.<br>(e.g.“Personal”, “Business”).</td>
    <td>0..1</td>
    <td><b>ECV04:</b><br>ContactUseCodeContentTypemust be used to codify the /UseCode element.</td>
    <td>Europass2:<br>ContactUseCodeContentType<br>[ECV03]</td>
  </tr>
  <tr>
    <td><b>OtherTitle</b></td>
    <td>It specifies the tile of ChannelCode or UseCode when Other is chosen.</td>
    <td>0..n</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td><b>CommunicationChoice</b></td>
    <td><b>Selection between the types of communication channels.</b><br>See section /CandidateSupplier/PersonContact/Communication/CommunicationChoice for more information</td>
    <td>N/A</td>
    <td><b>BR-CV-30:</b> At least one of the following sub-elements (either Address or URI or DialNumber) must be provided.</td>
    <td>N/A</td>
  </tr>
</table>

## 3.4.4.2 Communication Attributes

&lt;img&gt;Diagram showing "Communication" with attributes "sequence", "preferredIndicator", "validFrom", "validTo". It also shows "hr:EffectiveDateAttributeGroup" with "validFrom" and "validTo". A note says "HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...". Another note says "This flexibly allows capture of information about a variety of communication channels (telephone, email, fax,...".&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>sequence</b></td>
      <td>Establishes the order of the contact data</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>preferredIndicator</b></td>
      <td>Boolean indicating if the current contact data is the preferred one</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>validFrom</b></td>
      <td>Validity start date for this Communication</td>
      <td>0..1</td>
      <td><b>BR-COM-06:</b> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td><b>validTo</b></td>
      <td>Date up to when the communication channel is available</td>
      <td>0..1</td>
      <td><b>BR-COM-06:</b> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

### ChannelCode attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes for additional attributes.</td>
    </tr>
  </tbody>
</table>

### UseCode attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes for additional attributes.</td>
    </tr>
  </tbody>
</table>

### CommunicationChoice attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section CommunicationChoice Attributes for more information</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 25 of 160&lt;/page_number&gt;

---


## Page 26

3.4.5 Sub-element: /CandidateSupplier/PersonContact/Communication/CommunicationChoice (level 4)

3.4.5.1 CommunicationChoice Element Description

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>CommunicationChoice</td>
<td>Selection between the types of channels<br>1-Address<br>2-Telephone<br>3-URL<br>4-Text</td>
<td></td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Choice 1 Elements</strong></td>
</tr>
<tr>
<td>CountryDialling</td>
<td>The country dialling code for a contact number</td>
<td>0..1</td>
<td>PhonePrefix [ECV07] code list must be used.</td>
<td>Europass2: PhonePrefix [ECV07]</td>
</tr>
<tr>
<td>AreaDialling</td>
<td>The area dialling code for a contact number</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>DialNumber</td>
<td>The contact number, not including country dialling or area dialling codes</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>CountryCode</td>
<td>It specifies code identifying the country.</td>
<td>0..1</td>
<td>CountriesAndNationalities [ECV02], AuxCountriesAndNationalities [ECV10] code list must be used.</td>
<td>Europass2: CountriesAndNationalities [ECV02], Europass2: AuxCountriesAndNationalities [ECV10]</td>
</tr>
<tr>
<td colspan="5"><strong>Choice 2 Elements</strong></td>
</tr>
<tr>
<td>Address</td>
<td>Properties specifying an entity's physical location</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5">See section /CandidatePerson/Communication/CommunicationChoice/Address for more information</td>
</tr>
<tr>
<td colspan="5"><strong>Choice 3 Elements</strong></td>
</tr>
<tr>
<td>URI</td>
<td>Uniform Resource Identifier Reference (URI). A URI value can be absolute or relative, and may have an optional fragment identifier (i.e., it may be a URI Reference). This type should be used to specify that the value is to fulfil the role of a URI, as defined by [RFC 2396] and as amended by [RFC 2732].</td>
<td>0..1</td>
<td>N/A</td>
<td>"mymail@test.org", "mymail@noreply.com", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 26 of 160&lt;/page_number&gt;

---


## Page 27

3.4.5.2 CommunicationChoice Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">It has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>CountryDialling attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">Refer to CodeListAttributeGroup for additional attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>AreaDialling attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td>languageID</td>
<td>Language in which the AreaDialling is mentioned</td>
<td>0..1</td>
<td>"en"</td>
</tr>
<tr>
<td colspan="4"><strong>DialNumber attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td>languageID</td>
<td>Language in which the DialNumber is mentioned</td>
<td>0..1</td>
<td>"en"</td>
</tr>
<tr>
<td colspan="4"><strong>CountryCode attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td>validFrom</td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td>validTo</td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes</td>
</tr>
<tr>
<td colspan="4"><strong>Address attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidatePerson/Communication/CommunicationChoice/Address for more information</td>
</tr>
<tr>
<td colspan="4"><strong>URLs attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">It has no attributes.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 27 of 160&lt;/page_number&gt;

---


## Page 28

3.5 /CandidatePerson (level 1)

3.5.1 CandidatePerson Element Description

<mermaid>
graph TD
    subgraph CandidatePersonType
        A[CandidatePerson]
        B[Attributes]
        C[hr:PersonID]
        D[hr:PersonLegalID]
        E[PersonName]
        F[Communication]
        G[ResidencyCountryCode]
        H[NationalityCode]
        I[hr:BirthDate]
        J[GenderCode]
        K[PrimaryLanguageCode]
        L[eures:Disability]
        M[MottoInLife]

        A --> B
        B --> C
        B --> D
        B --> E
        B --> F
        B --> G
        B --> H
        B --> I
        B --> J
        B --> K
        B --> L
        B --> M

        style A fill:#fff,stroke:#333,stroke-width:2px
        style B fill:#fff,stroke:#333,stroke-width:2px
        style C fill:#fff,stroke:#333,stroke-width:2px
        style D fill:#fff,stroke:#333,stroke-width:2px
        style E fill:#fff,stroke:#333,stroke-width:2px
        style F fill:#fff,stroke:#333,stroke-width:2px
        style G fill:#fff,stroke:#333,stroke-width:2px
        style H fill:#fff,stroke:#333,stroke-width:2px
        style I fill:#fff,stroke:#333,stroke-width:2px
        style J fill:#fff,stroke:#333,stroke-width:2px
        style K fill:#fff,stroke:#333,stroke-width:2px
        style L fill:#fff,stroke:#333,stroke-width:2px
        style M fill:#fff,stroke:#333,stroke-width:2px
    end

    A -- "It contains personal details of the person seeking a job, such as his/her name, age, gender, and so on." --> A
    A -- "A collection of demographic and personal data about a candidate -|- a person being considered for, or who has otherwise..." --> A
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>CandidatePerson</td>
<td>Personal details of the person seeking a job, such as the name,</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 28 of 160&lt;/page_number&gt;

---


## Page 29

html
<table>
  <thead>
    <tr>
      <th></th>
      <th>age, gender, and so on.</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td><b>PersonID</b></td>
      <td>Systemic identifiers only for this person “Usually fed by the document sender, the recipient also may (and usually does) add his/her own ID, in order to build complex transaction paths”.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>PersonLegalID</b></td>
      <td>An identifier issued to a person by a governmental organisation, like a social security or driver’s license number.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>PersonName</b></td>
      <td>A detailed set of data about the candidate’s names, such as his/her GivenName, FamilyName, MiddleName, Former Family Name, etc.</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidatePerson/PersonName for more information</td>
    </tr>
    <tr>
      <td><b>Communication</b></td>
      <td>The candidate’s contact information. ChannelCode, Address, URI –for email, for instance—, etc.</td>
      <td>0..n</td>
      <td>BR-COM-10: If the Communication element is filled in, at least one of its sub elements should be filled in too.<br><br>See section /CandidatePerson/Communication for more information</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>ResidencyCountryCode</b></td>
      <td>Code specifying the country where the Candidate usually lives</td>
      <td>0..1</td>
      <td>CountriesAndNationalities [ECV02], AuxCountriesAndNationalities [ECV10] code list must be used.</td>
      <td>Europass2:<br>CountriesAndNationalities [ECV02],<br>Europass2:<br>AuxCountriesAndNationalities [ECV10]</td>
    </tr>
    <tr>
      <td><b>NationalityCode</b></td>
      <td>Code specifying the candidate’s nationality</td>
      <td>0..n</td>
      <td>CountriesAndNationalities [ECV02], AuxCountriesAndNationalities [ECV10] code list must be used.<br><br>BR-COM-43: Multiple entries of this code list are allowed.</td>
      <td>Europass2:<br>CountriesAndNationalities [ECV02],<br>Europass2:<br>AuxCountriesAndNationalities [ECV10]</td>
    </tr>
    <tr>
      <td><b>BirthDate</b></td>
      <td>The person’s date of birth</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
      <td>1987-08-05</td>
    </tr>
    <tr>
      <td><b>GenderCode</b></td>
      <td>Code indicating the candidate’s gender (“NotKnown”,</td>
      <td>0..1</td>
      <td>Compulsory use of ECV01-GenderType lists.</td>
      <td>Europass2: GenderType [ECV01]</td>
    </tr>
  </tbody>
</table>
```
DG EMPL 2020
&lt;page_number&gt;Page 29 of 160&lt;/page_number&gt;

---


## Page 30

<table>
  <tr>
    <td></td>
    <td>“Male”, “Female”, “NotSpecified”)</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><strong>PrimaryLanguageCode</strong></td>
    <td>The candidate’s primary or preferred language or languages</td>
    <td>0..n</td>
    <td><strong>ECV08:</strong> Languages<br><strong>BR-COM-43:</strong> Multiple entries of this code list are allowed.</td>
    <td>Europass2: Languages [ECV06]</td>
  </tr>
  <tr>
    <td><strong>Disability</strong></td>
    <td>Describes a disability associated with a specific person.</td>
    <td>0..n</td>
    <td>The absence of a Disability element for a candidate will mean “No disabilities”.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td colspan="5">See section /CandidatePerson/Disability for more information</td>
  </tr>
  <tr>
    <td><strong>MottoInLife</strong></td>
    <td>Aims to capture, in a short sentence, a personal belief, a saying or a purpose (e.g. “Keep calm, take photos”)</td>
    <td>0..1</td>
    <td>limited to 99 characters</td>
    <td>“Keep calm, take photos”</td>
  </tr>
</table>

## 3.5.2 CandidatePerson Attributes

<mermaid>
graph TD
    subgraph CandidatePersonType
        A[CandidatePerson]
        B[Attributes]
        C[hr:EffectiveDateAttributeGroup]
        D[@ validFrom]
        E[@ validTo]
        F[HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...]
        G[A collection of demographic and personal data about a candidate -+ a person being considered for, or who has otherwise...]

        A --> B
        A -- "It contains personal details of the person seeking a job, such as his/her name, age, gender, and so on." --> A
        B --> C
        C --> D
        C --> E
        D -- "+" --> D
        E -- "+" --> E
        F --> C
        G --> A
    end
</mermaid>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>validFrom</strong></td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td><strong>BR-COM-05:</strong> If not specified, the “validFrom” date will default to “assigned by EURES on reception”.<br><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td><strong>validTo</strong></td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**PersonID attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes for additional attributes.</td>
    </tr>
  </tbody>
</table>

**PersonLegalID attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes for additional attributes.</td>
    </tr>
  </tbody>
</table>

**PersonName attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"></td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 30 of 160&lt;/page_number&gt;

---


## Page 31

See section /CandidatePerson/PersonName for more information

<table>
<thead>
<tr>
<th colspan="4">Communication attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidatePerson/Communication for more information</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th colspan="4">ResidencyCountryCode attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>validFrom</td>
<td>Validity start date as a resident of the country</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td>validTo</td>
<td>Validity end date as a resident of the country</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

Refer to CodeListAttributeGroup Attributes for additional attributes.

<table>
<thead>
<tr>
<th colspan="4">NationalityCode attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">The same as ResidencyCountryCode attributes</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th colspan="4">BirthDate attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This sub-element has no attributes.</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th colspan="4">GenderCode attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to CodeListAttributeGroup attributes for additional attributes.</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th colspan="4">PrimaryLanguageCode attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>typeCode</td>
<td>It specifies type of the selected language: NORMAL, SIGN, CLASSSIC or FREETEXT.</td>
<td>0..1</td>
<td>The values must be: NORMAL, SIGN, CLASSSIC or FREETEXT.</td>
</tr>
</tbody>
</table>

Refer to CodeListAttributeGroup attributes for additional attributes.

<table>
<thead>
<tr>
<th colspan="4">Disability attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidatePerson/Disability for more information</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th colspan="4">MottoInLife attributes</th>
</tr>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>languageID</td>
<td>The language in which the name of the Party is mentioned.</td>
<td>0..1</td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 31 of 160&lt;/page_number&gt;

---


## Page 32

3.6 /CandidatePerson/PersonName (level 2)

3.6.1 PersonName Element Description

&lt;img&gt;A diagram showing the structure of the PersonName element. It includes:
- PersonNameType
- PersonNameBaseType (extension base)
- FormattedName
- hr:LegalName
- oa:GivenName
- hr:FamilyName
- Attributes
- PersonName (a detailed set of data about the candidate's names, such as his/her GivenName, FamilyName, MiddleName, Former Family...)
- A collection of data representing a person name.&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>PersonName</td>
<td>A detailed set of data about the names of the person’s names, such as his/her GivenName, FamilyName, MiddleName, FormerFamilyName, etc.</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td colspan="5">The same as /CandidateSupplier/PersonContact/PersonName</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 32 of 160&lt;/page_number&gt;

---


## Page 33

3.6.2 PersonName Attributes

<mermaid>
graph TD
    A[PersonName] --> B(PersonNameType)
    B --> C(PersonNameBaseType (extension base))
    C --> D(@ Attributes)
    D --> E(scriptCode)
    E -- "It contains type of alphabet that the name is written with such as \"Roman\", \"Kenji\", etc." --> E
    D --> F(hr:EffectiveDateAttributeGroup)
    F --> G(validFrom)
    F --> H(validTo)
    H -- "HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral..." --> H
    D --> I(nameTypeCode)
    I -- "A code classifying the type of name, such as \"CurrentName\" or \"FormerName\"." --> I
    D --> J(legalNameIndicator)
    J -- "Indicates whether or not the PersonName represents a \"legal\" or \"official\" name. Note that in some business contexts, a..." --> J
    A --- I
    A --- J
    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
    style I fill:#fff,stroke:#333,stroke-width:2px
    style J fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

A detailed set of data about the candidate's names, such as his/her GivenName, FamilyName, MiddleName, Former Family...

A collection of data representing a person name.

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateSupplier/PersonContact/PersonName</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 33 of 160&lt;/page_number&gt;

---


## Page 34

3.7 /CandidatePerson/Communication (level 2)

3.7.1 Communication Element Description

<mermaid>
graph TD
    subgraph Communication ABIElementType
        A[CommunicationABIElementType]
        B[Attributes]
        C[ChannelCode]
        D[UseCode]
        E[CountryDialling]
        F[oa:AreaDialing]
        G[oa:DialNumber]
        H[Address]
        I[oa:URI]

        A --> B
        A --> C
        A --> D
        A --> E
        A --> F
        A --> G
        A --> H
        A --> I

        B --> C
        B --> D
        B --> E
        B --> F
        B --> G
        B --> H
        B --> I

        C --> D
        C --> E
        C --> F
        C --> G
        C --> H
        C --> I

        D --> E
        D --> F
        D --> G
        D --> H
        D --> I

        E --> F
        E --> G
        E --> H
        E --> I

        F --> G
        F --> H
        F --> I

        G --> H
        G --> I

        H --> I
    end

    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
    style I fill:#fff,stroke:#333,stroke-width:2px

    linkStyle 0 stroke-dasharray: 5 5;
    linkStyle 1 stroke-dasharray: 5 5;
    linkStyle 2 stroke-dasharray: 5 5;
    linkStyle 3 stroke-dasharray: 5 5;
    linkStyle 4 stroke-dasharray: 5 5;
    linkStyle 5 stroke-dasharray: 5 5;
    linkStyle 6 stroke-dasharray: 5 5;
    linkStyle 7 stroke-dasharray: 5 5;
    linkStyle 8 stroke-dasharray: 5 5;
    linkStyle 9 stroke-dasharray: 5 5;
    linkStyle 10 stroke-dasharray: 5 5;
    linkStyle 11 stroke-dasharray: 5 5;
    linkStyle 12 stroke-dasharray: 5 5;
    linkStyle 13 stroke-dasharray: 5 5;
    linkStyle 14 stroke-dasharray: 5 5;
    linkStyle 15 stroke-dasharray: 5 5;
    linkStyle 16 stroke-dasharray: 5 5;
    linkStyle 17 stroke-dasharray: 5 5;
    linkStyle 18 stroke-dasharray: 5 5;
    linkStyle 19 stroke-dasharray: 5 5;
    linkStyle 20 stroke-dasharray: 5 5;
    linkStyle 21 stroke-dasharray: 5 5;
    linkStyle 22 stroke-dasharray: 5 5;
    linkStyle 23 stroke-dasharray: 5 5;
    linkStyle 24 stroke-dasharray: 5 5;
    linkStyle 25 stroke-dasharray: 5 5;
    linkStyle 26 stroke-dasharray: 5 5;
    linkStyle 27 stroke-dasharray: 5 5;
    linkStyle 28 stroke-dasharray: 5 5;
    linkStyle 29 stroke-dasharray: 5 5;
    linkStyle 30 stroke-dasharray: 5 5;
    linkStyle 31 stroke-dasharray: 5 5;
    linkStyle 32 stroke-dasharray: 5 5;
    linkStyle 33 stroke-dasharray: 5 5;
    linkStyle 34 stroke-dasharray: 5 5;
    linkStyle 35 stroke-dasharray: 5 5;
    linkStyle 36 stroke-dasharray: 5 5;
    linkStyle 37 stroke-dasharray: 5 5;
    linkStyle 38 stroke-dasharray: 5 5;
    linkStyle 39 stroke-dasharray: 5 5;
    linkStyle 40 stroke-dasharray: 5 5;
    linkStyle 41 stroke-dasharray: 5 5;
    linkStyle 42 stroke-dasharray: 5 5;
    linkStyle 43 stroke-dasharray: 5 5;
    linkStyle 44 stroke-dasharray: 5 5;
    linkStyle 45 stroke-dasharray: 5 5;
    linkStyle 46 stroke-dasharray: 5 5;
    linkStyle 47 stroke-dasharray: 5 5;
    linkStyle 48 stroke-dasharray: 5 5;
    linkStyle 49 stroke-dasharray: 5 5;
    linkStyle 50 stroke-dasharray: 5 5;
    linkStyle 51 stroke-dasharray: 5 5;
    linkStyle 52 stroke-dasharray: 5 5;
    linkStyle 53 stroke-dasharray: 5 5;
    linkStyle 54 stroke-dasharray: 5 5;
    linkStyle 55 stroke-dasharray: 5 5;
    linkStyle 56 stroke-dasharray: 5 5;
    linkStyle 57 stroke-dasharray: 5 5;
    linkStyle 58 stroke-dasharray: 5 5;
    linkStyle 59 stroke-dasharray: 5 5;
    linkStyle 60 stroke-dasharray: 5 5;
    linkStyle 61 stroke-dasharray: 5 5;
    linkStyle 62 stroke-dasharray: 5 5;
    linkStyle 63 stroke-dasharray: 5 5;
    linkStyle 64 stroke-dasharray: 5 5;
    linkStyle 65 stroke-dasharray: 5 5;
    linkStyle 66 stroke-dasharray: 5 5;
    linkStyle 67 stroke-dasharray: 5 5;
    linkStyle 68 stroke-dasharray: 5 5;
    linkStyle 69 stroke-dasharray: 5 5;
    linkStyle 70 stroke-dasharray: 5 5;
    linkStyle 71 stroke-dasharray: 5 5;
    linkStyle 72 stroke-dasharray: 5 5;
    linkStyle 73 stroke-dasharray: 5 5;
    linkStyle 74 stroke-dasharray: 5 5;
    linkStyle 75 stroke-dasharray: 5 5;
    linkStyle 76 stroke-dasharray: 5 5;
    linkStyle 77 stroke-dasharray: 5 5;
    linkStyle 78 stroke-dasharray: 5 5;
    linkStyle 79 stroke-dasharray: 5 5;
    linkStyle 80 stroke-dasharray: 5 5;
    linkStyle 81 stroke-dasharray: 5 5;
    linkStyle 82 stroke-dasharray: 5 5;
    linkStyle 83 stroke-dasharray: 5 5;
    linkStyle 84 stroke-dasharray: 5 5;
    linkStyle 85 stroke-dasharray: 5 5;
    linkStyle 86 stroke-dasharray: 5 5;
    linkStyle 87 stroke-dasharray: 5 5;
    linkStyle 88 stroke-dasharray: 5 5;
    linkStyle 89 stroke-dasharray: 5 5;
    linkStyle 90 stroke-dasharray: 5 5;
    linkStyle 91 stroke-dasharray: 5 5;
    linkStyle 92 stroke-dasharray: 5 5;
    linkStyle 93 stroke-dasharray: 5 5;
    linkStyle 94 stroke-dasharray: 5 5;
    linkStyle 95 stroke-dasharray: 5 5;
    linkStyle 96 stroke-dasharray: 5 5;
    linkStyle 97 stroke-dasharray: 5 5;
    linkStyle 98 stroke-dasharray: 5 5;
    linkStyle 99 stroke-dasharray: 5 5;
    linkStyle 100 stroke-dasharray: 5 5;
    linkStyle 101 stroke-dasharray: 5 5;
    linkStyle 102 stroke-dasharray: 5 5;
    linkStyle 103 stroke-dasharray: 5 5;
    linkStyle 104 stroke-dasharray: 5 5;
    linkStyle 105 stroke-dasharray: 5 5;
    linkStyle 106 stroke-dasharray: 5 5;
    linkStyle 107 stroke-dasharray: 5 5;
    linkStyle 108 stroke-dasharray: 5 5;
    linkStyle 109 stroke-dasharray: 5 5;
    linkStyle 110 stroke-dasharray: 5 5;
    linkStyle 111 stroke-dasharray: 5 5;
    linkStyle 112 stroke-dasharray: 5 5;
    linkStyle 113 stroke-dasharray: 5 5;
    linkStyle 114 stroke-dasharray: 5 5;
    linkStyle 115 stroke-dasharray: 5 5;
    linkStyle 116 stroke-dasharray: 5 5;
    linkStyle 117 stroke-dasharray: 5 5;
    linkStyle 118 stroke-dasharray: 5 5;
    linkStyle 119 stroke-dasharray: 5 5;
    linkStyle 120 stroke-dasharray: 5 5;
    linkStyle 121 stroke-dasharray: 5 5;
    linkStyle 122 stroke-dasharray: 5 5;
    linkStyle 123 stroke-dasharray: 5 5;
    linkStyle 124 stroke-dasharray: 5 5;
    linkStyle 125 stroke-dasharray: 5 5;
    linkStyle 126 stroke-dasharray: 5 5;
    linkStyle 127 stroke-dasharray: 5 5;
    linkStyle 128 stroke-dasharray: 5 5;
    linkStyle 129 stroke-dasharray: 5 5;
    linkStyle 130 stroke-dasharray: 5 5;
    linkStyle 131 stroke-dasharray: 5 5;
    linkStyle 132 stroke-dasharray: 5 5;
    linkStyle 133 stroke-dasharray: 5 5;
    linkStyle 134 stroke-dasharray: 5 5;
    linkStyle 135 stroke-dasharray: 5 5;
    linkStyle 136 stroke-dasharray: 5 5;
    linkStyle 137 stroke-dasharray: 5 5;
    linkStyle 138 stroke-dasharray: 5 5;
    linkStyle 139 stroke-dasharray: 5 5;
    linkStyle 140 stroke-dasharray: 5 5;
    linkStyle 141 stroke-dasharray: 5 5;
    linkStyle 142 stroke-dasharray: 5 5;
    linkStyle 143 stroke-dasharray: 5 5;
    linkStyle 144 stroke-dasharray: 5 5;
    linkStyle 145 stroke-dasharray: 5 5;
    linkStyle 146 stroke-dasharray: 5 5;
    linkStyle 147 stroke-dasharray: 5 5;
    linkStyle 148 stroke-dasharray: 5 5;
    linkStyle 149 stroke-dasharray: 5 5;
    linkStyle 150 stroke-dasharray: 5 5;
    linkStyle 151 stroke-dasharray: 5 5;
    linkStyle 152 stroke-dasharray: 5 5;
    linkStyle 153 stroke-dasharray: 5 5;
    linkStyle 154 stroke-dasharray: 5 5;
    linkStyle 155 stroke-dasharray: 5 5;
    linkStyle 156 stroke-dasharray: 5 5;
    linkStyle 157 stroke-dasharray: 5 5;
    linkStyle 158 stroke-dasharray: 5 5;
    linkStyle 159 stroke-dasharray: 5 5;
    linkStyle 160 stroke-dasharray: 5 5;
    linkStyle 161 stroke-dasharray: 5 5;
    linkStyle 162 stroke-dasharray: 5 5;
    linkStyle 163 stroke-dasharray: 5 5;
    linkStyle 164 stroke-dasharray: 5 5;
    linkStyle 165 stroke-dasharray: 5 5;
    linkStyle 166 stroke-dasharray: 5 5;
    linkStyle 167 stroke-dasharray: 5 5;
    linkStyle 168 stroke-dasharray: 5 5;
    linkStyle 169 stroke-dasharray: 5 5;
    linkStyle 170 stroke-dasharray: 5 5;
    linkStyle 171 stroke-dasharray: 5 5;
    linkStyle 172 stroke-dasharray: 5 5;
    linkStyle 173 stroke-dasharray: 5 5;
    linkStyle 174 stroke-dasharray: 5 5;
    linkStyle 175 stroke-dasharray: 5 5;
    linkStyle 176 stroke-dasharray: 5 5;
    linkStyle 177 stroke-dasharray: 5 5;
    linkStyle 178 stroke-dasharray: 5 5;
    linkStyle 179 stroke-dasharray: 5 5;
    linkStyle 180 stroke-dasharray: 5 5;
    linkStyle 181 stroke-dasharray: 5 5;
    linkStyle 182 stroke-dasharray: 5 5;
    linkStyle 183 stroke-dasharray: 5 5;
    linkStyle 184 stroke-dasharray: 5 5;
    linkStyle 185 stroke-dasharray: 5 5;
    linkStyle 186 stroke-dasharray: 5 5;
    linkStyle 187 stroke-dasharray: 5 5;
    linkStyle 188 stroke-dasharray: 5 5;
    linkStyle 189 stroke-dasharray: 5 5;
    linkStyle 190 stroke-dasharray: 5 5;
    linkStyle 191 stroke-dasharray: 5 5;
    linkStyle 192 stroke-dasharray: 5 5;
    linkStyle 193 stroke-dasharray: 5 5;
    linkStyle 194 stroke-dasharray: 5 5;
    linkStyle 195 stroke-dasharray: 5 5;
    linkStyle 196 stroke-dasharray: 5 5;
    linkStyle 197 stroke-dasharray: 5 5;
    linkStyle 198 stroke-dasharray: 5 5;
    linkStyle 199 stroke-dasharray: 5 5;
    linkStyle 200 stroke-dasharray: 5 5;
    linkStyle 201 stroke-dasharray: 5 5;
    linkStyle 202 stroke-dasharray: 5 5;
    linkStyle 203 stroke-dasharray: 5 5;
    linkStyle 204 stroke-dasharray: 5 5;
    linkStyle 205 stroke-dasharray: 5 5;
    linkStyle 206 stroke-dasharray: 5 5;
    linkStyle 207 stroke-dasharray: 5 5;
    linkStyle 208 stroke-dasharray: 5 5;
    linkStyle 209 stroke-dasharray: 5 5;
    linkStyle 210 stroke-dasharray: 5 5;
    linkStyle 211 stroke-dasharray: 5 5;
    linkStyle 212 stroke-dasharray: 5 5;
    linkStyle 213 stroke-dasharray: 5 5;
    linkStyle 214 stroke-dasharray: 5 5;
    linkStyle 215 stroke-dasharray: 5 5;
    linkStyle 216 stroke-dasharray: 5 5;
    linkStyle 217 stroke-dasharray: 5 5;
    linkStyle 218 stroke-dasharray: 5 5;
    linkStyle 219 stroke-dasharray: 5 5;
    linkStyle 220 stroke-dasharray: 5 5;
    linkStyle 221 stroke-dasharray: 5 5;
    linkStyle 222 stroke-dasharray: 5 5;
    linkStyle 223 stroke-dasharray: 5 5;
    linkStyle 224 stroke-dasharray: 5 5;
    linkStyle 225 stroke-dasharray: 5 5;
    linkStyle 226 stroke-dasharray: 5 5;
    linkStyle 227 stroke-dasharray: 5 5;
    linkStyle 228 stroke-dasharray: 5 5;
    linkStyle 229 stroke-dasharray: 5 5;
    linkStyle 230 stroke-dasharray: 5 5;
    linkStyle 231 stroke-dasharray: 5 5;
    linkStyle 232 stroke-dasharray: 5 5;
    linkStyle 233 stroke-dasharray: 5 5;
    linkStyle 234 stroke-dasharray: 5 5;
    linkStyle 235 stroke-dasharray: 5 5;
    linkStyle 236 stroke-dasharray: 5 5;
    linkStyle 237 stroke-dasharray: 5 5;
    linkStyle 238 stroke-dasharray: 5 5;
    linkStyle 239 stroke-dasharray: 5 5;
    linkStyle 240 stroke-dasharray: 5 5;
    linkStyle 241 stroke-dasharray: 5 5;
    linkStyle 242 stroke-dasharray: 5 5;
    linkStyle 243 stroke-dasharray: 5 5;
    linkStyle 244 stroke-dasharray: 5 5;
    linkStyle 245 stroke-dasharray: 5 5;
    linkStyle 246 stroke-dasharray: 5 5;
    linkStyle 247 stroke-dasharray: 5 5;
    linkStyle 248 stroke-dasharray: 5 5;
    linkStyle 249 stroke-dasharray: 5 5;
    linkStyle 250 stroke-dasharray: 5 5;
    linkStyle 251 stroke-dasharray: 5 5;
    linkStyle 252 stroke-dasharray: 5 5;
    linkStyle 253 stroke-dasharray: 5 5;
    linkStyle 254 stroke-dasharray: 5 5;
    linkStyle 255 stroke-dasharray: 5 5;
    linkStyle 256 stroke-dasharray: 5 5;
    linkStyle 257 stroke-dasharray: 5 5;
    linkStyle 258 stroke-dasharray: 5 5;
    linkStyle 259 stroke-dasharray: 5 5;
    linkStyle 260 stroke-dasharray: 5 5;
    linkStyle 261 stroke-dasharray: 5 5;
    linkStyle 262 stroke-dasharray: 5 5;
    linkStyle 263 stroke-dasharray: 5 5;
    linkStyle 264 stroke-dasharray: 5 5;
    linkStyle 265 stroke-dasharray: 5 5;
    linkStyle 266 stroke-dasharray: 5 5;
    linkStyle 267 stroke-dasharray: 5 5;
    linkStyle 268 stroke-dasharray: 5 5;
    linkStyle 269 stroke-dasharray: 5 5;
    linkStyle 270 stroke-dasharray: 5 5;
    linkStyle 271 stroke-dasharray: 5 5;
    linkStyle 272 stroke-dasharray: 5 5;
    linkStyle 273 stroke-dasharray: 5 5;
    linkStyle 274 stroke-dasharray: 5 5;
    linkStyle 275 stroke-dasharray: 5 5;
    linkStyle 276 stroke-dasharray: 5 5;
    linkStyle 277 stroke-dasharray: 5 5;
    linkStyle 278 stroke-dasharray: 5 5;
    linkStyle 279 stroke-dasharray: 5 5;
    linkStyle 280 stroke-dasharray: 5 5;
    linkStyle 281 stroke-dasharray: 5 5;
    linkStyle 282 stroke-dasharray: 5 5;
    linkStyle 283 stroke-dasharray: 5 5;
    linkStyle 284 stroke-dasharray: 5 5;
    linkStyle 285 stroke-dasharray: 5 5;
    linkStyle 286 stroke-dasharray: 5 5;
    linkStyle 287 stroke-dasharray: 5 5;
    linkStyle 288 stroke-dasharray: 5 5;
    linkStyle 289 stroke-dasharray: 5 5;
    linkStyle 290 stroke-dasharray: 5 5;
    linkStyle 291 stroke-dasharray: 5 5;
    linkStyle 292 stroke-dasharray: 5 5;
    linkStyle 293 stroke-dasharray: 5 5;
    linkStyle 294 stroke-dasharray: 5 5;
    linkStyle 295 stroke-dasharray: 5 5;
    linkStyle 296 stroke-dasharray: 5 5;
    linkStyle 297 stroke-dasharray: 5 5;
    linkStyle 298 stroke-dasharray: 5 5;
    linkStyle 299 stroke-dasharray: 5 5;
    linkStyle 300 stroke-dasharray: 5 5;
    linkStyle 301 stroke-dasharray: 5 5;
    linkStyle 302 stroke-dasharray: 5 5;
    linkStyle 303 stroke-dasharray: 5 5;
    linkStyle 304 stroke-dasharray: 5 5;
    linkStyle 305 stroke-dasharray: 5 5;
    linkStyle 306 stroke-dasharray: 5 5;
    linkStyle 307 stroke-dasharray: 5 5;
    linkStyle 308 stroke-dasharray: 5 5;
    linkStyle 309 stroke-dasharray: 5 5;
    linkStyle 310 stroke-dasharray: 5 5;
    linkStyle 311 stroke-dasharray: 5 5;
    linkStyle 312 stroke-dasharray: 5 5;
    linkStyle 313 stroke-dasharray: 5 5;
    linkStyle 314 stroke-dasharray: 5 5;
    linkStyle 315 stroke-dasharray: 5 5;
    linkStyle 316 stroke-dasharray: 5 5;
    linkStyle 317 stroke-dasharray: 5 5;
    linkStyle 318 stroke-dasharray: 5 5;
    linkStyle 319 stroke-dasharray: 5 5;
    linkStyle 320 stroke-dasharray: 5 5;
    linkStyle 321 stroke-dasharray: 5 5;
    linkStyle 322 stroke-dasharray: 5 5;
    linkStyle 323 stroke-dasharray: 5 5;
    linkStyle 324 stroke-dasharray: 5 5;
    linkStyle 325 stroke-dasharray: 5 5;
    linkStyle 326 stroke-dasharray: 5 5;
    linkStyle 327 stroke-dasharray: 5 5;
    linkStyle 328 stroke-dasharray: 5 5;
    linkStyle 329 stroke-dasharray: 5 5;
    linkStyle 330 stroke-dasharray: 5 5;
    linkStyle 331 stroke-dasharray: 5 5;
    linkStyle 332 stroke-dasharray: 5 5;
    linkStyle 333 stroke-dasharray: 5 5;
    linkStyle 334 stroke-dasharray: 5 5;
    linkStyle 335 stroke-dasharray: 5 5;
    linkStyle 336 stroke-dasharray: 5 5;
    linkStyle 337 stroke-dasharray: 5 5;
    linkStyle 338 stroke-dasharray: 5 5;
    linkStyle 339 stroke-dasharray: 5 5;
    linkStyle 340 stroke-dasharray: 5 5;
    linkStyle 341 stroke-dasharray: 5 5;
    linkStyle 342 stroke-dasharray: 5 5;
    linkStyle 343 stroke-dasharray: 5 5;
    linkStyle 344 stroke-dasharray: 5 5;
    linkStyle 345 stroke-dasharray: 5 5;
    linkStyle 346 stroke-dasharray: 5 5;
    linkStyle 347 stroke-dasharray: 5 5;
    linkStyle 348 stroke-dasharray: 5 5;
    linkStyle 349 stroke-dasharray: 5 5;
    linkStyle 350 stroke-dasharray: 5 5;
    linkStyle 351 stroke-dasharray: 5 5;
    linkStyle 352 stroke-dasharray: 5 5;
    linkStyle 353 stroke-dasharray: 5 5;
    linkStyle 354 stroke-dasharray: 5 5;
    linkStyle 355 stroke-dasharray: 5 5;
    linkStyle 356 stroke-dasharray: 5 5;
    linkStyle 357 stroke-dasharray: 5 5;
    linkStyle 358 stroke-dasharray: 5 5;
    linkStyle 359 stroke-dasharray: 5 5;
    linkStyle 360 stroke-dasharray: 5 5;
    linkStyle 361 stroke-dasharray: 5 5;
    linkStyle 362 stroke-dasharray: 5 5;
    linkStyle 363 stroke-dasharray: 5 5;
    linkStyle 364 stroke-dasharray: 5 5;
    linkStyle 365 stroke-dasharray: 5 5;
    linkStyle 366 stroke-dasharray: 5 5;
    linkStyle 367 stroke-dasharray: 5 5;
    linkStyle 368 stroke-dasharray: 5 5;
    linkStyle 369 stroke-dasharray: 5 5;
    linkStyle 370 stroke-dasharray: 5 5;
    linkStyle 371 stroke-dasharray: 5 5;
    linkStyle 372 stroke-dasharray: 5 5;
    linkStyle 373 stroke-dasharray: 5 5;
    linkStyle 374 stroke-dasharray: 5 5;
    linkStyle 375 stroke-dasharray: 5 5;
    linkStyle 376 stroke-dasharray: 5 5;
    linkStyle 377 stroke-dasharray: 5 5;
    linkStyle 378 stroke-dasharray: 5 5;
    linkStyle 379 stroke-dasharray: 5 5;
    linkStyle 380 stroke-dasharray: 5 5;
    linkStyle 381 stroke-dasharray: 5 5;
    linkStyle 382 stroke-dasharray: 5 5;
    linkStyle 383 stroke-dasharray: 5 5;
    linkStyle 384 stroke-dasharray: 5 5;
    linkStyle 385 stroke-dasharray: 5 5;
    linkStyle 386 stroke-dasharray: 5 5;
    linkStyle 387 stroke-dasharray: 5 5;
    linkStyle 388 stroke-dasharray: 5 5;
    linkStyle 389 stroke-dasharray: 5 5;
    linkStyle 390 stroke-dasharray: 5 5;
    linkStyle 391 stroke-dasharray: 5 5;
    linkStyle 392 stroke-dasharray: 5 5;
    linkStyle 393 stroke-dasharray: 5 5;
    linkStyle 394 stroke-dasharray: 5 5;
    linkStyle 395 stroke-dasharray: 5 5;
    linkStyle 396 stroke-dasharray: 5 5;
    linkStyle 397 stroke-dasharray: 5 5;
    linkStyle 398 stroke-dasharray: 5 5;
    linkStyle 399 stroke-dasharray: 5 5;
    linkStyle 400 stroke-dasharray: 5 5;
    linkStyle 401 stroke-dasharray: 5 5;
    linkStyle 402 stroke-dasharray: 5 5;
    linkStyle 403 stroke-dasharray: 5 5;
    linkStyle 404 stroke-dasharray: 5 5;
    linkStyle 405 stroke-dasharray: 5 5;
    linkStyle 406 stroke-dasharray: 5 5;
    linkStyle 407 stroke-dasharray: 5 5;
    linkStyle 408 stroke-dasharray: 5 5;
    linkStyle 409 stroke-dasharray: 5 5;
    linkStyle 410 stroke-dasharray: 5 5;
    linkStyle 411 stroke-dasharray: 5 5;
    linkStyle 412 stroke-dasharray: 5 5;
    linkStyle 413 stroke-dasharray: 5 5;
    linkStyle 414 stroke-dasharray: 5 5;
    linkStyle 415 stroke-dasharray: 5 5;
    linkStyle 416 stroke-dasharray: 5 5;
    linkStyle 417 stroke-dasharray: 5 5;
    linkStyle 418 stroke-dasharray: 5 5;
    linkStyle 419 stroke-dasharray: 5 5;
    linkStyle 420 stroke-dasharray: 5 5;
    linkStyle 421 stroke-dasharray: 5 5;
    linkStyle 422 stroke-dasharray: 5 5;
    linkStyle 423 stroke-dasharray: 5 5;
    linkStyle 424 stroke-dasharray: 5 5;
    linkStyle 425 stroke-dasharray: 5 5;
    linkStyle 426 stroke-dasharray: 5 5;
    linkStyle 427 stroke-dasharray: 5 5;
    linkStyle 428 stroke-dasharray: 5 5;
    linkStyle 429 stroke-dasharray: 5 5;
    linkStyle 430 stroke-dasharray: 5 5;
    linkStyle 431 stroke-dasharray: 5 5;
    linkStyle 432 stroke-dasharray: 5 5;
    linkStyle 433 stroke-dasharray: 5 5;
    linkStyle 434 stroke-dasharray: 5 5;
    linkStyle 435 stroke-dasharray: 5 5;
    linkStyle 436 stroke-dasharray: 5 5;
    linkStyle 437 stroke-dasharray: 5 5;
    linkStyle 438 stroke-dasharray: 5 5;
    linkStyle 439 stroke-dasharray: 5 5;
    linkStyle 440 stroke-dasharray: 5 5;
    linkStyle 441 stroke-dasharray: 5 5;
    linkStyle 442 stroke-dasharray: 5 5;
    linkStyle 443 stroke-dasharray: 5 5;
    linkStyle 444 stroke-dasharray: 5 5;
    linkStyle 445 stroke-dasharray: 5 5;
    linkStyle 446 stroke-dasharray: 5 5;
    linkStyle 447 stroke-dasharray: 5 5;
    linkStyle 448 stroke-dasharray: 5 5;
    linkStyle 449 stroke-dasharray: 5 5;
    linkStyle 450 stroke-dasharray: 5 5;
    linkStyle 451 stroke-dasharray: 5 5;
    linkStyle 452 stroke-dasharray: 5 5;
    linkStyle 453 stroke-dasharray: 5 5;
    linkStyle 454 stroke-dasharray: 5 5;
    linkStyle 455 stroke-dasharray: 5 5;
    linkStyle 456 stroke-dasharray: 5 5;
    linkStyle 457 stroke-dasharray: 5 5;
    linkStyle 458 stroke-dasharray: 5 5;
    linkStyle 459 stroke-dasharray: 5 5;
    linkStyle 460 stroke-dasharray: 5 5;
    linkStyle 461 stroke-dasharray: 5 5;
    linkStyle 462 stroke-dasharray: 5 5;
    linkStyle 463 stroke-dasharray: 5 5;
    linkStyle 464 stroke-dasharray: 5 5;
    linkStyle 465 stroke-dasharray: 5 5;
    linkStyle 466 stroke-dasharray: 5 5;
    linkStyle 467 stroke-dasharray: 5 5;
    linkStyle 468 stroke-dasharray: 5 5;
    linkStyle 469 stroke-dasharray: 5 5;
    linkStyle 470 stroke-dasharray: 5 5;
    linkStyle 471 stroke-dasharray: 5 5;
    linkStyle 472 stroke-dasharray: 5 5;
    linkStyle 473 stroke-dasharray: 5 5;
    linkStyle 474 stroke-dasharray: 5 5;
    linkStyle 475 stroke-dasharray: 5 5;
    linkStyle 476 stroke-dasharray: 5 5;
    linkStyle 477 stroke-dasharray: 5 5;
    linkStyle 478 stroke-dasharray: 5 5;
    linkStyle 479 stroke-dasharray: 5 5;
    linkStyle 480 stroke-dasharray: 5 5;
    linkStyle 481 stroke-dasharray: 5 5;
    linkStyle 482 stroke-dasharray: 5 5;
    linkStyle 483 stroke-dasharray: 5 5;
    linkStyle 484 stroke-dasharray: 5 5;
    linkStyle 485 stroke-dasharray: 5 5;
    linkStyle 486 stroke-dasharray: 5 5;
    linkStyle 487 stroke-dasharray: 5 5;
    linkStyle 488 stroke-dasharray: 5 5;
    linkStyle 489 stroke-dasharray: 5 5;
    linkStyle 490 stroke-dasharray: 5 5;
    linkStyle 491 stroke-dasharray: 5 5;
    linkStyle 492 stroke-dasharray: 5 5;
    linkStyle 493 stroke-dasharray: 5 5;
    linkStyle 494 stroke-dasharray: 5 5;
    linkStyle 495 stroke-dasharray: 5 5;
    linkStyle 496 stroke-dasharray: 5 5;
    linkStyle 497 stroke-dasharray: 5 5;
    linkStyle 498 stroke-dasharray: 5 5;
    linkStyle 499 stroke-dasharray: 5 5;
    linkStyle 500 stroke-dasharray: 5 5;
    linkStyle 501 stroke-dasharray: 5 5;
    linkStyle 502 stroke-dasharray: 5 5;
    linkStyle 503 stroke-dasharray: 5 5;
    linkStyle 504 stroke-dasharray: 5 5;
    linkStyle 505 stroke-dasharray: 5 5;
    linkStyle 506 stroke-dasharray: 5 5;
    linkStyle 507 stroke-dasharray: 5 5;
    linkStyle 508 stroke-dasharray: 5 5;
    linkStyle 509 stroke-dasharray: 5 5;
    linkStyle 510 stroke-dasharray: 5 5;
    linkStyle 511 stroke-dasharray: 5 5;
    linkStyle 512 stroke-dasharray: 5 5;
    linkStyle 513 stroke-dasharray: 5 5;
    linkStyle 514 stroke-dasharray: 5 5;
    linkStyle 515 stroke-dasharray: 5 5;
    linkStyle 516 stroke-dasharray: 5 5;
    linkStyle 517 stroke-dasharray: 5 5;
    linkStyle 518 stroke-dasharray: 5 5;
    linkStyle 519 stroke-dasharray: 5 5;
    linkStyle 520 stroke-dasharray: 5 5;
    linkStyle 521 stroke-dasharray: 5 5;
    linkStyle 522 stroke-dasharray: 5 5;
    linkStyle 523 stroke-dasharray: 5 5;
    linkStyle 524 stroke-dasharray: 5 5;
    linkStyle 525 stroke-dasharray: 5 5;
    linkStyle 526 stroke-dasharray: 5 5;
    linkStyle 527 stroke-dasharray: 5 5;
    linkStyle 528 stroke-dasharray: 5 5;
    linkStyle 529 stroke-dasharray: 5 5;
    linkStyle 530 stroke-dasharray: 5 5;
    linkStyle 531 stroke-dasharray: 5 5;
    linkStyle 532 stroke-dasharray: 5 5;
    linkStyle 533 stroke-dasharray: 5 5;
    linkStyle 534 stroke-dasharray: 5 5;
    linkStyle 535 stroke-dasharray: 5 5;
    linkStyle 536 stroke-dasharray: 5 5;
    linkStyle 537 stroke-dasharray: 5 5;
    linkStyle 538 stroke-dasharray: 5 5;
    linkStyle 539 stroke-dasharray: 5 5;
    linkStyle 540 stroke-dasharray: 5 5;
    linkStyle 541 stroke-dasharray: 5 5;
    linkStyle 542 stroke-dasharray: 5 5;
    linkStyle 543 stroke-dasharray: 5 5;
    linkStyle 544 stroke-dasharray: 5 5;
    linkStyle 545 stroke-dasharray: 5 5;
    linkStyle 546 stroke-dasharray: 5 5;
    linkStyle 547 stroke-dasharray: 5 5;
    linkStyle 548 stroke-dasharray: 5 5;
    linkStyle 549 stroke-dasharray: 5 5;
    linkStyle 550 stroke-dasharray: 5 5;
    linkStyle 551 stroke-dasharray: 5 5;
    linkStyle 552 stroke-dasharray: 5 5;
    linkStyle 553 stroke-dasharray: 5 5;
    linkStyle 554 stroke-dasharray: 5 5;
    linkStyle 555 stroke-dasharray: 5 5;
    linkStyle 556 stroke-dasharray: 5 5;
    linkStyle 557 stroke-dasharray: 5 5;
    linkStyle 558 stroke-dasharray: 5 5;
    linkStyle 559 stroke-dasharray: 5 5;
    linkStyle 560 stroke-dasharray: 5 5;
    linkStyle 561 stroke-dasharray: 5 5;
    linkStyle 562 stroke-dasharray: 5 5;
    linkStyle 563 stroke-dasharray: 5 5;
    linkStyle 564 stroke-dasharray: 5 5;
    linkStyle 565 stroke-dasharray: 5 5;
    linkStyle 566 stroke-dasharray: 5 5;
    linkStyle 567 stroke-dasharray: 5 5;
    linkStyle 568 stroke-dasharray: 5 5;
    linkStyle 569 stroke-dasharray: 5 5;
    linkStyle 570 stroke-dasharray: 5 5;
    linkStyle 571 stroke-dasharray: 5 5;
    linkStyle 572 stroke-dasharray: 5 5;
    linkStyle 573 stroke-dasharray: 5 5;
    linkStyle 574 stroke-dasharray: 5 5;
    linkStyle 575 stroke-dasharray: 5 5;
    linkStyle 576 stroke-dasharray: 5 5;
    linkStyle 577 stroke-dasharray: 5 5;
    linkStyle 578 stroke-dasharray: 5 5;
    linkStyle 579 stroke-dasharray: 5 5;
    linkStyle 580 stroke-dasharray: 5 5;
    linkStyle 581 stroke-dasharray: 5 5;
    linkStyle 582 stroke-dasharray: 5 5;
    linkStyle 583 stroke-dasharray: 5 5;
    linkStyle 584 stroke-dasharray: 5 5;
    linkStyle 585 stroke-dasharray: 5 5;
    linkStyle 586 stroke-dasharray: 5 5;
    linkStyle 587 stroke-dasharray: 5 5;
    linkStyle 588 stroke-dasharray: 5 5;
    linkStyle 589 stroke-dasharray: 5 5;
    linkStyle 590 stroke-dasharray: 5 5;
    linkStyle 591 stroke-dasharray: 5 5;
    linkStyle 592 stroke-dasharray: 5 5;
    linkStyle 593 stroke-dasharray: 5 5;
    linkStyle 594 stroke-dasharray: 5 5;
    linkStyle 595 stroke-dasharray: 5 5;
    linkStyle 596 stroke-dasharray: 5 5;
    linkStyle 597 stroke-dasharray: 5 5;
    linkStyle 598 stroke-dasharray: 5 5;
    linkStyle 599 stroke-dasharray: 5 5;
    linkStyle 600 stroke-dasharray: 5 5;
    linkStyle 601 stroke-dasharray: 5 5;
    linkStyle 602 stroke-dasharray: 5 5;
    linkStyle 603 stroke-dasharray: 5 5;
    linkStyle 604 stroke-dasharray: 5 5;
    linkStyle 605 stroke-dasharray: 5 5;
    linkStyle 606 stroke-dasharray: 5 5;
    linkStyle 607 stroke-dasharray: 5 5;
    linkStyle 608 stroke-dasharray: 5 5;
    linkStyle 609 stroke-dasharray: 5 5;
    linkStyle 610 stroke-dasharray: 5 5;
    linkStyle 611 stroke-dasharray: 5 5;
    linkStyle 612 stroke-dasharray: 5 5;
    linkStyle 613 stroke-dasharray: 5 5;
    linkStyle 614 stroke-dasharray: 5 5;
    linkStyle 615 stroke-dasharray: 5 5;
    linkStyle 616 stroke-dasharray: 5 5;
    linkStyle 617 stroke-dasharray: 5 5;
    linkStyle 618 stroke-dasharray: 5 5;
    linkStyle 619 stroke-dasharray: 5 5;
    linkStyle 620 stroke-dasharray: 5 5;
    linkStyle 621 stroke-dasharray: 5 5;
    linkStyle 622 stroke-dasharray: 5 5;
    linkStyle 623 stroke-dasharray: 5 5;
    linkStyle 624 stroke-dasharray: 5 5;
    linkStyle 625 stroke-dasharray: 5 5;
    linkStyle 626 stroke-dasharray: 5 5;
    linkStyle 627 stroke-dasharray: 5 5;
    linkStyle 628 stroke-dasharray: 5 5;
    linkStyle 629 stroke-dasharray: 5 5;
    linkStyle 630 stroke-dasharray: 5 5;
    linkStyle 631 stroke-dasharray: 5 5;
    linkStyle 632 stroke-dasharray: 5 5;
    linkStyle 633 stroke-dasharray: 5 5;
    linkStyle 634 stroke-dasharray: 5 5;
    linkStyle 635 stroke-dasharray: 5 5;
    linkStyle 636 stroke-dasharray: 5 5;
    linkStyle 637 stroke-dasharray: 5 5;
    linkStyle 638 stroke-dasharray: 5 5;
    linkStyle 639 stroke-dasharray: 5 5;
    linkStyle 640 stroke-dasharray: 5 5;
    linkStyle 641 stroke-dasharray: 5 5;
    linkStyle 642 stroke-dasharray: 5 5;
    linkStyle 643 stroke-dasharray: 5 5;
    linkStyle 644 stroke-dasharray: 5 5;
    linkStyle 645 stroke-dasharray: 5 5;
    linkStyle 646 stroke-dasharray: 5 5;
    linkStyle 647 stroke-dasharray: 5 5;
    linkStyle 648 stroke-dasharray: 5 5;
    linkStyle 649 stroke-dasharray: 5 5;
    linkStyle 650 stroke-dasharray: 5 5;
    linkStyle 651 stroke-dasharray: 5 5;
    linkStyle 652 stroke-dasharray: 5 5;
    linkStyle 653 stroke-dasharray: 5 5;
    linkStyle 654 stroke-dasharray: 5 5;
    linkStyle 655 stroke-dasharray: 5 5;
    linkStyle 656 stroke-dasharray: 5 5;
    linkStyle 657 stroke-dasharray: 5 5;
    linkStyle 658 stroke-dasharray: 5 5;
    linkStyle 659 stroke-dasharray: 5 5;
    linkStyle 660 stroke-dasharray: 5 5;
    linkStyle 661 stroke-dasharray: 5 5;
    linkStyle 662 stroke-dasharray: 5 5;
    linkStyle 663 stroke-dasharray: 5 5;
    linkStyle 664 stroke-dasharray: 5 5;
    linkStyle 665 stroke-dasharray: 5 5;
    linkStyle 666 stroke-dasharray: 5 5;
    linkStyle 667 stroke-dasharray: 5 5;
    linkStyle 668 stroke-dasharray: 5 5;
    linkStyle 669 stroke-dasharray: 5 5;
    linkStyle 670 stroke-dasharray: 5 5;
    linkStyle 671 stroke-dasharray: 5 5;
    linkStyle 672 stroke-dasharray: 5 5;
    linkStyle 673 stroke-dasharray: 5 5;
    linkStyle 674 stroke-dasharray: 5 5;
    linkStyle 675 stroke-dasharray: 5 5;
    linkStyle 676 stroke-dasharray: 5 5;
    linkStyle 677 stroke-dasharray: 5 5;
    linkStyle 678 stroke-dasharray: 5 5;
    linkStyle 679 stroke-dasharray: 5 5;
    linkStyle 680 stroke-dasharray: 5 5;
    linkStyle 681 stroke-dasharray: 5 5;
    linkStyle 682 stroke-dasharray: 5 5;
    linkStyle 683 stroke-dasharray: 5 5;
    linkStyle 684 stroke-dasharray: 5 5;
    linkStyle 685 stroke-dasharray: 5 5;
    linkStyle 686 stroke-dasharray: 5 5;
    linkStyle 687 stroke-dasharray: 5 5;
    linkStyle 688 stroke-dasharray: 5 5;
    linkStyle 689 stroke-dasharray: 5 5;
    linkStyle 690 stroke-dasharray: 5 5;
    linkStyle 691 stroke-dasharray: 5 5;
    linkStyle 692 stroke-dasharray: 5 5;
    linkStyle 693 stroke-dasharray: 5 5;
    linkStyle 694 stroke-dasharray: 5 5;
    linkStyle 695 stroke-dasharray: 5 5;
    linkStyle 696 stroke-dasharray: 5 5;
    linkStyle 697 stroke-dasharray: 5 5;
    linkStyle 698 stroke-dasharray: 5 5;
    linkStyle 699 stroke-dasharray: 5 5;
    linkStyle 700 stroke-dasharray: 5 5;
    linkStyle 701 stroke-dasharray: 5 5;
    linkStyle 702 stroke-dasharray: 5 5;
    linkStyle 703 stroke-dasharray: 5 5;
    linkStyle 704 stroke-dasharray:

---


## Page 35

3.7.2 Communication Attributes

&lt;img&gt;Diagram showing CommunicationABIEType with attributes @sequence and @preferredIndicator, and a hr:EffectiveDateAttributeGroup with attributes @validFrom and @validTo. A note explains that HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral part of the attribute value. Another note states that this flexibly allows capture of information about a variety of communication channels (telephone, email, fax,...). An arrow points to a Communication element.&lt;/img&gt;

Note that where Candidate is a target format for a resume parsing operation, the Communication/Address component...

This flexibly allows capture of information about a variety of communication channels (telephone, email, fax,...

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateSupplier/PersonContact/Communication</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

3.7.3 Sub-element: /CandidatePerson/Communication/CommunicationChoice (level 3)

3.7.3.1 CommunicationChoice Element Description

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Layer / Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>Choice</td>
<td>Selection between the types of channels<br>1-Address<br>2-Telephone<br>3-URL<br>4-Text</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5">Choice Elements</td>
</tr>
<tr>
<td colspan="5">The same as /CandidateSupplier/PersonContact/Communication</td>
</tr>
</tbody>
</table>

3.7.3.2 CommunicationChoice Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateSupplier/PersonContact/Communication</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 35 of 160&lt;/page_number&gt;

---


## Page 36

3.7.4 Sub-element: /CandidatePerson/Communication/CommunicationChoice/Address (level 4)

3.7.4.1 Address Element Description

&lt;img&gt;Diagram showing AddressType, AddressBaseType (extension base), Attributes, AddressLine (0..∞), BuildingNumber, StreetName, Unit, CityName, CountrySubDivisionCode, CountryCode, PostalCode, and their relationships.&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Layer / Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Address</strong></td>
<td>Properties specifying an entity's physical location</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>AddressChoice</strong></td>
<td>Selection between the types of addresses:<br>1-Address Line<br>2-Building Number<br>3-Street Name<br>4-Unit<br>See section /CandidatePerson/Communication/CommunicationChoice/Address/AddressChoice for more information</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>CityName</strong></td>
<td>Identifies the town or city</td>
<td>0..1</td>
<td>N/A</td>
<td>"Bruxelles", "Roma", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 36 of 160&lt;/page_number&gt;

---


## Page 37

mermaid
erDiagram
    AddressType ||--o{ Address : Address
    Address ||--|{ AddressBaseType : (extension base)
    AddressBaseType {
      @ Attributes
      @ type
    }
    AddressBaseType {
      @ Attributes
      hr:EffectiveDateAttributeGroup
      @ validFrom
      @ validTo
      @ currentAddressIndicator
    }
```

3.7.4.2 *Address Attributes*

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>currentAddressIndicator</strong></td>
<td>Current address of the information</td>
<td>0..1</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>type</strong></td>
<td>The address type</td>
<td>0..1</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="4"><strong>CityName attributes</strong></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 37 of 160&lt;/page_number&gt;

---


## Page 38

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to NameType Attributes section for additional attributes</td>
    </tr>
    <tr>
      <td colspan="4"><b>CountryCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes</td>
    </tr>
    <tr>
      <td colspan="4"><b>CountrySubdivisionCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes</td>
    </tr>
    <tr>
      <td colspan="4"><b>PostalCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

3.7.5 Sub-element:
/CandidatePerson/Communication/CommunicationChoice/Address/AddressChoice (level 5)

3.7.5.1 AddressChoice Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Choice</td>
      <td>Selection between the types of addresses:<br>1-Address Line<br>2-Building Number<br>3-Street Name<br>4-Unit</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Choice Elements</b></td>
    </tr>
    <tr>
      <td colspan="5"><b>Choice 1</b></td>
    </tr>
    <tr>
      <td>AddressLine</td>
      <td>Full address text in a text field</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>"Apartment 10, Derp House, 20 Longstreet, Rotterdam, Netherlands, 3000 AA", etc.</td>
    </tr>
    <tr>
      <td colspan="5"><b>Choice 2</b></td>
    </tr>
    <tr>
      <td>BuildingNumber</td>
      <td>The Building/house Number on the street that identifies where to deliver mail (for example, Building 300 on Standards Parkway)</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"10", etc.</td>
    </tr>
    <tr>
      <td>StreetName</td>
      <td>The Street Name where the building/house is located</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Longstreet", etc.</td>
    </tr>
    <tr>
      <td>Unit</td>
      <td>The apartment number or office suite</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"20", etc.</td>
    </tr>
  </tbody>
</table>

3.7.5.2 AddressChoice Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>BuildingNumber, Unit, StreetName attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Language in which the GivenName is mentioned</td>
      <td>0..1</td>
      <td>"en"</td>
    </tr>
    <tr>
      <td colspan="4"><b>AddressLine attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to NameType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 38 of 160&lt;/page_number&gt;

---


## Page 39

3.8 /CandidatePerson/Disability (level 2)

3.8.1 Disability Element Description

&lt;img&gt;UML Diagram showing eures:Disability with cardinality 0..∞, connected to DisabilityType, and DisabilitySummary with cardinality 0..1.&lt;/img&gt;
It describes a disability associated with a specific person.

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Disability</strong></td>
<td>Describes a disability associated with a specified person, lack of ability to discharge a function and incapacity in the eyes of the law.<br>The absence of the Disability element will mean “No disabilities”.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>DisabilitySummary</strong></td>
<td>Describes a disability associated with a specified person, lack of ability to discharge a function and incapacity in the eyes of the law<br>See section /CandidatePerson/Disability/DisabilitySummary for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.8.2 Disability Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>This element has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="4"><strong>DisabilitySummary attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">See section /CandidatePerson/Disability/DisabilitySummary for more information</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 39 of 160&lt;/page_number&gt;

---


## Page 40

3.8.3 Sub-element: /CandidatePerson/Disability/DisabilitySummary (level 3)

3.8.3.1 DisabilitySummary Element Description

<mermaid>
graph TD
    A[DisabilitySummaryType] --> B(Attributes)
    B --> C(hr:DisabilityLevelCode)
    B --> D(hr:Comment)
    C --> E[A value from an external code list classifying the level of disability. A simple example code list."1" - need for...]
    D --> F[Comment A comment to provide additional unstructured information concerning the related entity.]
    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>DisabilitySummary</td>
<td>Describes a disability associated with a specified person, lack of ability to discharge a function and incapacity in the eyes of the law</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td>DisabilityLevelCode</td>
<td>A value from an external code list classifying the level of disability</td>
<td>0..1</td>
<td>BR-CV-17: Compulsory use of the "EURES_DisabilityLevelCode-CodeList.gc" list defined by EURES.</td>
<td>"1" – need for another person's assistance with daily life tasks<br/>"2" – inability to perform one or more sensory or physical functions, etc.<br/><br/>Full code list: "4.28.10 Disability Level Code [CL12]"</td>
</tr>
<tr>
<td>Comment</td>
<td>A free form for comments</td>
<td>0..1</td>
<td>N/A</td>
<td>"Comment about the free form"</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 40 of 160&lt;/page_number&gt;

---


## Page 41

3.8.3.2 DisabilitySummary Attributes

&lt;img&gt;Diagram showing DisabilityType, DisabilitySummaryType, and DisabilitySummary with attributes validFrom, validTo, and hr:EffectiveDateAttributeGroup.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

DisabilityLevelCode attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

Comment attribute

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to NoteType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 41 of 160&lt;/page_number&gt;

---


## Page 42

3.9 /CandidateProfile (level 1)

3.9.1 CandidateProfile Element Description

<mermaid>
graph TD
    A[CandidateProfileType] --> B(BaseCandidateProfileType (extension base))
    B --> C[Attributes]
    C --> D(hr:ID)
    D -- "Unique systemic identifiers for the candidate profile." --> D_desc
    C --> E(hr:ProfileName)
    E -- "The name of a profile. OED: Profile n. a structured set of characteristics of someone or something; a record or report..." --> E_desc
    C --> F(PersonAvailability)
    F -- "It contains a detailed set of data about the person's availability" --> F_desc
    C --> G(hr:CandidateObjective)
    G -- "It contains narrative description of the candidate's overall intentions. (e.g. \"Job search\", etc.)" --> G_desc
    C --> H(hr:ExecutiveSummary)
    H -- "It contains narrative summary on the person and his/her competencies normally used as the CV presentation. In some..." --> H_desc
    C --> I(eures:CandidateEmployerPreferences)
    I -- "It contains information about a candidate's employer preferences." --> I_desc
    C --> J(CandidatePositionPreferences)
    J -- "Contains a collection of information about a candidate's preferences in an position." --> J_desc
    C --> K(eures:ExperienceSummary)
    K -- "It contains categorisation of the candidate's experience." --> K_desc
    C --> L(EmploymentHistory)
    L -- "Employment History records. Details of a particular tenure of employment or work with an organization." --> L_desc
    C --> M(EducationHistory)
    M -- "The systematic instruction, schooling, or training given to the young in preparation for the work of life; by..." --> M_desc
    C --> N(eures:Licenses)
    N -- "Licenses History of Licenses." --> N_desc
    C --> O(Certifications)
    O -- "A collection of information about one or more certifications." --> O_desc
    C --> P(MilitaryHistory)
    P -- "Military history records." --> P_desc
    C --> Q(eures:PatentHistory)
    Q -- "It contains information about the patents owned by the candidate." --> Q_desc
    C --> R(PublicationHistory)
    R -- "It contains information about one or more publications text by the person." --> R_desc
    C --> S(eures:SpeakingHistory)
    S -- "It contains information about one or more events in which the person has spoken (as keynote speaker, for example)." --> S_desc
    C --> T(PersonQualifications)
    T -- "History of a Person's Qualifications" --> T_desc
    C --> U(CandidateProfile)
    U -- "It contains structured information about a candidate." --> U_desc
    U -- "1..∞" --> U_count
</mermaid>

<footer>DG EMPL 2020</footer>&lt;page_number&gt;Page 4 160&lt;/page_number&gt;

---


## Page 43

mermaid
flowchart TD
    A(["Start"]) --> B["Gather Information"]
    B --> C["Education"]
    C --> D["Schools attended"]
    D --> E["Degrees obtained"]
    E --> F["Relevant Courses"]
    F --> G{"Is there any research or projects related to the job requirements?"}
    G -->|Yes| H["Research and Projects"]
    H --> I["List of Research Papers"]
    H --> J["List of Projects"]
    J --> K["Context of Projects"]
    K --> L["List of Relevant Skills Acquired"]
    G -->|No| M["No additional information needed"]
    M --> N["Work Experience"]
    N --> O["Employment History"]
    O --> P["Job Titles Held"]
    O --> Q["Companies Employed"]
    O --> R["Reasons for Leaving"]
    R --> S["Skills Developed"]
    S --> T["Soft Skills"]
    T --> U["Hard Skills"]
    T --> V["Certifications"]
    N --> W["Volunteer Work"]
    W --> X["Organizations Volunteered For"]
    W --> Y["Hours of Volunteering"]
    W --> Z["Nature of Volunteering"]
    Z --> AA["Reasons for Volunteering"]
    N --> AB["Awards and Recognitions"]
    AB --> AC["Awards Received"]
    AB --> AD["Recognitions"]
    N --> AE["Hobbies and Interests"]
    AE --> AF["Hobby Details"]
    AE --> AG["Interests Details"]
    N --> AH["Creative Works"]
    AH --> AI["Artistic Achievements"]
    AH --> AJ["Performances"]
    AH --> AK["Exhibitions"]
    N --> AL["Social and Political Activities"]
    AL --> AM["Political Affiliations"]
    AL --> AN["Community Involvement"]
    N --> AO["Communication and Interpersonal Skills"]
    AO --> AP["Public Speaking"]
    AO --> AQ["Leadership Roles"]
    AO --> AR["Collaboration Experience"]
    N --> AS["Management and Leadership Skills"]
    AS --> AT["Management Experience"]
    AS --> AU["Leadership Experience"]
    AS --> AV["Team Management"]
    N --> AW["Organisational Skills"]
    AW --> AX["Time Management"]
    AW --> AY["Organisation Experience"]
    N --> AZ["Digital Skills"]
    AZ --> BA["Software Proficiency"]
    AZ --> BB["Programming Languages"]
    AZ --> BC["Digital Tools Used"]
    N --> BD["Networks and Memberships"]
    BD --> BE["Professional Networks"]
    BD --> BF["Societies and Associations"]
    BD --> BG["Reasons for Joining"]
    N --> BH["Conferences and Seminars"]
    BH --> BI["Attended Conferences"]
    BH --> BJ["Presentations at Conferences"]
    N --> BK["Voluntary Works"]
    BK --> BL["Description of Voluntary Work"]
    BK --> BM["Impact of Voluntary Work"]
    N --> BN["Others"]
    BN --> BO["Additional Information"]
    BO --> BP["Patents"]
    BO --> BQ["Inventories"]
    BO --> BR["Other Achievements"]
    BN --> BS["Attachments"]
    BS --> BT["Resume/CV"]
    BS --> BU["Cover Letter"]
    BS --> BV["Portfolio"]
    BS --> BW["Other Attachments"]
    BS --> BX["File Attachments"]
    BX --> BY["Attachment 1"]
    BX --> BZ["Attachment 2"]
    BX --> CA["Attachment 3"]
    BX --> CB["Attachment 4"]
    BX --> CC["Attachment 5"]
    BX --> CD["Attachment 6"]
    BX --> CE["Attachment 7"]
    BX --> CF["Attachment 8"]
    BX --> CG["Attachment 9"]
    BX --> CH["Attachment 10"]
    BX --> CI["Attachment 11"]
    BX --> CJ["Attachment 12"]
    BX --> CK["Attachment 13"]
    BX --> CL["Attachment 14"]
    BX --> CM["Attachment 15"]
    BX --> CN["Attachment 16"]
    BX --> CO["Attachment 17"]
    BX --> CP["Attachment 18"]
    BX --> CQ["Attachment 19"]
    BX --> CR["Attachment 20"]
    BX --> CS["Attachment 21"]
    BX --> CT["Attachment 22"]
    BX --> CU["Attachment 23"]
    BX --> CV["Attachment 24"]
    BX --> CW["Attachment 25"]
    BX --> CX["Attachment 26"]
    BX --> CY["Attachment 27"]
    BX --> CZ["Attachment 28"]
    BX --> DA["Attachment 29"]
    BX --> DB["Attachment 30"]
    BX --> DC["Attachment 31"]
    BX --> DD["Attachment 32"]
    BX --> DE["Attachment 33"]
    BX --> DF["Attachment 34"]
    BX --> DG["Attachment 35"]
    BX --> DH["Attachment 36"]
    BX --> DI["Attachment 37"]
    BX --> DJ["Attachment 38"]
    BX --> DK["Attachment 39"]
    BX --> DL["Attachment 40"]
    BX --> DM["Attachment 41"]
    BX --> DN["Attachment 42"]
    BX --> DO["Attachment 43"]
    BX --> DP["Attachment 44"]
    BX --> DQ["Attachment 45"]
    BX --> DR["Attachment 46"]
    BX --> DS["Attachment 47"]
    BX --> DT["Attachment 48"]
    BX --> DU["Attachment 49"]
    BX --> DV["Attachment 50"]
    BX --> DW["Attachment 51"]
    BX --> DX["Attachment 52"]
    BX --> DY["Attachment 53"]
    BX --> DZ["Attachment 54"]
    BX --> EZ["Attachment 55"]
    BX --> FA["Attachment 56"]
    BX --> FB["Attachment 57"]
    BX --> FC["Attachment 58"]
    BX --> FD["Attachment 59"]
    BX --> FE["Attachment 60"]
    BX --> FG["Attachment 61"]
    BX --> FH["Attachment 62"]
    BX --> FI["Attachment 63"]
    BX --> FJ["Attachment 64"]
    BX --> FK["Attachment 65"]
    BX --> FL["Attachment 66"]
    BX --> FM["Attachment 67"]
    BX --> FN["Attachment 68"]
    BX --> FO["Attachment 69"]
    BX --> FP["Attachment 70"]
    BX --> FQ["Attachment 71"]
    BX --> FR["Attachment 72"]
    BX --> FS["Attachment 73"]
    BX --> FT["Attachment 74"]
    BX --> FU["Attachment 75"]
    BX --> FV["Attachment 76"]
    BX --> FW["Attachment 77"]
    BX --> FX["Attachment 78"]
    BX --> FY["Attachment 79"]
    BX --> FZ["Attachment 80"]
    BX --> GA["Attachment 81"]
    BX --> GB["Attachment 82"]
    BX --> GC["Attachment 83"]
    BX --> GD["Attachment 84"]
    BX --> GE["Attachment 85"]
    BX --> GF["Attachment 86"]
    BX --> GG["Attachment 87"]
    BX --> GH["Attachment 88"]
    BX --> GI["Attachment 89"]
    BX --> GJ["Attachment 90"]
    BX --> GK["Attachment 91"]
    BX --> GL["Attachment 92"]
    BX --> GM["Attachment 93"]
    BX --> GN["Attachment 94"]
    BX --> GO["Attachment 95"]
    BX --> GP["Attachment 96"]
    BX --> GQ["Attachment 97"]
    BX --> GR["Attachment 98"]
    BX --> GS["Attachment 99"]
    BX --> GT["Attachment 100"]
    BX --> GU["Attachment 101"]
    BX --> GV["Attachment 102"]
    BX --> GW["Attachment 103"]
    BX --> GX["Attachment 104"]
    BX --> GY["Attachment 105"]
    BX --> GZ["Attachment 106"]
    BX --> HA["Attachment 107"]
    BX --> HB["Attachment 108"]
    BX --> HC["Attachment 109"]
    BX --> HD["Attachment 110"]
    BX --> HE["Attachment 111"]
    BX --> HF["Attachment 112"]
    BX --> HG["Attachment 113"]
    BX --> HI["Attachment 114"]
    BX --> HJ["Attachment 115"]
    BX --> HK["Attachment 116"]
    BX --> HL["Attachment 117"]
    BX --> HM["Attachment 118"]
    BX --> HN["Attachment 119"]
    BX --> HO["Attachment 120"]
    BX --> HP["Attachment 121"]
    BX --> HQ["Attachment 122"]
    BX --> HR["Attachment 123"]
    BX --> HS["Attachment 124"]
    BX --> HT["Attachment 125"]
    BX --> IU["Attachment 126"]
    BX --> IV["Attachment 127"]
    BX --> IW["Attachment 128"]
    BX --> IX["Attachment 129"]
    BX --> IY["Attachment 130"]
    BX --> IZ["Attachment 131"]
    BX --> JA["Attachment 132"]
    BX --> JB["Attachment 133"]
    BX --> JC["Attachment 134"]
    BX --> JD["Attachment 135"]
    BX --> JE["Attachment 136"]
    BX --> JF["Attachment 137"]
    BX --> JG["Attachment 138"]
    BX --> JH["Attachment 139"]
    BX --> JJ["Attachment 140"]
    BX --> JK["Attachment 141"]
    BX --> JL["Attachment 142"]
    BX --> JM["Attachment 143"]
    BX --> JN["Attachment 144"]
    BX --> JO["Attachment 145"]
    BX --> JP["Attachment 146"]
    BX --> JR["Attachment 147"]
    BX --> JS["Attachment 148"]
    BX --> JT["Attachment 149"]
    BX --> JU["Attachment 150"]
    BX --> JV["Attachment 151"]
    BX --> JW["Attachment 152"]
    BX --> JX["Attachment 153"]
    BX --> JY["Attachment 154"]
    BX --> JZ["Attachment 155"]
    BX --> KA["Attachment 156"]
    BX --> KB["Attachment 157"]
    BX --> KC["Attachment 158"]
    BX --> KD["Attachment 159"]
    BX --> KE["Attachment 160"]
    BX --> LF["Attachment 161"]
    BX --> LG["Attachment 162"]
    BX --> LH["Attachment 163"]
    BX --> LI["Attachment 164"]
    BX --> LJ["Attachment 165"]
    BX --> LM["Attachment 166"]
    BX --> LN["Attachment 167"]
    BX --> LO["Attachment 168"]
    BX --> LP["Attachment 169"]
    BX --> LQ["Attachment 170"]
    BX --> LR["Attachment 171"]
    BX --> LS["Attachment 172"]
    BX --> LT["Attachment 173"]
    BX --> LU["Attachment 174"]
    BX --> LV["Attachment 175"]
    BX --> LW["Attachment 176"]
    BX --> LX["Attachment 177"]
    BX --> LY["Attachment 178"]
    BX --> LZ["Attachment 179"]
    BX --> MA["Attachment 180"]
    BX --> MB["Attachment 181"]
    BX --> MC["Attachment 182"]
    BX --> MD["Attachment 183"]
    BX --> ME["Attachment 184"]
    BX --> MF["Attachment 185"]
    BX --> MG["Attachment 186"]
    BX --> MH["Attachment 187"]
    BX --> MI["Attachment 188"]
    BX --> MJ["Attachment 189"]
    BX --> MK["Attachment 190"]
    BX --> ML["Attachment 191"]
    BX --> MN["Attachment 192"]
    BX --> MO["Attachment 193"]
    BX --> MP["Attachment 194"]
    BX --> MQ["Attachment 195"]
    BX --> MR["Attachment 196"]
    BX --> MS["Attachment 197"]
    BX --> MT["Attachment 198"]
    BX --> MU["Attachment 199"]
    BX --> MV["Attachment 200"]
    BX --> MW["Attachment 201"]
    BX --> MX["Attachment 202"]
    BX --> MY["Attachment 203"]
    BX --> NZ["Attachment 204"]
    BX --> OA["Attachment 205"]
    BX --> OB["Attachment 206"]
    BX --> OC["Attachment 207"]
    BX --> OD["Attachment 208"]
    BX --> OE["Attachment 209"]
    BX --> OF["Attachment 210"]
    BX --> OG["Attachment 211"]
    BX --> OH["Attachment 212"]
    BX --> OI["Attachment 213"]
    BX --> OJ["Attachment 214"]
    BX --> OK["Attachment 215"]
    BX --> OL["Attachment 216"]
    BX --> OM["Attachment 217"]
    BX --> ON["Attachment 218"]
    BX --> OO["Attachment 219"]
    BX --> OP["Attachment 220"]
    BX --> OQ["Attachment 221"]
    BX --> OR["Attachment 222"]
    BX --> OS["Attachment 223"]
    BX --> OT["Attachment 224"]
    BX --> OU["Attachment 225"]
    BX --> OV["Attachment 226"]
    BX --> OW["Attachment 227"]
    BX --> OX["Attachment 228"]
    BX --> OY["Attachment 229"]
    BX --> OZ["Attachment 230"]
    BX --> PA["Attachment 231"]
    BX --> PB["Attachment 232"]
    BX --> PC["Attachment 233"]
    BX --> PD["Attachment 234"]
    BX --> PE["Attachment 235"]
    BX --> PF["Attachment 236"]
    BX --> PG["Attachment 237"]
    BX --> PH["Attachment 238"]
    BX --> PI["Attachment 239"]
    BX --> PJ["Attachment 240"]
    BX --> PK["Attachment 241"]
    BX --> PL["Attachment 242"]
    BX --> PM["Attachment 243"]
    BX --> PN["Attachment 244"]
    BX --> PO["Attachment 245"]
    BX --> PP["Attachment 246"]
    BX --> PQ["Attachment 247"]
    BX --> PR["Attachment 248"]
    BX --> PS["Attachment 249"]
    BX --> PT["Attachment 250"]
    BX --> PU["Attachment 251"]
    BX --> PV["Attachment 252"]
    BX --> PW["Attachment 253"]
    BX --> PX["Attachment 254"]
    BX --> PY["Attachment 255"]
    BX --> PZ["Attachment 256"]
    BX --> QA["Attachment 257"]
    BX --> QB["Attachment 258"]
    BX --> QC["Attachment 259"]
    BX --> QD["Attachment 260"]
    BX --> QE["Attachment 261"]
    BX --> QF["Attachment 262"]
    BX --> QG["Attachment 263"]
    BX --> QH["Attachment 264"]
    BX --> QI["Attachment 265"]
    BX --> QJ["Attachment 266"]
    BX --> QK["Attachment 267"]
    BX --> QL["Attachment 268"]
    BX --> QM["Attachment 269"]
    BX --> QN["Attachment 270"]
    BX --> QO["Attachment 271"]
    BX --> QQ["Attachment 272"]
    BX --> QR["Attachment 273"]
    BX --> QS["Attachment 274"]
    BX --> QT["Attachment 275"]
    BX --> QU["Attachment 276"]
    BX --> QV["Attachment 277"]
    BX --> QW["Attachment 278"]
    BX --> QX["Attachment 279"]
    BX --> QY["Attachment 280"]
    BX --> QZ["Attachment 281"]
    BX --> RA["Attachment 282"]
    BX --> RB["Attachment 283"]
    BX --> RC["Attachment 284"]
    BX --> RD["Attachment 285"]
    BX --> RE["Attachment 286"]
    BX --> RF["Attachment 287"]
    BX --> RG["Attachment 288"]
    BX --> RH["Attachment 289"]
    BX --> RI["Attachment 290"]
    BX --> RJ["Attachment 291"]
    BX --> RK["Attachment 292"]
    BX --> RL["Attachment 293"]
    BX --> RM["Attachment 294"]
    BX --> RN["Attachment 295"]
    BX --> RO["Attachment 296"]
    BX --> RP["Attachment 297"]
    BX --> RQ["Attachment 298"]
    BX --> RR["Attachment 299"]
    BX --> RS["Attachment 300"]
    BX --> RT["Attachment 301"]
    BX --> RU["Attachment 302"]
    BX --> RV["Attachment 303"]
    BX --> RW["Attachment 304"]
    BX --> RX["Attachment 305"]
    BX --> RY["Attachment 306"]
    BX --> RZ["Attachment 307"]
    BX --> SA["Attachment 308"]
    BX --> SB["Attachment 309"]
    BX --> SC["Attachment 310"]
    BX --> SD["Attachment 311"]
    BX --> SE["Attachment 312"]
    BX --> SF["Attachment 313"]
    BX --> SG["Attachment 314"]
    BX --> SH["Attachment 315"]
    BX --> SI["Attachment 316"]
    BX --> SJ["Attachment 317"]
    BX --> SK["Attachment 318"]
    BX --> SL["Attachment 319"]
    BX --> SM["Attachment 320"]
    BX --> SN["Attachment 321"]
    BX --> SO["Attachment 322"]
    BX --> SP["Attachment 323"]
    BX --> SQ["Attachment 324"]
    BX --> SR["Attachment 325"]
    BX --> SS["Attachment 326"]
    BX --> ST["Attachment 327"]
    BX --> SU["Attachment 328"]
    BX --> SV["Attachment 329"]
    BX --> SW["Attachment 330"]
    BX --> SX["Attachment 331"]
    BX --> SY["Attachment 332"]
    BX --> SZ["Attachment 333"]
    BX --> TA["Attachment 334"]
    BX --> TB["Attachment 335"]
    BX --> TC["Attachment 336"]
    BX --> TD["Attachment 337"]
    BX --> TE["Attachment 338"]
    BX --> TF["Attachment 339"]
    BX --> TG["Attachment 340"]
    BX --> TH["Attachment 341"]
    BX --> TI["Attachment 342"]
    BX --> TJ["Attachment 343"]
    BX --> TK["Attachment 344"]
    BX --> TL["Attachment 345"]
    BX --> TM["Attachment 346"]
    BX --> TN["Attachment 347"]
    BX --> TO["Attachment 348"]
    BX --> TP["Attachment 349"]
    BX --> TQ["Attachment 350"]
    BX --> TR["Attachment 351"]
    BX --> TS["Attachment 352"]
    BX --> TT["Attachment 353"]
    BX --> TU["Attachment 354"]
    BX --> TV["Attachment 355"]
    BX --> TW["Attachment 356"]
    BX --> TX["Attachment 357"]
    BX --> TY["Attachment 358"]
    BX --> TZ["Attachment 359"]
    BX --> UA["Attachment 360"]
    BX --> UB["Attachment 361"]
    BX --> UC["Attachment 362"]
    BX --> UD["Attachment 363"]
    BX --> UE["Attachment 364"]
    BX --> UF["Attachment 365"]
    BX --> VG["Attachment 366"]
    BX --> VH["Attachment 367"]
    BX --> VI["Attachment 368"]
    BX --> VJ["Attachment 369"]
    BX --> VK["Attachment 370"]
    BX --> VL["Attachment 371"]
    BX --> VM["Attachment 372"]
    BX --> VN["Attachment 373"]
    BX --> VO["Attachment 374"]
    BX --> VP["Attachment 375"]
    BX --> VQ["Attachment 376"]
    BX --> VR["Attachment 377"]
    BX --> VS["Attachment 378"]
    BX --> VT["Attachment 379"]
    BX --> VU["Attachment 380"]
    BX --> VW["Attachment 381"]
    BX --> VX["Attachment 382"]
    BX --> VY["Attachment 383"]
    BX --> VZ["Attachment 384"]
    BX --> WA["Attachment 385"]
    BX --> WB["Attachment 386"]
    BX --> WC["Attachment 387"]
    BX --> WD["Attachment 388"]
    BX --> WE["Attachment 389"]
    BX --> WF["Attachment 390"]
    BX --> WG["Attachment 391"]
    BX --> WH["Attachment 392"]
    BX --> WI["Attachment 393"]
    BX --> WJ["Attachment 394"]
    BX --> WK["Attachment 395"]
    BX --> WL["Attachment 396"]
    BX --> WM["Attachment 397"]
    BX --> WN["Attachment 398"]
    BX --> WO["Attachment 399"]
    BX --> WP["Attachment 400"]
    BX --> WQ["Attachment 401"]
    BX --> WR["Attachment 402"]
    BX --> WS["Attachment 403"]
    BX --> WT["Attachment 404"]
    BX --> WU["Attachment 405"]
    BX --> WV["Attachment 406"]
    BX --> WX["Attachment 407"]
    BX --> WY["Attachment 408"]
    BX --> WZ["Attachment 409"]
    BX --> YA["Attachment 410"]
    BX --> YB["Attachment 411"]
    BX --> YC["Attachment 412"]
    BX --> YD["Attachment 413"]
    BX --> YE["Attachment 414"]
    BX --> YF["Attachment 415"]
    BX --> YG["Attachment 416"]
    BX --> YH["Attachment 417"]
    BX --> YI["Attachment 418"]
    BX --> YJ["Attachment 419"]
    BX --> YK["Attachment 420"]
    BX --> YL["Attachment 421"]
    BX --> YM["Attachment 422"]
    BX --> YN["Attachment 423"]
    BX --> YO["Attachment 424"]
    BX --> YP["Attachment 425"]
    BX --> YQ["Attachment 426"]
    BX --> YR["Attachment 427"]
    BX --> YS["Attachment 428"]
    BX --> YT["Attachment 429"]
    BX --> YU["Attachment 430"]
    BX --> YV["Attachment 431"]
    BX --> YW["Attachment 432"]
    BX --> YX["Attachment 433"]
    BX --> YY["Attachment 434"]
    BX --> YZ["Attachment 435"]
    BX --> ZA["Attachment 436"]
    BX --> ZB["Attachment 437"]
    BX --> ZC["Attachment 438"]
    BX --> ZD["Attachment 439"]
    BX --> ZE["Attachment 440"]
    BX --> ZF["Attachment 441"]
    BX --> ZG["Attachment 442"]
    BX --> ZH["Attachment 443"]
    BX --> ZI["Attachment 444"]
    BX --> ZJ["Attachment 445"]
    BX --> ZK["Attachment 446"]
    BX --> ZL["Attachment 447"]
    BX --> ZM["Attachment 448"]
    BX --> ZN["Attachment 449"]
    BX --> ZO["Attachment 450"]
    BX --> ZP["Attachment 451"]
    BX --> ZQ["Attachment 452"]
    BX --> ZR["Attachment 453"]
    BX --> ZS["Attachment 454"]
    BX --> ZT["Attachment 455"]
    BX --> ZU["Attachment 456"]
    BX --> ZV["Attachment 457"]
    BX --> ZW["Attachment 458"]
    BX --> ZX["Attachment 459"]
    BX --> ZY["Attachment 460"]
    BX --> ZZ["Attachment 461"]
    BX --> AA1["Attachment 462"]
    BX --> AB1["Attachment 463"]
    BX --> AC1["Attachment 464"]
    BX --> AD1["Attachment 465"]
    BX --> AE1["Attachment 466"]
    BX --> AF1["Attachment 467"]
    BX --> AG1["Attachment 468"]
    BX --> AH1["Attachment 469"]
    BX --> AI1["Attachment 470"]
    BX --> AJ1["Attachment 471"]
    BX --> AK1["Attachment 472"]
    BX --> AL1["Attachment 473"]
    BX --> AM1["Attachment 474"]
    BX --> AN1["Attachment 475"]
    BX --> AO1["Attachment 476"]
    BX --> AP1["Attachment 477"]
    BX --> AQ1["Attachment 478"]
    BX --> AR1["Attachment 479"]
    BX --> AS1["Attachment 480"]
    BX --> AT1["Attachment 481"]
    BX --> AU1["Attachment 482"]
    BX --> AV1["Attachment 483"]
    BX --> AW1["Attachment 484"]
    BX --> AX1["Attachment 485"]
    BX --> AY1["Attachment 486"]
    BX --> AZ1["Attachment 487"]
    BX --> BA1["Attachment 488"]
    BX --> BB1["Attachment 489"]
    BX --> BC1["Attachment 490"]
    BX --> BD1["Attachment 491"]
    BX --> BE1["Attachment 492"]
    BX --> BF1["Attachment 493"]
    BX --> BG1["Attachment 494"]
    BX --> BH1["Attachment 495"]
    BX --> BI1["Attachment 496"]
    BX --> BJ1["Attachment 497"]
    BX --> BK1["Attachment 498"]
    BX --> BL1["Attachment 499"]
    BX --> BM1["Attachment 500"]
    BX --> BN1["Attachment 501"]
    BX --> BO1["Attachment 502"]
    BX --> BP1["Attachment 503"]
    BX --> BQ1["Attachment 504"]
    BX --> BR1["Attachment 505"]
    BX --> BS1["Attachment 506"]
    BX --> BT1["Attachment 507"]
    BX --> BU1["Attachment 508"]
    BX --> BV1["Attachment 509"]
    BX --> BW1["Attachment 510"]
    BX --> BX1["Attachment 511"]
    BX --> BY1["Attachment 512"]
    BX --> BZ1["Attachment 513"]
    BX --> CA1["Attachment 514"]
    BX --> CB1["Attachment 515"]
    BX --> CC1["Attachment 516"]
    BX --> CD1["Attachment 517"]
    BX --> CE1["Attachment 518"]
    BX --> CF1["Attachment 519"]
    BX --> CG1["Attachment 520"]
    BX --> CH1["Attachment 521"]
    BX --> CI1["Attachment 522"]
    BX --> CJ1["Attachment 523"]
    BX --> CK1["Attachment 524"]
    BX --> CL1["Attachment 525"]
    BX --> CM1["Attachment 526"]
    BX --> CN1["Attachment 527"]
    BX --> CO1["Attachment 528"]
    BX --> CP1["Attachment 529"]
    BX --> CQ1["Attachment 530"]
    BX --> CR1["Attachment 531"]
    BX --> CS1["Attachment 532"]
    BX --> CT1["Attachment 533"]
    BX --> CU1["Attachment 534"]
    BX --> CV1["Attachment 535"]
    BX --> CW1["Attachment 536"]
    BX --> CX1["Attachment 537"]
    BX --> CY1["Attachment 538"]
    BX --> CZ1["Attachment 539"]
    BX --> DA1["Attachment 540"]
    BX --> DB1["Attachment 541"]
    BX --> DC1["Attachment 542"]
    BX --> DD1["Attachment 543"]
    BX --> DE1["Attachment 544"]
    BX --> DF1["Attachment 545"]
    BX --> DG1["Attachment 546"]
    BX --> DH1["Attachment 547"]
    BX --> DI1["Attachment 548"]
    BX --> DJ1["Attachment 549"]
    BX --> DK1["Attachment 550"]
    BX --> DL1["Attachment 551"]
    BX --> DM1["Attachment 552"]
    BX --> DN1["Attachment 553"]
    BX --> DO1["Attachment 554"]
    BX --> DP1["Attachment 555"]
    BX --> DQ1["Attachment 556"]
    BX --> DR1["Attachment 557"]
    BX --> DS1["Attachment 558"]
    BX --> DT1["Attachment 559"]
    BX --> DU1["Attachment 560"]
    BX --> DV1["Attachment 561"]
    BX --> DW1["Attachment 562"]
    BX --> DX1["Attachment 563"]
    BX --> DY1["Attachment 564"]
    BX --> DZ1["Attachment 565"]
    BX --> EA1["Attachment 566"]
    BX --> EB1["Attachment 567"]
    BX --> EC1["Attachment 568"]
    BX --> ED1["Attachment 569"]
    BX --> EE1["Attachment 570"]
    BX --> EF1["Attachment 571"]
    BX --> EG1["Attachment 572"]
    BX --> EH1["Attachment 573"]
    BX --> EI1["Attachment 574"]
    BX --> EJ1["Attachment 575"]
    BX --> EK1["Attachment 576"]
    BX --> EL1["Attachment 577"]
    BX --> EM1["Attachment 578"]
    BX --> EN1["Attachment 579"]
    BX --> EO1["Attachment 580"]
    BX --> EP1["Attachment 581"]
    BX --> EQ1["Attachment 582"]
    BX --> ER1["Attachment 583"]
    BX --> ES1["Attachment 584"]
    BX --> ET1["Attachment 585"]
    BX --> EU1["Attachment 586"]
    BX --> EV1["Attachment 587"]
    BX --> EW1["Attachment 588"]
    BX --> EX1["Attachment 589"]
    BX --> EY1["Attachment 590"]
    BX --> EZ1["Attachment 591"]
    BX --> FA1["Attachment 592"]
    BX --> FB1["Attachment 593"]
    BX --> FC1["Attachment 594"]
    BX --> FD1["Attachment 595"]
    BX --> FE1["Attachment 596"]
    BX --> FF1["Attachment 597"]
    BX --> FG1["Attachment 598"]
    BX --> FH1["Attachment 599"]
    BX --> FI1["Attachment 600"]
    BX --> FJ1["Attachment 601"]
    BX --> FK1["Attachment 602"]
    BX --> FL1["Attachment 603"]
    BX --> FM1["Attachment 604"]
    BX --> FN1["Attachment 605"]
    BX --> FO1["Attachment 606"]
    BX --> FP1["Attachment 607"]
    BX --> FQ1["Attachment 608"]
    BX --> FR1["Attachment 609"]
    BX --> FS1["Attachment 610"]
    BX --> FT1["Attachment 611"]
    BX --> FU1["Attachment 612"]
    BX --> FV1["Attachment 613"]
    BX --> FW1["Attachment 614"]
    BX --> FX1["Attachment 615"]
    BX --> FY1["Attachment 616"]
    BX --> FZ1["Attachment 617"]
    BX --> GA1["Attachment 618"]
    BX --> GB1["Attachment 619"]
    BX --> GC1["Attachment 620"]
    BX --> GD1["Attachment 621"]
    BX --> GE1["Attachment 622"]
    BX --> GF1["Attachment 623"]
    BX --> GG1["Attachment 624"]
    BX --> GH1["Attachment 625"]
    BX --> GI1["Attachment 626"]
    BX --> GJ1["Attachment 627"]
    BX --> GK1["Attachment 628"]
    BX --> GL1["Attachment 629"]
    BX --> GM1["Attachment 630"]
    BX --> GN1["Attachment 631"]
    BX --> GO1["Attachment 632"]
    BX --> GP1["Attachment 633"]
    BX --> GQ1["Attachment 634"]
    BX --> GR1["Attachment 635"]
    BX --> GS1["Attachment 636"]
    BX --> GT1["Attachment 637"]
    BX --> GU1["Attachment 638"]
    BX --> GV1["Attachment 639"]
    BX --> GW1["Attachment 640"]
    BX --> GX1["Attachment 641"]
    BX --> GY1["Attachment 642"]
    BX --> GZ1["Attachment 643"]
    BX --> HA1["Attachment 644"]
    BX --> HB1["Attachment 645"]
    BX --> HC1["Attachment 646"]
    BX --> HD1["Attachment 647"]
    BX --> HE1["Attachment 648"]
    BX --> HF1["Attachment 649"]
    BX --> HG1["Attachment 650"]
    BX --> HI1["Attachment 651"]
    BX --> HJ1["Attachment 652"]
    BX --> HK1["Attachment 653"]
    BX --> HL1["Attachment 654"]
    BX --> HM1["Attachment 655"]
    BX --> HN1["Attachment 656"]
    BX --> HO1["Attachment 657"]
    BX --> HP1["Attachment 658"]
    BX --> HQ1["Attachment 659"]
    BX --> HR1["Attachment 660"]
    BX --> HS1["Attachment 661"]
    BX --> HT1["Attachment 662"]
    BX --> IU1["Attachment 663"]
    BX --> IV1["Attachment 664"]
    BX --> IW1["Attachment 665"]
    BX --> IX1["Attachment 666"]
    BX --> IY1["Attachment 667"]
    BX --> IZ1["Attachment 668"]
    BX --> JA1["Attachment 669"]
    BX --> JB1["Attachment 670"]
    BX --> JC1["Attachment 671"]
    BX --> JD1["Attachment 672"]
    BX --> JE1["Attachment 673"]
    BX --> JF1["Attachment 674"]
    BX --> JG1["Attachment 675"]
    BX --> JH1["Attachment 676"]
    BX --> JJ1["Attachment 677"]
    BX --> JK1["Attachment 678"]
    BX --> JL1["Attachment 679"]
    BX --> JM1["Attachment 680"]
    BX --> JN1["Attachment 681"]
    BX --> JO1["Attachment 682"]
    BX --> JP1["Attachment 683"]
    BX --> JR1["Attachment 684"]
    BX --> JS1["Attachment 685"]
    BX --> JT1["Attachment 686"]
    BX --> JU1["Attachment 687"]
    BX --> JV1["Attachment 688"]
    BX --> JW1["Attachment 689"]
    BX --> JX1["Attachment 690"]
    BX --> JY1["Attachment 691"]
    BX --> JZ1["Attachment 692"]
    BX --> KA1["Attachment 693"]
    BX --> KB1["Attachment 694"]
    BX --> KC1["Attachment 695"]
    BX --> KD1["Attachment 696"]
    BX --> KE1["Attachment 697"]
    BX --> LF1["Attachment 698"]
    BX --> LG1["Attachment 699"]
    BX --> LH1["Attachment 700"]
    BX --> LI1["Attachment 701"]
    BX --> LJ1["Attachment 702"]
    BX --> LM1["Attachment 703"]
    BX --> LN1["Attachment 704"]
    BX --> LO1["Attachment 705"]
    BX --> LP1["Attachment 706"]
    BX --> LQ1["Attachment 707"]
    BX --> LR1["Attachment 708"]
    BX --> LS1["Attachment 709"]
    BX --> LT1["Attachment 710"]
    BX --> LU1["Attachment 711"]
    BX --> LV1["Attachment 712"]
    BX --> LW1["Attachment 713"]
    BX --> LX1["Attachment 714"]
    BX --> LY1["Attachment 715"]
    BX --> LZ1["Attachment 716"]
    BX --> MA1["Attachment 717"]
    BX --> MB1["Attachment 718"]
    BX --> MC1["Attachment 719"]
    BX --> MD1["Attachment 720"]
    BX --> ME1["Attachment 721"]
    BX --> MF1["Attachment 722"]
    BX --> MG1["Attachment 723"]
    BX --> MH1["Attachment 724"]
    BX --> MI1["Attachment 725"]
    BX --> MJ1["Attachment 726"]
    BX --> MK1["Attachment 727"]
    BX --> ML1["Attachment 728"]
    BX --> MM1["Attachment 729"]
    BX --> MN1["Attachment 730"]
    BX --> MO1["Attachment 731"]
    BX --> MP1["Attachment 732"]
    BX --> MQ1["Attachment 733"]
    BX --> MR1["Attachment 734"]
    BX --> MS1["Attachment 735"]
    BX --> MT1["Attachment 736"]
    BX --> MU1["Attachment 737"]
    BX --> MV1["Attachment 738"]
    BX --> MW1["Attachment 739"]
    BX --> MX1["Attachment 740"]
    BX --> MY1["Attachment 741"]
    BX --> NZ1["Attachment 742"]
    BX --> OA1["Attachment 743"]
    BX --> OB1["Attachment 744"]
    BX --> OC1["Attachment 745"]
    BX --> OD1["Attachment 746"]
    BX --> OE1["Attachment 747"]
    BX --> OF1["Attachment 748"]
    BX --> OG1["Attachment 749"]
    BX --> OH1["Attachment 750"]
    BX --> OI1["Attachment 751"]
    BX --> OJ1["Attachment 752"]
    BX --> OK1["Attachment 753"]
    BX --> OL1["Attachment 754"]
    BX --> OM1["Attachment 755"]
    BX --> ON1["Attachment 756"]
    BX --> OO1["Attachment 757"]
    BX --> OP1["Attachment 758"]
    BX --> OQ1["Attachment 759"]
    BX --> OR1["Attachment 760"]
    BX --> OS1["Attachment 761"]
    BX --> OT1["Attachment 762"]
    BX --> OU1["Attachment 763"]
    BX --> OV1["Attachment 764"]
    BX --> OW1["Attachment 765"]
    BX --> OX1["Attachment 766"]
    BX --> OY1["Attachment 767"]
    BX --> OZ1["Attachment 768"]
    BX --> PA1["Attachment 769"]
    BX --> PB1["Attachment 770"]
    BX --> PC1["Attachment 771"]
    BX --> PD1["Attachment 772"]
    BX --> PE1["Attachment 773"]
    BX --> PF1["Attachment 774"]
    BX --> PG1["Attachment 775"]
    BX --> PH1["Attachment 776"]
    BX --> PI1["Attachment 777"]
    BX --> PJ1["Attachment 778"]
    BX --> PK1["Attachment 779"]
    BX --> PL1["Attachment 780"]
    BX --> PM1["Attachment 781"]
    BX --> PN1["Attachment 782"]
    BX --> PO1["Attachment 783"]
    BX --> PP1["Attachment 784"]
    BX --> PQ1["Attachment 785"]
    BX --> PR1["Attachment 786"]
    BX --> PS1["Attachment 787"]
    BX --> PT1["Attachment 788"]
    BX --> PU1["Attachment 789"]
    BX --> PV1["Attachment 790"]
    BX --> PW1["Attachment 791"]
    BX --> PX1["Attachment 792"]
    BX --> PY1["Attachment 793"]
    BX --> PZ1["Attachment 794"]
    BX --> QA1["Attachment 795"]
    BX --> QB1["Attachment 796"]
    BX --> QC1["Attachment 797"]
    BX --> QD1["Attachment 798"]
    BX --> QE1["Attachment 799"]
    BX --> QF1["Attachment 800"]
    BX --> QG1["Attachment 801"]
    BX --> QH1["Attachment 802"]
    BX --> QI1["Attachment 803"]
    BX --> QJ1["Attachment 804"]
    BX --> QK1["Attachment 805"]
    BX --> QL1["Attachment 806"]
    BX --> QM1["Attachment 807"]
    BX --> QN1["Attachment 808"]
    BX --> QO1["Attachment 809"]
    BX --> QQ1["Attachment 810"]
    BX --> QR1["Attachment 811"]
    BX --> QS1["Attachment 812"]
    BX --> QT1["Attachment 813"]
    BX --> QU1["Attachment 814"]
    BX --> QV1["Attachment 815"]
    BX --> QW1["Attachment 816"]
    BX --> QX1["Attachment 817"]
    BX --> QY1["Attachment 818"]
    BX --> QZ1["Attachment 819"]
    BX --> RA1["Attachment 820"]
    BX --> RB1["Attachment 821"]
    BX --> RC1["Attachment 822"]
    BX --> RD1["Attachment 823"]
    BX --> RE1["Attachment 824"]
    BX --> RF1["Attachment 825"]
    BX --> RG1["Attachment 826"]
    BX --> RH1["Attachment 827"]
    BX --> RI1["Attachment 828"]
    BX --> RJ1["Attachment 829"]
    BX --> RK1["Attachment 830"]
    BX --> RL1["Attachment 831"]
    BX --> RM1["Attachment 832"]
    BX --> RN1["Attachment 833"]
    BX --> RO1["Attachment 834"]
    BX --> RP1["Attachment 835"]
    BX --> RQ1["Attachment 836"]
    BX --> RR1["Attachment 837"]
    BX --> RS1["Attachment 838"]
    BX --> RT1["Attachment 839"]
    BX --> RU1["Attachment 840"]
    BX --> RV1["Attachment 841"]
    BX --> RW1["Attachment 842"]
    BX --> RX1["Attachment 843"]
    BX --> RY1["Attachment 844"]
    BX --> RZ1["Attachment 845"]
    BX --> SA1["Attachment 846"]
    BX --> SB1["Attachment 847"]
    BX --> SC1["Attachment 848"]
    BX --> SD1["Attachment 849"]
    BX --> SE1["Attachment 850"]
    BX --> SF1["Attachment 851"]
    BX --> SG1["Attachment 852"]
    BX --> SH1["Attachment 853"]
    BX --> SI1["Attachment 854"]
    BX --> SJ1["Attachment 855"]
    BX --> SK1["Attachment 856"]
    BX --> SL1["Attachment 857"]
    BX --> SM1["Attachment 858"]
    BX --> SN1["Attachment 859"]
    BX --> SO1["Attachment 860"]
    BX --> SP1["Attachment 861"]
    BX --> SQ1["Attachment 862"]
    BX --> SR1["Attachment 863"]
    BX --> SS1["Attachment 864"]
    BX --> ST1["Attachment 865"]
    BX --> SU1["Attachment 866"]
    BX --> SV1["Attachment 867"]
    BX --> SW1["Attachment 868"]
    BX --> SX1["Attachment 869"]
    BX --> SY1["Attachment 870"]
    BX --> SZ1["Attachment 871"]
    BX --> TA1["Attachment 872"]
    BX --> TB1["Attachment 873"]
    BX --> TC1["Attachment 874"]
    BX --> TD1["Attachment 875"]
    BX --> TE1["Attachment 876"]
    BX --> TF1["Attachment 877"]
    BX --> TG1["Attachment 878"]
    BX --> TH1["Attachment 879"]
    BX --> TI1["Attachment 880"]
    BX --> TJ1["Attachment 881"]
    BX --> TK1["Attachment 882"]
    BX --> TL1["Attachment 883"]
    BX --> TM1["Attachment 884"]
    BX --> TN1["Attachment 885"]
    BX --> TO1["Attachment 886"]
    BX --> TP1["Attachment 887"]
    BX --> TQ1["Attachment 888"]
    BX --> TR1["Attachment 889"]
    BX --> TS1["Attachment 890"]
    BX --> TT1["Attachment 891"]
    BX --> TU1["Attachment 892"]
    BX --> TV1["Attachment 893"]
    BX --> TW1["Attachment 894"]
    BX --> TX1["Attachment 895"]
    BX --> TY1["Attachment 896"]
    BX --> TZ1["Attachment 897"]
    BX --> UA1["Attachment 898"]
    BX --> UB1["Attachment 899"]
    BX --> UC1["Attachment 900"]
    BX --> UD1["Attachment 901"]
    BX --> UE1["Attachment 902"]
    BX --> UF1["Attachment 903"]
    BX --> VG1["Attachment 904"]
    BX --> VH1["Attachment 905"]
    BX --> VI1["Attachment 906"]
    BX --> VJ1["Attachment 907"]
    BX --> VK1["Attachment 908"]
    BX --> VL1["Attachment 909"]
    BX --> VM1["Attachment 910"]
    BX --> VN1["Attachment 911"]
    BX --> VO1["Attachment 912"]
    BX --> VP1["Attachment 913"]
    BX --> VQ1["Attachment 914"]
    BX --> VR1["Attachment 915"]
    BX --> VS1["Attachment 916"]
    BX --> VT1["Attachment 917"]
    BX --> VU1["Attachment 918"]
    BX --> VW1["Attachment 919"]
    BX --> VX1["Attachment 920"]
    BX --> VY1["Attachment 921"]
    BX --> VZ1["Attachment 922"]
    BX --> WA1["Attachment 923"]
    BX --> WB1["Attachment 924"]
    BX --> WC1["Attachment 925"]
    BX --> WD1["Attachment 926"]
    BX --> WE1["Attachment 927"]
    BX --> WF1["Attachment 928"]
    BX --> WG1["Attachment 929"]
    BX --> WH1["Attachment 930"]
    BX --> WI1["Attachment 931"]
    BX --> WJ1["Attachment 932"]
    BX --> WK1["Attachment 933"]
    BX --> WL1["Attachment 934"]
    BX --> WM1["Attachment 935"]
    BX --> WN1["Attachment 936"]
    BX --> WO1["Attachment 937"]
    BX --> WP1["Attachment 938"]
    BX --> WQ1["Attachment 939"]
    BX --> WR1["Attachment 940"]
    BX --> WS1["Attachment 941"]
    BX --> WT1["Attachment 942"]
    BX --> WU1["Attachment 943"]
    BX --> WV1["Attachment 944"]
    BX --> WX1["Attachment 945"]
    BX --> WY1["Attachment 946"]
    BX --> WZ1["Attachment 947"]
    BX --> YA1["Attachment 948"]
    BX --> YB1["Attachment 949"]
    BX --> YC1["Attachment 950"]
    BX --> YD1["Attachment 951"]
    BX --> YE1["Attachment 952"]
    BX --> YF1["Attachment 953"]
    BX --> YG1["Attachment 954"]
    BX --> YH1["Attachment 955"]
    BX --> YI1["Attachment 956"]
    BX --> YJ1["Attachment 957"]
    BX --> YK1["Attachment 958"]
    BX --> YL1["Attachment 959"]
    BX --> YM1["Attachment 960"]
    BX --> YN1["Attachment 961"]
    BX --> YO1["Attachment 962"]
    BX --> YP1["Attachment 963"]
    BX --> YQ1["Attachment 964"]
    BX --> YR1["Attachment 965"]
    BX --> YS1["Attachment 966"]
    BX --> YT1["Attachment 967"]
    BX --> YU1["Attachment 968"]
    BX --> YV1["Attachment 969"]
    BX --> YW1["Attachment 970"]
    BX --> YX1["Attachment 971"]
    BX --> YY1["Attachment 972"]
    BX --> YZ1["Attachment 973"]
    BX --> ZA1["Attachment 974"]
    BX --> ZB1["Attachment 975"]
    BX --> ZC1["Attachment 976"]
    BX --> ZD1["Attachment 977"]
    BX --> ZE1["Attachment 978"]
    BX --> ZF1["Attachment 979"]
    BX --> ZG1["Attachment 980"]
    BX --> ZH1["Attachment 981"]
    BX --> ZI1["Attachment 982"]
    BX --> ZJ1["Attachment 983"]
    BX --> ZK1["Attachment 984"]
    BX --> ZL1["Attachment 985"]
    BX --> ZM1["Attachment 986"]
    BX --> ZN1["Attachment 987"]
    BX --> ZO1["Attachment 988"]
    BX --> ZP1["Attachment 989"]
    BX --> ZQ1["Attachment 990"]
    BX --> ZR1["Attachment 991"]
    BX --> ZS1["Attachment 992"]
    BX --> ZT1["Attachment 993"]
    BX --> IU2["Attachment 994"]
    BX --> IV2["Attachment 995"]
    BX --> IW2["Attachment 996"]
    BX

---


## Page 44

More than one profile is allowed in order to provide the information in different languages. Thus the need for cardinality 1..n.
It is the responsibility of the person who builds up the CV to make sure that a profile is expressed in the same language and those different profile language versions contain exactly the same information.

BR-COM-02:
Multiple profiles are allowed, but it must be expressed in different languages.

Sub-elements

<table>
<thead>
<tr>
<th>ID</th>
<th>Unique systemic identifiers for this Profile</th>
<th>0..1</th>
<th>BR-CV-09: If the identifier is not provided an automatic ID will be provided by the Interoperability Platform.</th>
<th>"PR-009", "ID-111", etc.</th>
</tr>
</thead>
<tbody>
<tr>
<td>ProfileName</td>
<td>A descriptive name for this Profile</td>
<td>0..1</td>
<td>N/A</td>
<td>"Profile 1. English", etc.</td>
</tr>
<tr>
<td>PersonAvailability</td>
<td>A detailed set of data about the person's availability<br>See section /CandidateProfile/PersonAvailability for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>CandidateObjective</td>
<td>Narrative description of the candidate's overall intentions</td>
<td>0..1</td>
<td>N/A</td>
<td>"Job search", etc.</td>
</tr>
<tr>
<td>ExecutiveSummary</td>
<td>Narrative summary on the person and his/her competencies normally used as the CV presentation.<br>In some cases, content may include a mark-up or might be encoded, for example, HTML content. In such cases, the content might be enclosed within a CDATA section.</td>
<td>0..1</td>
<td>N/A</td>
<td>"Presentation example", etc.</td>
</tr>
<tr>
<td>CandidateEmployerPreferences</td>
<td>Information about a candidate's employer preferences<br>See section /CandidateProfile/CandidateEmployerPreferences for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>CandidatePositionPreferences</td>
<td>Information about a candidate's preferences in a position<br>See section /CandidateProfile/CandidatePositionPreferences for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>ExperienceSummary</td>
<td>Categorisation of the candidate's Experience<br>See section /CandidateProfile/CandidateExperienceSummary for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>EmploymentHistory</td>
<td>Prior and current details of a person's employment, work, or relevant experience that can be reported on a professional profile, CV, resume, employment application, or similar document<br>See section /CandidateProfile/EmploymentHistory for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>EducationHistory</td>
<td>Information documenting a person's education, including data relevant to verifying such education, continuous education, schooling or training in preparation for work life; by extension or training obtained as an adult.<br>See section /CandidateProfile/EducationHistory for more information</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>Licenses</td>
<td>Contains details regarding one or more licenses (such as a driver's licence)</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 44 of 160&lt;/page_number&gt;

---


## Page 45

html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="3">See section /CandidateProfile/Licenses for more information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Certifications</strong></td>
      <td>Information about one or more certifications. Certifications are formal statements by an issuing authority that the certification holder has met educational or testing requirements associated with it.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/Certifications for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>MilitaryHistory</strong></td>
      <td>Information about the person's military status</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/MilitaryHistory for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>PatentHistory</strong></td>
      <td>Information about the Patents owned by the person</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/PatentHistory for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>PublicationHistory</strong></td>
      <td>Information about one or more publications text by the person</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/PublicationHistory for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>SpeakingHistory</strong></td>
      <td>Information about one or more events in which the person has spoken (as keynote speaker, for example)</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/SpeakingHistory for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>PersonQualifications</strong></td>
      <td>Information related to matching capacities, knowledge, skills, abilities, awards and other resource deployment-related characteristics (including “competencies”) offered by a candidate</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/PersonQualifications for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>OrganizationAffiliations</strong></td>
      <td>Details on one or more organisational affiliations, for example, membership in a trade or civic organisation, seat on a board of directors, membership in a union, etc.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/OrganizationAffiliations for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>EmploymentReferences</strong></td>
      <td>Contains information on one or more people who may be a source of information about a person’s skills, prior employment, character, or suitability for employment</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/EmploymentReferences for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Attachment</strong></td>
      <td>Allows for embedding or referencing external documents or digital objects</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/Attachment for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>HobbiesAndInterests</strong></td>
      <td>Information about candidate's hobbies &amp; interests.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/HobbiesAndInterests for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>CreativeWorks</strong></td>
      <td>Information about candidate's creative works and the context they were acquired</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/CreativeWorks for more information</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Projects</strong></td>
      <td>Information about candidate's projects.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```
DG EMPL 2020
&lt;page_number&gt;Page 45 of 160&lt;/page_number&gt;

---


## Page 46

html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="3">See section /CandidateProfile/Projects for more information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SocialAndPoliticalActivities</td>
      <td>Information about participation in social and political activities</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/SocialAndPoliticalActivities for more information</td>
    </tr>
    <tr>
      <td>CommunicationAndInterpersonalSkills</td>
      <td>Information about communication and Interpersonal skills. Specify in what context they were acquired.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>Good communication skills gained through my experience as a sales manager</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/CommunicationAndInterpersonalSkills for more information</td>
    </tr>
    <tr>
      <td>ManagementAndLeadershipSkills</td>
      <td>Information about candidate's management/leadership skills and the context they were acquired</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/ManagementAndLeadershipSkills for more information</td>
    </tr>
    <tr>
      <td>OrganisationalSkills</td>
      <td>Information about candidate's organisational skills and the context they were acquired</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/OrganisationalSkills for more information</td>
    </tr>
    <tr>
      <td>NetworksAndMemberships</td>
      <td>Information about candidate's memberships/involvement in professional associations, societies, political parties, sports clubs.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/NetworksAndMemberships for more information</td>
    </tr>
    <tr>
      <td>DigitalSkills</td>
      <td>Provided as free text. For example, they may write “blogging” under this section in their profile. This can be used to suggest relevant ESCO skills such as “WordPress” or “create online news content</td>
      <td>0..1</td>
      <td>Validation rule for this:<br>- - Maximum number of 99 characters<br>- - Allow adding more than one digital skill [1,n]<br>- - Cannot create two or more groups of digital skills with the same name<br>- - Cannot have two or more digital skills in the same group with the same name</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/DigitalSkills for more information</td>
    </tr>
    <tr>
      <td>ConferencesAndSeminars</td>
      <td>Describe any conferences and seminars that they may have participated in. For example, they may have presented their own work or projects, facilitated a workshop, been a panellist or an event organiser yourself, or been a member of a scientific committee, etc.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5">See section /CandidateProfile/ConferencesAndSeminars for more information</td>
    </tr>
  </tbody>
</table>
```
DG EMPL 2020
&lt;page_number&gt;Page 46 of 160&lt;/page_number&gt;

---


## Page 47

mermaid
erDiagram
    CandidateProfile ||--o{ CandidateProfileType : "It contains structured information about a candidate."
    CandidateProfileType ||--o{ BaseCandidateProfileType : "BaseCandidateProfileType (extension base)"
    BaseCandidateProfileType ||--|{ Attributes : "@ Attributes"
    Attributes ||--|{ @ languageCode : ""
    Attributes ||--|{ hr:EffectiveDateAttributeGroup : ""
    hr:EffectiveDateAttributeGroup ||--|{ @ validFrom : ""
    hr:EffectiveDateAttributeGroup ||--|{ @ validTo : ""
```

3.9.2 **CandidateProfile Attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>languageCode</b></td>
      <td>Language used throughout the whole document.<br>Only official European Country languages are allowed.</td>
      <td>0..1</td>
      <td>BR-COM-01: If not otherwise specified, “EN” (English) is used as the default language.<br>Compulsory use of the “ECV06-Language” list, ESCO Language and ESCO Classical Languages only.</td>
    </tr>
    <tr>
      <td><b>validFrom</b></td>
      <td>Validity start date for this entity’s information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td><b>validTo</b></td>
      <td>Validity end date for this entity’s information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**PersonAvailability attributes**
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/PersonAvailability for more information</td>
    </tr>
  </tbody>
</table>

**EducationHistory attributes**
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory for more information</td>
    </tr>
  </tbody>
</table>

**PersonQualifications attributes**
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/PersonQualifications for more information</td>
    </tr>
  </tbody>
</table>

**ExperienceSummary attributes**
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/ExperienceSummary for more information</td>
    </tr>
  </tbody>
</table>

**EmploymentHistory attributes**
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentHistory for more information</td>
    </tr>
  </tbody>
</table>

**EmploymentReferences attributes**
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentReferences for more information</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 47 of 160&lt;/page_number&gt;

---


## Page 48

html
<table>
  <thead>
    <tr>
      <th colspan="4">Certifications attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/Certifications for more information</td>
    </tr>
    <tr>
      <td colspan="4">CandidateEmploymentPreferences attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/CandidateEmploymentPreferences for more information</td>
    </tr>
    <tr>
      <td colspan="4">CandidatePositionPreferences attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/CandidatePositionPreferences for more information</td>
    </tr>
    <tr>
      <td colspan="4">Licenses attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Licenses for more information</td>
    </tr>
    <tr>
      <td colspan="4">MilitaryHistory attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/MilitaryHistory for more information</td>
    </tr>
    <tr>
      <td colspan="4">PatentHistory attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/PatentHistory for more information</td>
    </tr>
    <tr>
      <td colspan="4">PublicationHistory attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/PublicationHistory for more information</td>
    </tr>
    <tr>
      <td colspan="4">OrganizationAffiliations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/OrganizationAffiliations for more information</td>
    </tr>
    <tr>
      <td colspan="4">SpeakingHistory attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/SpeakingHistory for more information</td>
    </tr>
    <tr>
      <td colspan="4">ID attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to IndentifierType attributes for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4">ProfileName attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4">ExecutiveSummary attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4">Attachment attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Attachment for more information</td>
    </tr>
    <tr>
      <td colspan="4">HobbiesAndInterests attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/HobbiesAndInterests for more information</td>
    </tr>
    <tr>
      <td colspan="4">CreativeWorks attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/CreativeWorks for more information</td>
    </tr>
    <tr>
      <td colspan="4">Projects attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Projects for more information</td>
    </tr>
    <tr>
      <td colspan="4">SocialAndPoliticalActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/SocialAndPoliticalActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">CommunicationAndInterpersonalSkills attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/CommunicationAndInterpersonalSkills for more information</td>
    </tr>
    <tr>
      <td colspan="4">ManagementAndLeadershipSkills attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/ManagementAndLeadershipSkills for more information</td>
    </tr>
    <tr>
      <td colspan="4">ProfessionalDevelopment attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/ProfessionalDevelopment for more information</td>
    </tr>
    <tr>
      <td colspan="4">Education attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Education for more information</td>
    </tr>
    <tr>
      <td colspan="4">WorkExperience attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/WorkExperience for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerWork attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerWork for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerService attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerService for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerOrganizations for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerActivities attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerActivities for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerPositions attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/VolunteerPositions for more information</td>
    </tr>
    <tr>
      <td colspan="4">VolunteerOrganizations attributes</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td

---


## Page 49

mermaid
erDiagram
    eures : eures:PersonAvailabilityType (restriction base)
    eures : eures:PersonAvailabilityType {
        0..* AvailabilityDates
        hr:NoticePeriodMeasure
        hr:ImmediateStartIndicator
    }
    eures : eures:PersonAvailabilityType {
        0..* eures:AvailabilityDates
        hr:NoticePeriodMeasure
        hr:ImmediateStartIndicator
    }
```

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/ManagementAndLeadershipSkills for more information</td>
</tr>
<tr>
<td colspan="4"><strong>OrganisationalSkills attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/OrganisationalSkills for more information</td>
</tr>
<tr>
<td colspan="4"><strong>NetworksAndMemberships attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/NetworksAndMemberships for more information</td>
</tr>
<tr>
<td colspan="4"><strong>DigitalSkills attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/DigitalSkills for more information</td>
</tr>
<tr>
<td colspan="4"><strong>ConferencesAndSeminars attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/ConferencesAndSeminars for more information</td>
</tr>
<tr>
<td colspan="4"><strong>Others attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/Others for more information</td>
</tr>
</tbody>
</table>

## 3.10 /CandidateProfile/PersonAvailability (level 2)

### 3.10.1 PersonAvailability Element Description

&lt;img&gt;ER Diagram showing PersonAvailabilityType with sub-elements AvailabilityDates, NoticePeriodMeasure, ImmediateStartIndicator&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>PersonAvailability</strong></td>
<td>Detailed set of data about the person's availability</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>AvailabilityDates</strong></td>
<td>Start and end dates of availability<br/>See section CandidateProfile/PersonAvailability/AvailabilityDates for more information</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>NoticePeriodMeasure</strong></td>
<td>A period measured in number of days, weeks, or months in advance of which an employee must give notice of his or her intention to resign his or her employment</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 49 of 160&lt;/page_number&gt;

---


## Page 50

<table>
  <tr>
    <td>ImmediateStartIndicator</td>
    <td>An indicator as to whether the person is available to start immediately</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>"True" = This person is available to start immediately.<br>"False" = This person is not available to start immediately.</td>
  </tr>
</table>

## 3.10.2 PersonAvailability Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>AvailabilityDates attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section CandidateProfile/PersonAvailability/AvailabilityDates for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>NoticePeriodMeasure attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to MeasureType Attributes for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>ImmediateStartIndicator attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

## 3.10.3 Sub-element: /CandidateProfile/PersonAvailability/AvailabilityDates (level 3)

### 3.10.3.1 AvailabilityDates Element Description

<mermaid>
graph TD
    subgraph AvailabilityDatesType
        A((eures:AvailabilityDates)) --> B(hr:StartDateTime)
        A --> C(hr:EndDateTime)
    end
    A -- "It contains start and end dates of availability." --> A_desc
    B -- "The timestamp marking the beginning of a time period during which a related entity or status is effective or applicable." --> B_desc
    C -- "The timestamp marking the end of a time period during which a related entity or status is effective or applicable." --> C_desc
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AvailabilityDates</td>
      <td>Start and end dates of availability</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><strong>Sub-elements</strong></td>
    </tr>
    <tr>
      <td>StartDateTime</td>
      <td>The timestamp marking the beginning of a time period during which a related entity or status is effective or applicable</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
      <td>"2014-10-09"</td>
    </tr>
    <tr>
      <td>EndDateTime</td>
      <td>The timestamp marking the end of a time period during which a related entity or status is effective or applicable</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
      <td>"2015-10-09"</td>
    </tr>
  </tbody>
</table>

### 3.10.3.2 Availability Dates Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>StartDateTime sub-element</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>EndDateTime sub-element</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 50 of 160&lt;/page_number&gt;

---


## Page 51

This sub-element has no attributes.

3.11 /CandidateProfile/EducationHistory (level 2)

3.11.1 EducationHistory Element Description

<mermaid>
graph TD
    A[EducationHistoryType] --> B[Attributes]
    B --> C[hr:EducationHistoryID]
    C --> D[EducationOrganizationAttendance]
    D --> E[A collection of information documenting a person's education, including data relevant to verifying such education. OED,...]

    subgraph EducationHistory
        direction LR
        F(EducationHistory)
        G(The systematic instruction, schooling, or training given to the young in preparation for the work of life; by...)
        F -- "1..*" --> D
        F -- "1" --> C
        F -- "1" --> G
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>EducationHistory</strong></td>
<td>A collection of information documenting a person's education, including data relevant to verifying such education, continuous education, schooling or training in preparation for work life; by extension, similar instruction or training obtained as an adult.</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>EducationHistoryID</strong></td>
<td>A key by which to distinguish or refer to information about a person's education.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>EducationOrganizationAttendance</strong></td>
<td>A detailed set of data with details regarding a person's attendance at an educational institution<br>See section /CandidateProfile/EducationHistory /EducationOrganizationAttendance for more information</td>
<td>1..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.11.2 EducationHistory Attributes

<mermaid>
graph TD
    A[EducationHistoryType] --> B[Attributes]
    B --> C[hr:EffectiveDateAttributeGroup]
    C --> D[validFrom]
    C --> E[validTo]
    D --> F[HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...]
    E --> F
    subgraph EducationHistory
        direction LR
        G(EducationHistory)
        H(The systematic instruction, schooling, or training given to the young in preparation for the work of life; by...)
        G -- "1" --> C
        G -- "1" --> H
    end
</mermaid>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 51 of 160&lt;/page_number&gt;

---


## Page 52

<table>
  <tr>
    <td><strong>validTo</strong></td>
    <td>Validity end date for this entity's information</td>
    <td>0..1</td>
    <td>BR-COM-06: Compulsory Date Format: YYYY-MM-DD, YYYY-MM, YYYY-MM-DDThh:mm:ss.</td>
  </tr>
</table>

**EducationHistoryID attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes for additional attributes.</td>
    </tr>
  </tbody>
</table>

**EducationOrganizationAttendance attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory /EducationOrganizationAttendance for more information</td>
    </tr>
  </tbody>
</table>

3.11.3 Sub-element: /CandidateProfile/EducationHistory/EducationOrganizationAttendance (level 3)

3.11.3.1 EducationOrganizationAttendance Element Description

<mermaid>
graph TD
    subgraph EducationOrganizationAttendanceType
        A[hr:EducationalOrganizationID] --> B{It contains identifier of the Educational Organisation.}
        C[hr:OrganizationName] --> D{Usually an official or legal name by which to refer to an organization.}
        E[OrganizationContact] --> F{It contains the Educational Organisation's contact data.}
        G[hr:ProgramName] --> H{It contains title of the qualification.}
        I[EducationalLevelCode] --> J{"A code classifying the level of educational organisation."}
        K[AttendancePeriod] --> L{It contains free form options for representing attendance period data.}
        M[EducationalDegree] --> N{It contains details about the student's degree.}
        O[Link] --> P{It specifies website link.}
    end

    subgraph EducationOrganizationAttendanceBaseType (extension base)
        A --> A
        C --> C
        E --> E
        G --> G
        I --> I
        K --> K
        M --> M
        O --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 0..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..∞ --> M
        O -- 1..∞ --> O
    end

    subgraph EducationOrganizationAttendance
        A -- 1..∞ --> A
        C -- 0..∞ --> C
        E -- 0..∞ --> E
        G -- 0..∞ --> G
        I -- 0..∞ --> I
        K -- 0..∞ --> K
        M -- 0..

---


## Page 53

html
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OrganizationContact</td>
      <td>The Educational Organisation's contact data</td>
      <td>0..n</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/OrganizationContact for more information</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ProgramName</td>
      <td>The title of the qualification</td>
      <td>1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>"Education Leadership Program", "Biomedical engineering", etc.</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Educational LevelCode</td>
      <td>A code classifying the level of educational organisation. In this case, the standard used could be EQF or ISCED.</td>
      <td>0..n</td>
      <td>HR-Open/EURES: EQF [CL15]<br><br>BR-COM-44: One value for each code list is allowed.<br><br>BR-COM-55: Compulsory use of the attributes "listVersionID", "listName" and "listURI".</td>
    </tr>
    <tr>
      <td>AttendancePeriod</td>
      <td>Free form options for representing attendance period data.</td>
      <td>0..1</td>
      <td>If the End Date sub-element is not filled, it means that the candidate is currently studying</td>
    </tr>
    <tr>
      <td>EducationalDegree</td>
      <td>Details about the student's degree<br>See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree for more information</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>It specifies url link.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.11.3.2 *EducationOrganizationAttendance Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>EducationalOrganizationID attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>OrganizationContact attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/OrganizationContact for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>ProgramName attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the program name</td>
      <td>0..1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4"><b>EducationalDegree attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>OrganizationName attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the organisation name</td>
      <td>0..1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4"><b>AttendancePeriod attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>EducationalLevelCode attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>Link attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 53 of 160&lt;/page_number&gt;

---


## Page 54

3.11.4 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree (level 4)

3.11.4.1 EducationDegree Element Description

<mermaid>
graph TD
    subgraph EducationDegreeType
        A[hr:DegreeName]
        B[hr:DegreeTypeCode]
        C[eures:DegreeDate]
        D[DegreeMajor]
        E[FieldOfStudy]
        F[FinalGrade]
        G[Thesis]
        H[OccupationalSkillsCovered]
        I[NationalClassification]
        J[CreditType]
        K[NumberOfCredit]
        L[validUntil]
    end

    subgraph EducationDegree
        M[EducationDegree]
    end

    subgraph CommonFields
        N[Contains details about the student's degree.]
    end

    M --> A
    M --> B
    M --> C
    M --> D
    M --> E
    M --> F
    M --> G
    M --> H
    M --> I
    M --> J
    M --> K
    M --> L

    A -- "The name of the degree." --> N
    B -- "The level of the degree, certificate, or award granted for the successful completion of requirements of an academic..." --> N
    C -- "The date upon which an educational degree was awarded or conferred." --> N
    D -- "It contains the degree specialisation." --> N
    E -- "Identifies the field of study." --> N
    F -- "It specifies the final grade obtained for an educational degree." --> N
    G -- "It contains information about the thesis topic." --> N
    H -- "It will contain references to main subjects/skills, which can be used by the application to identify and suggest..." --> N
    I -- "It specifies under which national classification category the degree falls in." --> N
    J -- "It specifies type of credit received for the given educational degree." --> N
    K -- "It specifies number of of credits received for the given educational degree." --> N
    L -- "It specifies, if there exist, a date until which certain training/education is valid." --> N
</mermaid>

<footer>DG EMPL 2020</footer>&lt;page_number&gt;Page 54 of 160&lt;/page_number&gt;

---


## Page 55

html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EducationDegree</strong></td>
      <td>Contains details about the student's degree</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><strong>Sub-elements</strong></td>
    </tr>
    <tr>
      <td><strong>DegreeName</strong></td>
      <td>Narrative details of the degree awarded</td>
      <td>1</td>
      <td>N/A</td>
      <td>"B.B.A.", "PhD", etc.</td>
    </tr>
    <tr>
      <td><strong>DegreeTypeCode</strong></td>
      <td>The certificate obtained with the degree, or award granted for the successful completion of requirements of an academic program</td>
      <td>0..1</td>
      <td>BR-COM-17: Compulsory use of the "EURES_DegreeType-CodeList.gc" list defined by EURES. This is based on ESCO Qualifications – version 1.0</td>
      <td>HR-Open/EURES: DegreeType [CL10]</td>
    </tr>
    <tr>
      <td><strong>DegreeDate</strong></td>
      <td>The date in which an educational degree is awarded or conferred</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeDate for more information</td>
    </tr>
    <tr>
      <td><strong>DegreeMajor</strong></td>
      <td>The degree of specialisation</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeMajor for more information</td>
    </tr>
    <tr>
      <td><strong>FieldOfStudy</strong></td>
      <td>Identifies the field of study</td>
      <td>0..n</td>
      <td>isced-f (top level) controlled list/String,</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/FieldOfStudy for more information</td>
    </tr>
    <tr>
      <td><strong>FinalGrade</strong></td>
      <td>Specifies the final grade obtained for an educational degree</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">Same as /CandidateProfile/PersonQualifications/PersonCompetency/ProficiencyLevel</td>
    </tr>
    <tr>
      <td><strong>Thesis</strong></td>
      <td>Information about the thesis topic</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>OccupationalSkillsCovered</strong></td>
      <td>It will contain references to skills, which can be used by the application to identify and suggest relevant ESCO skills.</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>NationalClassification</strong></td>
      <td>It specifies under which category the degree falls in</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>CreditType</strong></td>
      <td>It specifies type of credit received for the given educational degree.</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>NumberOfCredit</strong></td>
      <td>It specifies number of credits received for the given educational degree.</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>validUnti</strong></td>
      <td>It specifies, if there eist, a date until which certain training/education is valid.</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td colspan="4">Sub-elements of validUntil is same as DegreeDate. See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeDate for more information</td>
    </tr>
  </tbody>
</table>
```

3.11.4.2 *EducationDegree Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>This element has no attributes.</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4"><strong>DegreeName attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 55 of 160&lt;/page_number&gt;

---


## Page 56

html
<table>
  <thead>
    <tr>
      <th>languageID</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Identifier of the language used in the Degree name</td>
      <td>0..1</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">DegreeTypeCode attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">DegreeDate attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeDate for more information</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">DegreeMajor attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeMajor for more information</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">FieldOfStudy attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/FieldOfStudy for more information</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">FinalGrade attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Same as /CandidateProfile/PersonQualifications/PersonCompetency/ProficiencyLevel</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">Thesis attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">OccupationalSkillsCovered attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">NationalClassification attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">CreditType attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">NumberOfCredit attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">validUntil attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeDate.</td>
    </tr>
  </tbody>
</table>
```
DG EMPL 2020
&lt;page_number&gt;Page 56 of 160&lt;/page_number&gt;

---


## Page 57

3.11.5 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeDate (level 5)

3.11.5.1 DegreeDate Element Description

<mermaid>
graph TD
    subgraph "eures:DegreeDate"
        A[eures:DegreeDate]
        B[The date upon which an educational degree was awarded or conferred.]
    end

    subgraph "hr:FreeFormDateTime"
        C[hr:FreeFormDateTime (restriction base)]
        D[FormattedDateTime]
        E[DateText]
    end

    subgraph "hr:FreeFormDateTime"
        F[hr:FreeFormDateTime]
        G[FormattedDateTime]
        H[DateText]
    end

    A --> B
    A -- "0..*" --> C
    A -- "0..*" --> F
    C --> D
    C --> E
    F --> G
    F --> H
    D --> I[FreeForm Date. Details Provides FreeForm options for representing date information. Recruiting, employment screening,...]
    H --> J[FreeForm Date. Details Provides FreeForm options for representing date information. Recruiting, employment screening,...]
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>DegreeDate</td>
<td>The date in which an educational degree was awarded or conferred</td>
<td>0..1</td>
<td>BR-COM-16: At least one of its sub-elements must be provided.</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>FormattedDateTime</td>
<td>A formatted representation of a date, which may be specified as a date, date/time, year, or year/month</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
<td>"2009-04-01" or "2009-04", etc.</td>
</tr>
<tr>
<td>DateText</td>
<td>A text or formatted representation of a date or date information</td>
<td>0..1</td>
<td>N/A</td>
<td>"January 4, 2009" or "Two Years Ago"</td>
</tr>
</tbody>
</table>

3.11.5.2 DegreeDate Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
</tbody>
</table>

DateText attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to DateText Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

FormattedDateTime attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This sub-element has no attributes.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 57 of 160&lt;/page_number&gt;

---


## Page 58

3.11.6 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeMajor (level 5)

3.11.6.1 DegreeMajor Element Description

<mermaid>
graph TD
    subgraph DegreeSpecializationType
        A[DegreeSpecializationType]
    end
    B[DegreeMajor] --> A
    A -- "It contains the degree specialisation." --> B
    C[ProgramConcentration] --> A
    C -- "It specifies degree specialisation code." --> A
    D[It specifies the degree specialisation.] --> A
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>DegreeMajor</td>
<td>The degree specialisation</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td>ProgramConcentration</td>
<td>Degree specialisation</td>
<td>1</td>
<td>Compulsory use of Europass2: FieldOfStudy [ECV05]</td>
<td>"001", "002", "003" etc.</td>
</tr>
</tbody>
</table>

3.11.6.2 DegreeMajor Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>ProgramConcentration attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">This sub-element has no attributes.</td>
</tr>
</tbody>
</table>

3.11.7 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/FieldOfStudy (level 5)

3.11.7.1 FieldOfStudy Element Description

<mermaid>
graph TD
    subgraph FieldOfStudyType
        A[FieldOfStudyType]
    end
    B[FieldOfStudy] --> A
    B -- "Identifies the field of study." --> B
    C[MainFieldOfStudy] --> A
    C -- "It specifies main field of study degree specialisation code." --> C
    D[SpecificFieldOfStudy] --> A
    D -- "It specifies specific field of study degree specialisation code." --> D
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>FieldOfStudy</td>
<td>It identifies field of study.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td>MainFieldOfStudy</td>
<td>It specifies main field of study degree</td>
<td>1</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 58 of 160&lt;/page_number&gt;

---


## Page 59

mermaid
erDiagram
    AttendancePeriod ||--o{ AttendancePeriodType : " "
    AttendancePeriodType ||--|{ AttendancePeriod : " "
    AttendancePeriodType {
        StartDate
        EndDate
        Description
        Ongoing
    }
```

```mermaid
erDiagram
    SpecificFieldOfStudy {
        It specifies main field of study degree specialiation code.
    }
    MainFieldOfStudy {
        It specifies if main field of study contains: FREETEXT or URI
    }
    Same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeMajor
    SpecificFieldOfStudy ||--|{ MainFieldOfStudy : " "
    MainFieldOfStudy ||--|{ SpecificFieldOfStudy : " "
```

3.11.7.2 *FieldOfStudy Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>typeCode</b></td>
      <td>It specifies if main field of study contains: FREETEXT or URI</td>
      <td>0..1</td>
      <td>The value must be: FREETEXT or URI</td>
    </tr>
  </tbody>
</table>

**MainFieldOfStudy attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeMajor</td>
    </tr>
  </tbody>
</table>

**SpecificFieldOfStudy attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeMajor</td>
    </tr>
  </tbody>
</table>

3.11.8 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod (level 4)

3.11.8.1 *AttendancePeriod Element Description*

&lt;img&gt;ER Diagram showing AttendancePeriod with sub-elements AttendancePeriodType, StartDate, EndDate, Description, and Ongoing.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>AttendancePeriod</b></td>
      <td>Provides Freeform options for representing attendance period data</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

**Sub-elements**

<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>StartDate</b></td>
      <td>A timestamp marking the beginning of the attendance period<br>See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate for more information</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.<br>See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate for more information</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>EndDate</b></td>
      <td>A timestamp marking the end of the attendance period<br>See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate for more information</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.<br>See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate for more information</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><b>Description</b></td>
      <td>Narrative details of the attendance period</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Additional information about the attendance period."</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 59 of 160&lt;/page_number&gt;

---


## Page 60

mermaid
erDiagram
    eures|FreeFormDateTime || hr.FreeFormDateTime (restriction base)
    eures.FreeFormDateTime || FormattedDateTime
    eures.FreeFormDateTime || DateText
```

<table>
  <tr>
    <td><b>Ongoing</b></td>
    <td>It indicates if the attendance period is still ongoing and hence has no end date.</td>
    <td>0..1</td>
    <td></td>
    <td></td>
  </tr>
</table>

3.11.8.2 AttendancePeriod Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>Description attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>EndDate attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>StartDate attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>Ongoing attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

3.11.9 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate (level 5)

3.11.9.1 StartDate Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>StartDate</b></td>
      <td>A timestamp marking the beginning of the attendance period</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td><b>FormattedDateTime</b></td>
      <td>A formatted representation of a date, which may be specified as a date, date/time, year, or year/month</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
      <td>"2009-01-04", "2009-01", etc.</td>
    </tr>
    <tr>
      <td><b>DateText</b></td>
      <td>A text or formatted representation of a date or date information</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"January 4, 2009" or "Two Years Ago"</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 60 of 160&lt;/page_number&gt;

---


## Page 61

3.11.9.2 *StartDate Attributes*

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>This element has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

**DateText attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>Refer to DateText Attributes section for additional attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

**FormattedDateTime attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>This sub-element has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

3.11.10 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate (level 5)

3.11.10.1 *EndDate Element Description*

<mermaid>
graph TD
    A[eures:FreeFormDataType] --> B(hr:FreeFormDateTime(restriction base))
    B --> C[FormattedDateTime]
    B --> D[DateText]
    C --> E[EndDate]
    D --> F[hr:FormattedDateTime]
    F --> G[hr:DateText]
    subgraph "FreeForm Date. Details Provides FreeForm options for representing date information. Recruiting, employment screening,..."
        C
        D
    end
    subgraph "FreeForm Date. Details Provides FreeForm options for representing date information. Recruiting, employment screening,..."
        F
        G
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>EndDate</td>
<td>A timestamp marking the end of the attendance period</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
<td>N/A</td>
</tr>
</tbody>
</table>

**Sub-elements**

The same as /CandidateProfile/EducationHistory/ EducationOrganizationAttendance/AttendancePeriod/StartDate

3.11.10.2 *EndDate Attributes*

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateProfile/EducationHistory/ EducationOrganizationAttendance/AttendancePeriod/StartDate</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 61 of 160&lt;/page_number&gt;

---


## Page 62

3.11.11 Sub-element:
/CandidateProfile/EducationHistory/EducationOrganizationAttendance/OrganizationContact
(level 4)

3.11.11.1 OrganizationContact Element Description

<mermaid>
graph TD
    subgraph OrganizationContactType
        A[OrganizationContact] --> B[hr:ContactName]
        A --> C[Communication]
    end
    A -- "0..∞" --> A
    B -- "+" --> B
    C -- "+" --> C
    style A fill:#fff,stroke:#333,stroke-width:2px,color:#333
    style B fill:#fff,stroke:#333,stroke-width:2px,color:#333
    style C fill:#fff,stroke:#333,stroke-width:2px,color:#333
    A -- "It contains the Educational Organisation's contact data." --> A
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>OrganizationContact</strong></td>
<td>An Organisation's contact information</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td colspan="5">The same as /CandidateProfile/EmploymentHistory/EmployerHistory/OrganizationContact</td>
</tr>
</tbody>
</table>

3.11.11.2 OrganizationContact Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateProfile/EmploymentHistory/EmployerHistory/OrganizationContact</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

3.12 /CandidateProfile/PersonQualifications (level 2)

3.12.1 PersonQualifications Element Description

<mermaid>
graph TD
    subgraph PersonQualificationsType
        A[PersonQualifications] --> B[hr:QualificationsSummary]
        A --> C[PersonCompetency]
    end
    A -- "0..∞" --> A
    B -- "+" --> B
    C -- "+" --> C
    style A fill:#fff,stroke:#333,stroke-width:2px,color:#333
    style B fill:#fff,stroke:#333,stroke-width:2px,color:#333
    style C fill:#fff,stroke:#333,stroke-width:2px,color:#333
    A -- "History of a Person's Qualifications" --> A
    B -- "In the context of resumes, a \"qualifications summary\" is a paragraph or listing intended \"showcase\" a candidate's most..." --> B
    C -- "A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment)..." --> C
    A -- "Used in the context of recruiting and staffing as a container of information related to matching knowledge, skills,..." --> A
</mermaid>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 62 of 160&lt;/page_number&gt;

---


## Page 63

html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PersonQualifications</td>
      <td>Information related to matching capacities, knowledge, skills, abilities, awards and other resource deployment-related characteristics (including “competencies”) offered by a candidate</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>QualificationsSummary</td>
      <td>In the context of resumes, a "qualifications summary" is a paragraph or listing to "showcase" a candidate's most compelling skills and experience. In this context, the "qualifications summary" may be persuasive or have self-marketing content versus a "formal recognition of achievement or competence". In other words, use of term "qualifications" sometimes encompasses both qualifications asserted or claimed as well as those that have been formally recognised by an "awarding organisation." It is used in the context of recruiting and staffing as a container of information related to matching knowledge, skills, abilities, and other resource deployment-related characteristics (including "competencies") offered by a candidate and/or requested by a potential employer or customer.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Person Competency</td>
      <td>A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment) that is assessed or asserted at a specified level of proficiency.</td>
      <td>0..n</td>
      <td></td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

See section /CandidateProfile/PersonQualifications/PersonCompetency for more information
```

3.12.2 PersonQualifications Attributes

&lt;img&gt;Diagram showing PersonQualificationsType with attributes @Attributes, hr:EffectiveDateAttributeGroup, @validFrom, @validTo. A note explains HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral part of the model. Another note states it is used in the context of recruiting and staffing as a container of information related to matching knowledge, skills,...&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

QualificationsSummary attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

PersonCompetency attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 63 of 160&lt;/page_number&gt;

---


## Page 64

See section /CandidateProfile/PersonQualifications/PersonCompetency for more information

3.12.3 Sub-element: /CandidateProfile/PersonQualifications/PersonCompetency (level 3)

3.12.3.1 PersonCompetency Element Description

<mermaid>
graph TD
    subgraph PersonCompetencyType
        A[CompetencyID] --> B[hr:TaxonomyID]
        B --> C[hr:CompetencyName]
        C --> D[eures:ProficiencyLevel]
        D --> E[eures:CompetencyDimension]
    end
    A -- "It contains a unique identifier for a competency definition." --> A_desc
    B -- "A unique identifier for a taxonomy." --> B_desc
    C -- "Competency. Name. Name A human readable, descriptive name for the given competency." --> C_desc
    D -- "The state or degree of mastery or adeptness obtained or achieved for a given competency. A proficiency level is..." --> D_desc
    E -- "It contains a measurable characteristic of a competency." --> E_desc
    A -- "0..∞" --> A_instance
    B -- "0..∞" --> B_instance
    C -- "0..∞" --> C_instance
    D -- "0..∞" --> D_instance
    E -- "0..∞" --> E_instance
    A_instance -- "A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment)..." --> A_instance_desc
    B_instance -- "A specified person competency is a competency within the context of a personal record (profile, appraisal, assessment)..." --> B_instance_desc
    C_instance -- "A specified person competency is a competency within the context of a personal record (profile, appraisal, assessment)..." --> C_instance_desc
    D_instance -- "A specified person competency is a competency within the context of a personal record (profile, appraisal, assessment)..." --> D_instance_desc
    E_instance -- "A specified person competency is a competency within the context of a personal record (profile, appraisal, assessment)..." --> E_instance_desc
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>PersonCompetency</strong></td>
<td>A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment) that is assessed or asserted at specified level of proficiency.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>CompetencyID</strong></td>
<td>Unique identifier for a skill or competency that depends on the taxonomy used, in this case CEFR.<br>Taxonomy information is included in the ID attributes<br>“EN”, “FR”, etc.<br>Full code list: “4.28.17 Language Codes [CL24]”<br><br>If Taxonomy information isn't language,<br>text field to be used.<br>“Aircraft Assembly”, “Aircraft Electronics”,<br>etc.</td>
<td>1</td>
<td>Use of ECV06-Languages, if<br>TaxonomyID’s value is<br>“language”. Or<br>NormalizedStringType if<br>TaxonomyID’s value is<br>“other”.</td>
<td>Full code list:<br>Europass2:<br>Languages<br>[ECV06]</td>
</tr>
<tr>
<td><strong>TaxonomyID</strong></td>
<td>Unique identifier for the type of competency.</td>
<td>1</td>
<td>BR-COM-54: TaxonomyID’s value should be “language” if the CompetencyID is a language or “other”, in the other competencies</td>
<td>“language”,<br>“other”</td>
</tr>
<tr>
<td><strong>CompetencyName</strong></td>
<td>A legible, descriptive name for a given competency</td>
<td>0..1</td>
<td>N/A</td>
<td>“English-<br>Language”,<br>“Social skills”,<br>etc.</td>
</tr>
<tr>
<td><strong>ProficiencyLevel</strong></td>
<td>The state or degree of mastery or adeptness obtained or achieved for a given competency. Proficiency levels are expressed as a score, a point scale, or a</td>
<td>0..1</td>
<td>BR-COM-449: If<br>“CompetencyDimension /<br>TypeCode” is specified,</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 64 of 160&lt;/page_number&gt;

---


## Page 65

mermaid
erDiagram
    eures:ProficiencyLevel ||--o{ BaseScoreType : "The state or degree of mastery or adeptness obtained or achieved for a given competency. A proficiency level is..."
    BaseScoreType ||--|{ ScoreNumeric : " "
    BaseScoreType ||--|{ hr:ScoreText : " "
```

mark in a range of values. (In case of CompetencyID=CEFR, ProficiencyLevel could be: “Basic user”, “Independent User” or “Proficient User”.)
See section /Candidate/PersonQualifications/PersonCompetency/ProficiencyLevel for more information

“ProficiencyLevel” is mandatory.

See section /Candidate/PersonQualifications/PersonCompetency/CompetencyDimension for more information

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"><b>CompetencyDimension attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity’s information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity’s information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>TaxonomyID attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>CompetencyName attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to TextType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>ProficiencyLevel attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /Candidate/PersonQualifications/PersonCompetency/ProficiencyLevel for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>CompetencyDimension attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /Candidate/PersonQualifications/PersonCompetency/CompetencyDimension for more information</td>
    </tr>
  </tbody>
</table>

3.12.3.2 PersonCompetency Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>CompetencyID attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity’s information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity’s information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>TaxonomyID attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>CompetencyName attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to TextType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>ProficiencyLevel attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /Candidate/PersonQualifications/PersonCompetency/ProficiencyLevel for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>CompetencyDimension attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /Candidate/PersonQualifications/PersonCompetency/CompetencyDimension for more information</td>
    </tr>
  </tbody>
</table>

3.12.4 Sub-element: /CandidateProfile/PersonQualifications/PersonCompetency/ProficiencyLevel (level 4)

3.12.4.1 ProficiencyLevel Element Description

DG EMPL 2020
&lt;page_number&gt;Page 65 of 160&lt;/page_number&gt;

---


## Page 66

html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ProficiencyLevel</strong></td>
      <td>The state or degree of mastery or adeptness obtained or achieved for a given competency. A proficiency level is expressed as a score a point scale or a mark among range of values.</td>
      <td>0..1</td>
      <td><strong>BR-COM-49:</strong> If "CompetencyDimension / TypeCode" is specified, "ProficiencyLevel" is mandatory.</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ScoreNumeric</strong></td>
      <td>A numerical record of the marks allotted to individuals in the measurement of abilities, capacity to learn, personality assessment, or in other measurable characteristics (e.g. credit worthiness), including a set of attributes to identify the scoring scheme and its characteristics</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"1", "2", "3", etc.</td>
    </tr>
    <tr>
      <td><strong>ScoreText</strong></td>
      <td>A non-numerical or text representation of a score. A record of the marks allotted to an individual in measuring his/her abilities, capacity to learn, personality assessment, or in other measurable characteristics (e.g., credit worthiness). It represents either the total number of points awarded, or a general standard achieved, including a set of attributes to identify the scoring scheme</td>
      <td>0..1</td>
      <td><strong>HR-Open/EURES:</strong> ProficiencyLevel [CL25], if TaxonomyID's value is "language".</td>
      <td>"A1", "A2", "B1", etc.<br>Full code list: "HR-Open/EURES: ProficiencyLevel [CL25]"</td>
    </tr>
  </tbody>
</table>
```

3.12.4.2 *ProficiencyLevel Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
  </tbody>
</table>

**ScoreText attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to ScoreText Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

**ScoreNumeric attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to ScoreNumeric Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

3.12.5 Sub-element:
/CandidateProfile/PersonQualifications/PersonCompetency/CompetencyDimension (level 4)

3.12.5.1 *CompetencyDimension Element Description*

&lt;img&gt;Diagram showing CompetencyDimensionType with hr:CompetencyDimensionTypeCode and Score&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>CompetencyDimension</strong></td>
      <td>A measurable characteristic of a skill or competency</td>
      <td>0..n</td>
      <td>Only used for language skills</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 66 of 160&lt;/page_number&gt;

---


## Page 67

| | | | **BR-COM-48:** If "CompetencyDimension" element is specified, "TypeCode" and "Score" are mandatory elements. |
|---|---|---|---|
| | | | **BR-COM-49:** If "CompetencyDimension / TypeCode" is specified, "ProficiencyLevel" is mandatory. |
| **Sub-elements** | | | |
| **CompetencyDimensionTypeCode** | A code classifying the type of competency dimension described | 0..1 | **BR-COM-37:** Compulsory use of the "EURES_Dimension-CodeList.gc" list defined by EURES. This is based on CEFR, if TaxonomyID's value is "language".<br><br>**BR-COM-55:** Compulsory use of the attributes "listVersionID", "listName" and "listURI".<br><br>"CEF-Understanding-Reading", "CEF-Understanding-Listening", etc.<br><br>Full code list: "HR-Open/EURES: Dimension [CL11]" |
| **Score** | Details regarding the student's scores at a specific dimension<br>See section /CandidateProfile/PersonQualifications/PersonCompetency/CompetencyDimension/Score for more information | 0..1 | N/A | N/A |

**3.12.5.2 CompetencyDimension Attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>CompetencyDimensionTypeCode attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Score attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/PersonQualifications/PersonCompetency/CompetencyDimension/Score for more information</td>
</tr>
</tbody>
</table>

**3.12.6 Sub-element:<br>/CandidateProfile/PersonQualifications/PersonCompetency/CompetencyDimension/Score (level 5)**

**3.12.6.1 Score Element Description**

&lt;img&gt;UML Diagram showing ScoreType, BaseScoreType (extension base), ScoreNumeric, hr:ScoreText, and @Attributes&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 67 of 160&lt;/page_number&gt;

---


## Page 68

<table>
  <tr>
    <td><strong>Score</strong></td>
    <td>Details regarding the student's scores at a specific dimension</td>
    <td>0..1</td>
    <td>BR-COM-16: At least one of its sub-elements must be informed.</td>
    <td>N/A</td>
  </tr>
</table>

**Sub-elements**

The same as /CandidateProfile/PersonQualifications/PersonCompetency/ProficiencyLevel

3.12.6.2 Score Attributes

&lt;img&gt;Diagram showing ScoreType, BaseScoreType (extension base), Attributes, hr:EffectiveDateAttributeGroup, @ validFrom, @ validTo with a note "HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral..."&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>validFrom</strong></td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td><strong>validTo</strong></td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**Sub-elements**

The same as /CandidateProfile/PersonQualifications/PersonCompetency/ProficiencyLevel

3.13 /CandidateProfile/ExperienceSummary (level 2)

3.13.1 ExperienceSummary Element Description

&lt;img&gt;Diagram showing eures:ExperienceSummary with ExperienceSummaryType, 1..∞ ExperienceCategory, and a note "It contains categorisation of the candidate's experience."&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ExperienceSummary</strong></td>
      <td>Narrative summary of the person and of his/her competencies, normally used as the CV presentation</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

**Sub-elements**

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ExperienceCategory</strong></td>
      <td>This is intended as a fielded summary of qualifications. It can be used as a "roll-up" of data within the candidate history and experience components.<br>See section CandidateProfile/ExperieceSummary/ExperienceCategory for more information</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.13.2 ExperienceSummary Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <!-- No specific attributes listed for ExperienceSummary -->
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 68 of 160&lt;/page_number&gt;

---


## Page 69

This element has no attributes.

**ExperienceCategory attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section CandidateProfile/ExperieceSummary/ExperienceCategory for more information</td>
    </tr>
  </tbody>
</table>

3.13.3 Sub-element: /CandidateProfile/ExperienceSummary/ExperienceCategory (level 3)

3.13.3.1 *ExperienceCategory Element Description*

<mermaid>
graph TD
    subgraph ExperienceSummaryType
        A[ExperienceSummaryType]
    end

    subgraph ExperienceCategoryType
        B[hr:CategoryCode]
        C[hr:Measure]
        D[oa:Description]
    end

    A --> E[ExperienceCategory]
    E --> F[1..∞]

    F --> G[hr:CategoryCode]
    F --> H[hr:Measure]
    F --> I[oa:Description]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#f9f,stroke:#333,stroke-width:2px
    style E fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
    style I fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

This is intended as fielded summary of qualifications. It can be used as a "roll-up" of data within of Candidate...

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ExperienceCategory</td>
      <td>This is intended as a fielded summary of qualifications. It can be used as a "roll-up" of data within the candidate history and experience components.</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

**Sub-elements**

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CategoryCode</td>
      <td>A code classifying the job type or category. This may be used for occupational classification of the job. The JobCategoryCode will usually be repeatable so that a single job can be classified across multiple dimensions. The JobCategoryCode can be used to classify the job by industry, but note that an explicit IndustryCode is available in contexts such as PositionOrganizationDetails<br><br>"1" – Managers,<br>"12" – Administrative, etc.</td>
      <td>0..1</td>
      <td>Use “ISCO2008-CodeList.gc” list defined by EURES and based on ISCO-08. Alternatively, use of ESCO Occupations<br><br>BR-COM-29: Compulsory use of the “ISCO2008-CodeList.gc” list defined by EURES and based on ISCO-08. Alternatively, use of ESCO Occupations – version 1.0.<br><br>BR-COM-55: Compulsory use of the attributes “listVersionID”, “listName” and “listURI”.</td>
      <td>"1" – Managers,<br>"12" – Administrative, etc.<br><br>Full code list: “HR-Open/EURES: ISCO2008 [CL20] HR-Open/EURES: ESCO_Occupations [CL20]”</td>
    </tr>
    <tr>
      <td>Measure</td>
      <td>Code indicating the period of time, measured in years or months of experience</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Description of the category</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Years of Financial Industry Management Experience", etc.</td>
    </tr>
  </tbody>
</table>

3.13.3.2 *ExperienceCategory Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element as no attributes.</td>
    </tr>
  </tbody>
</table>

**CategoryCode attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

**Measure attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 69 of 160&lt;/page_number&gt;

---


## Page 70

Refer to MeasureType Attributes section for additional attributes.

**Description attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

## 3.14 /CandidateProfile/EmploymentHistory (level 2)

### 3.14.1 EmploymentHistory Element Description

&lt;img&gt;A diagram showing "EmploymentHistoryType" with an "Attributes" group containing "@ validFrom", "@ validTo", and "hr:EffectiveDateAttributeGroup". It also shows "EmploymentHistory" with a description "Employment History records. Details of a particular tenure of employment or work with an organization." and "EmployerHistory" with a description "Details of a particular tenure of employment or work with an organization." The "EmploymentHistory" element has a cardinality of 0..1.&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>EmploymentHistory</strong></td>
<td>The prior and current details of a person's employment, work, or relevant experience as they would be reported in a professional profile, CV, resume, employment application, or similar document</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

#### Sub-elements

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Employer History</strong></td>
<td>Details regarding a person's tenure while working for an employer<br>See section /CandidateProfile/EmploymentHistory/EmployerHistory for more information</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

### 3.14.2 EmploymentHistory Attributes

&lt;img&gt;A diagram showing "EmploymentHistoryType" with an "Attributes" group containing "@ validFrom", "@ validTo", and "hr:EffectiveDateAttributeGroup". It also shows "EmploymentHistory" with a description "Employment History records. Details of a particular tenure of employment or work with an organization." The "EmploymentHistory" element has a cardinality of 0..1.&lt;/img&gt;

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

#### EmployerHistory attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section “EmployerHistory Attributes” for more information</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 70 of 160&lt;/page_number&gt;

---


## Page 71

3.14.3 Sub-element: /CandidateProfile/EmploymentHistory/EmployerHistory (level 3)

3.14.3.1 EmployerHistory Element Description

<mermaid>
graph TD
    subgraph EmployerHistoryType
        A[hr:OrganizationName]
        B[OrganizationContact]
        C[hr:IndustryCode]
        D[eures:EmploymentPeriod]
        E[PositionHistory]
        F[eures:AttachmentReference]
        G[Department]
        H[Link]

        A -- "Usually an official or legal name by which to refer to an organization." --> A
        B -- "It contains the Educational Organisation's contact data." --> B
        C -- "Industry. Classification. Code A code classifying the industry for the related organization, position, or other entity...." --> C
        D -- "It provides flexible options for representing employment period data." --> D
        E -- "It contains details about the person's tenure within the position" --> E
        F -- "It contains references to external documents attached." --> F
        G -- "It aims to capture the department of the organization in which the candidate had worked." --> G
        H -- "It specifies website link." --> H

        A --- EmployerHistory
        B --- EmployerHistory
        C --- EmployerHistory
        D --- EmployerHistory
        E --- EmployerHistory
        F --- EmployerHistory
        G --- EmployerHistory
        H --- EmployerHistory

        EmployerHistory[EmployerHistory] -- "Details of a particular tenure of employment or work with an organization." --> EmployerHistory
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>EmployerHistory</strong></td>
<td>Details about a person's tenure while working for an employer.<br>This element is optional as there could be candidates without work experience.<br>If it is not filled out, it means that the candidate does not have work experience, or he/she does not want to fill it out.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>OrganizationName</strong></td>
<td>Usually an official or legal name by which to refer to an organisation</td>
<td>0..1</td>
<td>N/A</td>
<td>"Wellness Healthcare", "Police Department", etc.</td>
</tr>
<tr>
<td><strong>OrganizationContact</strong></td>
<td>An Organisation's contact information<br>See section /CandidateProfile/EmploymentHistory/EmployerHistory/OrganizationContact for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>IndustryCode</strong></td>
<td>A code classifying the industry of the related organisation, position, or other entity.</td>
<td>0..1</td>
<td><strong>BR-COM-20:</strong> Compulsory use of the "NACE-CodeList.gc" list defined by EURES. This is based on EU NACE.</td>
<td>"01" = Agriculture,<br>"02" = Forestry,<br>etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 71 of 160&lt;/page_number&gt;

---


## Page 72

html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th>Full code list:<br>"Open/EURES:<br>NACE [CL31]"</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EmploymentPeriod</td>
      <td>Provides flexible options for representing employment period data<br>See section /CandidateProfile/EmploymentHistory/EmployerHistory/EmploymentPeriod for more information</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>PositionHistory</td>
      <td>Details about the person's tenure within the position<br>See section /CandidateProfile/EmploymentHistory/EmployerHistory/PositionHistory for more information</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>AttachmentReference</td>
      <td>Reference to external documents attached<br>See section /CandidateProfile/EmploymentHistory/EmployerHistory/AttachmentReference for more information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Department</td>
      <td>It aims to capture the department of the organization in which the candidate had worked.</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Link</td>
      <td>It specifies website link.</td>
      <td>0..n</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```

3.14.3.2 EmployerHistory Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>OrganizationName attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the organisation name</td>
      <td>0..1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4"><strong>OrganizationContact attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentHistory/EmployerHistory/OrganizationContact for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>IndustryCode attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>EmploymentPeriod attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentHistory/EmployerHistory/EmploymentPeriod for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PositionHistory attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentHistory/EmployerHistory/PositionHistory for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>AttachmentReference attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentHistory/EmployerHistory/AttachmentReference for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Department attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to TextType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Link attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 72 of 160&lt;/page_number&gt;

---


## Page 73

3.14.4 Sub-element: /CandidateProfile/EmploymentHistory/EmployerHistory/OrganizationContact (level 4)

3.14.4.1 OrganizationContact Element Description

<mermaid>
graph TD
    subgraph OrganizationContactType
        OC(OrganizationContact)
        CNT[hr:ContactName]
        COM[Communication]
    end
    OC -- "It contains the Educational Organisation's contact data." --> OC
    OC -- "Method of communication of the related entity." --> COM
    CNT --- OC
    COM --- OC
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>OrganizationContact</strong></td>
<td>Contact information for the organization</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>ContactName</strong></td>
<td>Name of the organization's contact person</td>
<td>1</td>
<td>N/A</td>
<td>"Lidia Smith"</td>
</tr>
<tr>
<td><strong>Communication</strong></td>
<td>Contact data/information of the contact person: ChannelCode, Address, URI –for email, for instance—, etc<br/>See section /CandidatePerson/Communication for more information</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.14.4.2 OrganizationContact Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>ContactName attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">Refer to TextType Attributes section for additional attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Communication attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">See section /CandidatePerson/Communication for more information</td>
</tr>
</tbody>
</table>

3.14.5 Sub-element: /CandidateProfile/EmploymentHistory/EmployerHistory/EmploymentPeriod (level 4)

3.14.5.1 EmploymentPeriod Element Description

<mermaid>
graph TD
    subgraph EmploymentPeriodType
        EP(eures:EmploymentPeriod)
        SD(StartDate)
        ED(EndDate)
        HRI(hr:CurrentIndicator)
    end
    EP -- "It provides flexible options for representing employment period data." --> EP
    SD --- EP
    ED --- EP
    HRI --- EP
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>EmploymentPeriod</strong></td>
<td>Provides flexible options for representing employment period data</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>StartDate</strong></td>
<td>A timestamp marking the beginning of employment period data</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 73 of 160&lt;/page_number&gt;

---


## Page 74

See section /CandidatePofile/EmploymentHistory/EmployerHistory/EmploymentPeriod/StartDate for more information

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EndDate</td>
      <td>A timestamp marking the end of employment period data</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>CurrentIndicator</td>
      <td>Indicates whether the position is currently held or if employment or other status was current when reported</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"true" = The position is currently held<br>"false" = The position is not currently held</td>
    </tr>
  </tbody>
</table>

3.14.5.2 EmploymentPeriod Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes</td>
    </tr>
    <tr>
      <td colspan="4"><b>StartDate attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidatePofile/EmploymentHistory/EmployerHistory/EmploymentPeriod/StartDate for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>EndDate attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidatePofile/EmploymentHistor/EmployerHistory/EmploymentPeriod/EndDate for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>CurrentIndicator attributes</b></td>
    </tr>
    <tr>
      <td colspan="4"><b>Attributes</b></td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information.</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information.</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

3.14.6 Sub-element:
/CandidateProfile/EmploymentHistory/EmployerHistory/EmploymentPeriod/StartDate (level 5)

3.14.6.1 StartDate Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>StartDate</td>
      <td>A timestamp marking the beginning of the employment period data</td>
      <td>1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

The same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate

3.14.6.2 StartDate Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.14.7 Sub-element:
/CandidateProfile/EmploymentHistory/EmployerHistory/EmploymentPeriod/EndDate (level 5)

3.14.7.1 EndDate Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EndDate</td>
      <td>A timestamp marking the end of the employment period data</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 74 of 160&lt;/page_number&gt;

---


## Page 75

must be provided.

Sub-elements

The same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate

3.14.7.2 EndDate Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.14.8 Sub-element: /CandidateProfile/EmploymentHistory/EmployerHistory/PositionHistory (level 4)

3.14.8.1 PositionHistory Element Description

<mermaid>
graph TD
    A[PositionHistoryType] --> B(PositionTitle)
    A --> C(eures:EmploymentPeriod)
    A --> D(oa:Description)
    A --> E(hr:JobCategoryCode)
    A --> F(PersonCompetency)
    A --> G(City)
    A --> H(Country)

    subgraph PositionHistoryType
        B -- "A short phrase describing the position as it would be listed on a business card or in a company directory." --> B
        C -- "It provides flexible options for representing employment period data." --> C
        D -- "It contains description of the position." --> D
        E -- "A code classifying the type or category of job. This may be used for occupational classification of the job...." --> E
        F -- "A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment)..." --> F
        G -- "It aims to capture the city where a candidate worked in a company in a specific position." --> G
        H -- "Code identifying the country where a candidate has worked in a company." --> H
    end

    A -- "1..∞" --> I(PositionHistory)
    I -- "It contains details about the person's tenure within the position" --> I
</mermaid>

The details about a persons tenure within position.

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PositionHistory</td>
      <td>The details about the person's tenure within the position</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PositionTitle</td>
      <td>A short phrase describing the position as it would be listed on a business card or in a company directory. OED: An appellation attached to a position in virtue of rank, function or office.</td>
      <td>0..1</td>
      <td>Use CL20-ESCO_Occupations</td>
      <td>HR-Open/EURES: ESCO_Occupations [CL20].</td>
    </tr>
    <tr>
      <td>EmploymentPeriod</td>
      <td>Provides flexible options for representing employment period data</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 75 of 160&lt;/page_number&gt;

---


## Page 76

See section /CandidateProfile/EducationHistory/EmployerHistory/PositionHistory/EmploymentPeriod for more information

<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Description of the position</th>
      <th>Card.</th>
      <th>N/A</th>
      <th>"Description of the position", etc.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JobCategoryCode</td>
      <td>A code classifying the job type or category. This may be used for occupational classification of the job. The JobCategoryCode will usually be repeatable so that a single job can be classified across multiple dimensions.<br>The JobCategoryCode can be used to classify the job by industry but note that an explicit IndustryCode is available in contexts such as PositionOrganizationDetails.</td>
      <td>0..n</td>
      <td>BR-COM-29: Compulsory use of the "ISCO2008-CodeList.gc" list defined by EURES and based on ISCO-08.<br>Alternatively, use of ESCO Occupations – version 1.0.</td>
      <td>"1" – Managers,<br>"12" – Administrative, etc.<br><br>Full code list: "HR-Open/EURES: ISCO2008 [CL20]<br>HR-Open/EURES: ESCO_Occupations [CL20]"</td>
    </tr>
    <tr>
      <td>PersonCompetency</td>
      <td>A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment) that is assessed or asserted at specified level of proficiency.<br><br>See section /CandidateProfile/EducationHistory/EmployerHistory/PositionHistory/PersonCompetency for more information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>City</td>
      <td>It aims to capture the city where a candidate worked in a company in a specific position.</td>
      <td>0..1</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Country</td>
      <td>Code identifying the country where a candidate has worked in a company.</td>
      <td>0..1</td>
      <td>ECV02: Compulsory use of codelist defined by Europass CountriesAndNationalities</td>
      <td>Europass2:<br>CountriesAndNationalities<br>[ECV02]</td>
    </tr>
  </tbody>
</table>

3.14.8.2 *PositionHistory Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>This element has no attributes</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4">**PositionTitle attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to PositionTitleType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4">**EmploymentPeriod attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EmployerHistory/PositionHistory/EmploymentPeriod for more information</td>
    </tr>
    <tr>
      <td colspan="4">**Description attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4">**JobCategoryCode attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4">**PersonCompetency attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EmployerHistory/PositionHistory/PersonCompetency for more information</td>
    </tr>
    <tr>
      <td colspan="4">**City attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to TextType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4">**Country attributes**</td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 76 of 160&lt;/page_number&gt;

---


## Page 77

3.14.9 Sub-element:
/CandidateProfile/EmploymentHistory/EmployerHistory/PositionHistory/EmploymentPeriod
(level 5)

3.14.9.1 EmploymentPeriod Element Description

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>EmploymentPeriod</td>
<td>Provides flexible options for representing employment period data</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

The same as /CandidateProfile/EducationHistory/EmployerHistory/EmploymentPeriod

3.14.9.2 EmploymentPeriod Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateProfile/EducationHistory/EmployerHistory/EmploymentPeriod</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

3.14.10 Sub-element:
/CandidateProfile/EmploymentHistory/EmployerHistory/PositionHistory/PersonCompetency
(level 5)

3.14.10.1 PersonCompetency Description

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>Person Competency</td>
<td>A specified person competency is a skill within the context of a personal record (profile, appraisal and assessment) that is assessed or asserted at specified level of proficiency.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

The same as /CandidateProfile/PersonQualifications/PersonCompetency

3.14.10.2 PersonCompetency Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>The same as /CandidateProfile/PersonQualifications/PersonCompetency</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

3.14.11 Sub-element: /CandidateProfile/EmploymentHistory/EmployerHistory/AttachmentReference
(level 4)

3.14.11.1 AttachmentReference Element Description

&lt;img&gt;Diagram showing eures:AttachmentReference with cardinality 0..∞, connected to AttachmentReferenceType with cardinality 1..∞, which has attributes oa:Description (cardinality 1..∞) and hr:XPath (cardinality 1..∞). A note says "It contains references to external documents attached."&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>AttachmentReference</td>
<td>Reference to the external documents attached</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 77 of 160&lt;/page_number&gt;

---


## Page 78

html
<table>
  <thead>
    <tr>
      <th colspan="5">Sub-elements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>XPath</b></td>
      <td>Reference to an embedded document located in another element of the schema</td>
      <td>1..n</td>
      <td>N/A</td>
      <td></td>
    </tr>
    <tr>
      <td><b>Description</b></td>
      <td>Narrative details of the external document attached</td>
      <td>1..n</td>
      <td>N/A</td>
      <td>"Education History"</td>
    </tr>
  </tbody>
</table>

3.14.11.2 AttachmentReference Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>This element has no attributes.</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

XPath attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>This sub-element has no attributes.</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

Description attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Refer to DescriptionType Attribute section for additional attributes.</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.15 /CandidateProfile/EmploymentReferences (level 2)

3.15.1 EmploymentReferences Element Description

&lt;img&gt;A diagram showing the structure of the EmploymentReferences element. It contains a root element "EmploymentReferences" with a cardinality of 0..1. This element has a child element "@Attributes" with a cardinality of 0..1. The "EmploymentReferences" element also has a child element "Referee" with a cardinality of 0..*.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EmploymentReferences</td>
      <td>Contains information on one or more people who are or may be a source of information about a person's skills, prior employment, character, or suitability for employment</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Referee</td>
      <td>A person who may be referred to for information or guidance on a person's character or other qualities, specifically an applicant for employment, for an academic or other award, or the like.<br><br>See section /CandidateProfile/EmploymentReference/Referee for information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 78 of 160&lt;/page_number&gt;

---


## Page 79

3.15.2 EmploymentReferences Attributes

&lt;img&gt;A diagram showing "EmploymentReferencesType" with attributes "hr:EffectiveDateAttributeGroup", "@ validFrom", "@ validTo". It also shows "EmploymentReferences" which contains information on one or more people who may be a source of information about a person's skills, prior...&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information.</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information.</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

Referee sub-element

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EmploymentReference/Referee for information</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 79 of 160&lt;/page_number&gt;

---


## Page 80

3.15.3 Sub-element: /CandidateProfile/EmploymentReferences/Referee (level 3)

3.15.3.1 RefereeElement Description

<mermaid>
graph TD
    subgraph EmploymentReferencesType
        A[Attributes]
    end

    subgraph RefereeType
        B(hr:RefereeTypeCode)
        C(eures:PersonName)
        D(Communication)
        E(hr:YearsKnownNumber)
        F(hr:Comment)
        G(Role)
        H(Link)
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> A
</mermaid>

OED: A person who may be referred to for information or guidance on the character or other qualities of someone, spec...

Contains information on one or more person who is or may be a source of information about a person's skills, prior...

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Referee</strong></td>
<td>A person who may be referred to for information or guidance on a person's character or other qualities, specifically of an applicant for employment, for an academic or other award, or the like.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>PersonName</strong></td>
<td>A component for capturing summary or fine-grain data that makes up a person's name</td>
<td>0..1</td>
<td>N/A</td>
<td>"Mr. John L Smith III, Phd", "Dr. Martin White", etc.</td>
</tr>
<tr>
<td colspan="5">The same as section /CandidatePerson/PersonName</td>
</tr>
<tr>
<td><strong>RefereeTypeCode</strong></td>
<td>A code classifying the reference type (e.g. "Professional", "Personal", "Verification")</td>
<td>0..1</td>
<td>BR-CV-22: The HR-Open Standards Code List "RefereeTypeCode".</td>
<td>"Professional", "Personal", "Verification"<br><br>Full code list: "HR-Open/EURES: RefereeTypeCode [CL46]"</td>
</tr>
<tr>
<td><strong>Communication</strong></td>
<td>Communication of the referee</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5">The same as section /CandidateSupplier/PersonContact/Communication</td>
</tr>
<tr>
<td><strong>Years Known Number</strong></td>
<td>Number of years known</td>
<td>0..1</td>
<td>N/A</td>
<td>"1", "2", "3", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 80 of 160&lt;/page_number&gt;

---


## Page 81

<table>
  <tr>
    <td><strong>Comment</strong></td>
    <td>Comment given by a Referee.</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>"Comment about the referee"</td>
  </tr>
  <tr>
    <td><strong>Role</strong></td>
    <td>Specifies a role of referee in regards with a candidate.</td>
    <td>0..1</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><strong>Link</strong></td>
    <td>It specifies url link.</td>
    <td>0..1</td>
    <td></td>
    <td></td>
  </tr>
</table>

3.15.3.2 <em>RefereeAttributes</em>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PersonName attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">The same as section /CandidatePerson/PersonName</td>
    </tr>
    <tr>
      <td colspan="4"><strong>RefereeTypeCode attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Communication attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">The same as section /CandidateSupplier/PersonContact/Communication</td>
    </tr>
    <tr>
      <td colspan="4"><strong>YearsKnownNumber attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Comment attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to NoteType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Role attributes</strong></td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the title.</td>
      <td>0..1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4"><strong>Link attributes</strong></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

3.16 /CandidateProfile/Certifications (level 2)

3.16.1 Certifications Element Description

&lt;img&gt;CertificationsType Diagram&lt;/img&gt;

<table>
  <tr>
    <th>Element</th>
    <th>Description</th>
    <th>Cardinality</th>
    <th>Rule</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td>Certifications</td>
    <td>A collection of information about one or more certifications.<br>Certifications are formal statements by an issuing authority that the certification holder has met educational or testing requirements associated with the certification.</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td colspan="5"><strong>Sub-elements</strong></td>
  </tr>
  <tr>
    <td>Certification</td>
    <td>A document certifying the status or acuirements of the bearer, or his/her fulfilment of conditions authorizing him/her to act or practise in a specified way and which is therefore often equal to a licence.<br>See section /CandidateProfile/Certifications/Certification for more information</td>
    <td>0..n</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
</table>

3.16.2 Certifications Attributes

<table>
  <tr>
    <th>Attributes</th>
    <th>Description</th>
    <th>Card.</th>
    <th>Rule</th>
  </tr>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 81 of 160&lt;/page_number&gt;

---


## Page 82

<table>
  <tr>
    <td><strong>validFrom</strong></td>
    <td>Validity start date for this entity's information</td>
    <td>0..1</td>
    <td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
  </tr>
  <tr>
    <td><strong>validTo</strong></td>
    <td>Validity enddate for this entity's information</td>
    <td>0..1</td>
    <td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
  </tr>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">Certification sub-element</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/Certifications/Certification for more information</td>
    </tr>
  </tbody>
</table>

3.16.3 Sub-element: /CandidateProfile/Certifications/Certification (level 3)

3.16.3.1 Certification Element Description

<mermaid>
graph TD
    A[CertificationsType] --> B[Attributes]
    B --> C{eures:CertificationType (extension base)}
    C --> D[Attributes]
    D --> E[hr:CertificationTypeCode]
    D --> F[hr:CertificationName]
    D --> G[FirstIssuedDate]
    D --> H[FreeFormEffectivePeriod]
    D --> I[IssuingAuthority]
    D --> J[oa:Description]
    D --> K[AttachmentReference]
    C --> L[Certification]
    L --> M[Link]
    M --> N[It specifies website link]
    E -- "A code classifying the type of credential." --> E
    F -- "Name of the certification" --> F
    G -- "First date issued" --> G
    H -- "Indicates the period in which the associated component is effective. Based on the same TimePeriodType UN/CEFACT ABIE (except that the start date is optional). The xsd:choice" --> H
    I -- "An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or persons..." --> I
    J -- "ABIE Certification. Details A document certifying the status or acuirements of the bearer, or his/her fulfilment of..." --> J
    K -- "It specifies website link." --> K
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Certification</strong></td>
      <td>A document certifying the status or acuirements of the bearer, or his/her fulfilment of conditions authorizing him/her to act or practise in a specified way and which is therefore often equal to a licence.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>CertificationTypeCode</strong></td>
      <td>A code classifying the type of credential</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Appeal-Standard", "Certification Not Required", etc.</td>
    </tr>
    <tr>
      <td><strong>CertificationName</strong></td>
      <td>Name of the certification</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Transmission System Operators", etc.</td>
    </tr>
    <tr>
      <td><strong>FirstIssuedDate</strong></td>
      <td>First date issued<br/>See section /CandidateProfile /Certifications/Certification/FirstIssuedDate for more information</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>FreeFormEffectivePeriod</strong></td>
      <td>Indicates the period in which the associated component is effective. Based on the same TimePeriodType UN/CEFACT ABIE (except that the start date is optional). The xsd:choice</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 82 of 160&lt;/page_number&gt;

---


## Page 83

<table>
  <tr>
    <td></td>
    <td>between an EndDate and Duration was also removed for processing simplicity. Generally, an EndDate or Duration would appear, but not both. This usage rule is not enforced by the schema.<br><br>See section /CandidateProfile/Certifications/Certification/FreeFormEffectivePeriod for more information</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IssuingAuthority</td>
    <td>An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or people exercising power or command. An issuing authority is often a government agency or official authority, but can sometimes be a private organization.<br><br>See section /CandidateProfile/Certifications/Certification/IssuingAuthority for more information</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Description of the certification</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>"Certification of Transmission System Operators at EU", etc.</td>
  </tr>
  <tr>
    <td>AttachmenReference</td>
    <td>Reference to the external documents attached<br><br>The same as /EmploymentHistory/EmployerHistory/AttachmentReference section</td>
    <td>0..n</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Link</td>
    <td>It specifies website link.</td>
    <td>0..n</td>
    <td></td>
    <td></td>
  </tr>
</table>

### 3.16.3.2 Certification Attributes

<mermaid>
graph TD
    A["ABIE Certifications. Details A collection of information about one or more certifications. Certifications are formal..."] --> B["ABIE Certification. Details A document certifying the status or acquirments of the bearer, or his fulfilment of..."]
    B --> C["hr:EffectiveDateAttributeGroup"]
    C --> D["@ validFrom"]
    C --> E["@ validTo"]
    D --> F["HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral..."]
    E --> F
    A --> G["CertificationsType"]
    G --> H["Attributes"]
    H --> I["Certification"]
    I --> J["Attributes"]
    J --> K["CertificationType"]
    K --> L["Attributes"]
    L --> M["hr:EffectiveDateAttributeGroup"]
    M --> N["@ validFrom"]
    M --> O["@ validTo"]
    N --> P["HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral..."]
    O --> P
</mermaid>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information.</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information.</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**CertificationTypeCode attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

**CertificationName attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the CertificationName.</td>
      <td>0..1</td>
      <td></td>
    </tr>
  </tbody>
</table>

**Description attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4"></td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 83 of 160&lt;/page_number&gt;

---


## Page 84

html
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes,</td>
    </tr>
    <tr>
      <td colspan="4"><b>FreeFormEffectivePeriod attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Certifications/Certification/FreeFormEffectivePeriod for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>IssuingAuthority attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Certifications/Certification/IssuingAuthority for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>AttachmentReference attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">The same as /EmploymentHistory/EmployerHistory/AttachmentReference attributes section</td>
    </tr>
    <tr>
      <td colspan="4"><b>FirstIssuedDate attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Certifications/Certification/FirstIssuedDate for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>Link attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

3.16.4 Sub-element: /CandidateProfile/Certificaitons/Certification/FirstIssuedDate (level 4)

3.16.4.1 FirstIssuedDate Element Description

<mermaid>
graph TD
    subgraph " "
        A[FreeFormDateType]
        B(hr:FreeFormDateTimeType (restriction base))
        C[FormattedDateTime]
        D[DateText]
        E(hr:FormattedDateTime)
        F(hr:DateText)
    end

    A --> B
    B --> C
    B --> D
    A --> E
    A --> F
</mermaid>

```html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FirstIssuedDate</td>
      <td>First date issued</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td colspan="5">The same as /CandidateProfile/EducationHistory/EdudacationOrganizationAttendance/EducationDegree/DegreeDate</td>
    </tr>
  </tbody>
</table>
```

3.16.4.2 FirstIssuedDate Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">The same as /CandidateProfile/EducationHistory/EdudacationOrganizationAttendance/EducationDegree/DegreeDate Attributes section.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 84 of 160&lt;/page_number&gt;

---


## Page 85

3.16.5 Sub-element: /CandidateProfile/Certifications/Certification/FreeFormEffectivePeriod (level 4)

3.16.5.1 FreeFormEffectivePeriod Element Description

<mermaid>
graph TD
    A[FreeFormEffectivePeriodType] --> B[Attributes]
    A --> C[FreeFormEffectivePeriod]
    C --> D[StartDate]
    C --> E[EndDate]
    C --> F[oa:Duration]
    F -- "Indicates the duration of time as represented by ISO 8601. Where the value space is a six dimensional space where the..." --> G[ABIE Effective Date Period. Details Indicates the date period in which the associated component is effective. Based on...]
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>FreeFormEffectivePeriod</strong></td>
<td>Indicates the date period in which the associated component is effective, based on the same <br/>TimePeriodType UN/CEFACT ABIE (except that the start date is optional). The xsd:choice between an EndDate <br/>and Duration was also removed for processing simplicity. Generally, an EndDate or Duration would appear, but not both. This usage rule is not enforced by the schema.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>Start Date</strong></td>
<td>A timestamp marking the beginning of the attendance period</td>
<td>1</td>
<td>BR-COM-16: At least one of its sub-elements must be provided.</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5">See section<br/><em>/CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate</em> for more information</td>
</tr>
<tr>
<td><strong>End Date</strong></td>
<td>A timestamp marking the end of the attendance period</td>
<td>0..1</td>
<td>BR-COM-16: At least one of its sub-elements must be provided.</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5">See section <em>/CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate</em> for more information</td>
</tr>
<tr>
<td><strong>Duration</strong></td>
<td>Indicates the duration of time as represented by ISO 8601, where the value space is a six-dimensional space in which the coordinates designate the Gregorian year, month, day, hour, minute, and second. The number of seconds can include decimal digits for arbitrary precision.</td>
<td>0..1</td>
<td>N/A</td>
<td>"2010-09-02", "2011-07", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 85 of 160&lt;/page_number&gt;

---


## Page 86

3.16.5.2 FreeFormEffectivePeriod Attributes

<mermaid>
graph TD
    A[FreeFormEffectivePeriodType] --> B[Attributes]
    B --> C[hr:EffectiveDateAttributeGroup]
    C --> D[@ validFrom]
    C --> E[@ validTo]
    A --> F[FreeFormEffectivePeriod]
    F --> G[ABIE Effective Date Period. Details Indicates the date period in which the associated component is effective. Based on...]
</mermaid>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**StartDate sub-element**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/StartDate for more information</td>
    </tr>
  </tbody>
</table>

**EndDate sub-element**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/EducationHistory/EducationOrganizationAttendance/AttendancePeriod/EndDate for more information</td>
    </tr>
  </tbody>
</table>

**DurationMeasure sub-element**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

3.16.6 Sub-element: /CandidateProfile/Certifications/Certification/IssuingAuthority (level 4)

3.16.6.1 IssuingAuthority Element Description

<mermaid>
graph TD
    A[IssuingAuthorityType] --> B[IssuingAuthority]
    B --> C[Name]
    A -- "An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or persons..." --> B
    C -- "Identifies the Name of the object in which associated." --> C
    B -- "Issuing Authority. Details The country and organization or persons with the authority to issue a license or certificate." --> B
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Issuing Authority</td>
      <td>An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or people exercising power or command. An issuing authority is often a government agency or official authority but can sometimes be a private organization.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Identifies the Name of the associated object</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Organization", etc.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 86 of 160&lt;/page_number&gt;

---


## Page 87

3.16.6.2 IssuingAuthority Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Name attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">Refer to NameType Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

3.16.7 Sub-element: /CandidateProfile/Certifications/Certification/AttachmentReference (level 4)

3.16.7.1 AttachmentReference Element Description

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>AttachmentReference</td>
<td>Reference to external documents attached</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td colspan="5">The same as /CandidateProfile/EmploymentHistory/EmployerHistory/AttachmentReference section</td>
</tr>
</tbody>
</table>

3.16.7.2 AttachmentReference Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">The same as /CandidateProfile/EmploymentHistory/EmployerHistory/AttachmentReference section</td>
</tr>
</tbody>
</table>

3.17 /CandidateProfile/CandidateEmployerPreferences (level 2)

3.17.1 CandidateEmployerPreferences Element Description

<mermaid>
graph TD
    subgraph CandidateEmployerPreferencesType
        A[eures:CandidateEmployerPreferences]
        B(hr:IndustryCode)
        C(hr:OrganizationSizeCode)
        D(hr:OrganizationOwnershipTypeCode)
        E[It contains information about a candidate's employer preferences.]

        A --> B
        A --> C
        A --> D
    end

    A -- "0..∞" --> B
    A -- "0..∞" --> C
    A -- "0..∞" --> D

    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>CandidateEmployerPreferences</td>
<td>Information about a candidate's preferences in an employer</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td>IndustryCode</td>
<td>A code classifying the industry of the related organization, position, or other entity</td>
<td>0..n</td>
<td>
BR-COM-20: Compulsory use of the “NACE-CodeList.gc” list defined by EURES. This is based on EU NACE.<br><br>
BR-COM-43: Multiple entries of this code list are allowed.
</td>
<td>
“01” = Agriculture,<br>
“02” = Forestry, etc.<br><br>
Full code list: “HR-Open/EURES: NACE [CL31]”
</td>
</tr>
<tr>
<td>OrganizationSizeCode</td>
<td>Contains a code classifying an organization’s size or</td>
<td>0..n</td>
<td>
BR-COM-26: Compulsory use of the “EURES_OrganizationSize-CodeList.gc” list defined by EURES. This is based on EU – C (2003) 1422, including Large enterprises.
</td>
<td>
“MicroEnterprise”,<br>
“SmallEnterprise”,<br>
etc.
</td>
</tr>
</tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 87 of 160&lt;/page_number&gt;

---


## Page 88

html
<table>
  <tr>
    <td></td>
    <td>business scope</td>
    <td></td>
    <td>BR-COM-43: Multiple entries of this code list are allowed.</td>
    <td>Full code list: "HR-Open/EURES: OrganizationSizeCode [CL35]"</td>
  </tr>
  <tr>
    <td><b>OrganizationOwnershipCode</b></td>
    <td>Code of the ownership organisation<br>This is an HR-Open Standards open list.</td>
    <td>0..1</td>
    <td>BR-COM-27: Compulsory use of the "OrganizationOwnershipTypeCodeContentType" list.</td>
    <td>"Public", "Private", "Non-profit", "Government"<br><br>Full code list: "4.28.23 Organization Ownership Codes [CL34]"</td>
  </tr>
</table>
```

## 3.17.2 CandidateEmployerPreferences Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>IndustryCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>OrganizationSizeCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>OrganizationOwnershipTypeCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 88 of 160&lt;/page_number&gt;

---


## Page 89

3.18 /CandidateProfile/CandidatePositionPreferences (level 2)

3.18.1 CandidatePositionPreferences Element Description

<mermaid>
graph TD
    A[PreferenceMatchingType] --> B(CandidatePositionPreferences)
    B --> C(PreferredLocation)
    B --> D(eures:JobCategory)
    B --> E(hr:PositionTitle)
    B --> F(hr:PositionOfferingTypeCode)
    B --> G(hr:PositionScheduleTypeCode)
    B --> H(hr:ShiftDescription)
    B --> I(OfferedRemunerationPackage)
    B --> J(eures:TravelPreference)
    B --> K(eures:RelocationConsidered)
    B --> L(WorkingLanguageCode)
    B --> M(oa:Description)

    subgraph CandidatePositionPreferences
        direction LR
        B -- "It contains a collection of information about a candidate's preferences in an position." --> B
        C -- "It contains location of the preferred position." --> C
        D -- "It contains the type or category of the job. May be used for occupational classification of the job." --> D
        E -- "A short phrase describing the position as it would be listed on a business card or in a company directory. OED: An..." --> E
        F -- "These are values that are descriptive in classifying a position within advertising or communications of a position..." --> F
        G -- "Describes a position's general schedule." --> G
        H -- "Descriptive information about a work shift. \"Shift\" refers to a portion or division of time during which employees or..." --> H
        I -- "It contains the remuneration offered." --> I
        J -- "It contains travel preference details." --> J
        K -- "It indicates if a candidate would consider moving to a new city or location for a suitable position." --> K
        L -- "A code classifying the language or languages used within the workplace or associated with work. This is intended to..." --> L
        M -- "It contains a description of position preferences." --> M
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinalit y</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>CandidatePositionPreference s</td>
<td>Information about a candidate's preferences in a position</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td>PreferredLocation</td>
<td>Location of the preferred position</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 89 of 160&lt;/page_number&gt;

---


## Page 90

See section /CandidateProfile/CandidatePositionPreferences/PreferredLocation for more information

<table>
  <tr>
    <td><b>JobCategory</b></td>
    <td>The type or category of the job. May be used for occupational classification of the job.</td>
    <td>1..n</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/JobCategory for more information</td>
  </tr>
  <tr>
    <td><b>PositionTitle</b></td>
    <td>A short phrase describing the position as it would be listed on a business card or in a company directory</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>“President”, “Chief Executive Officer”, etc.</td>
  </tr>
  <tr>
    <td><b>PositionOfferingTypeCode</b></td>
    <td>These values are descriptive in classifying a position opportunity<br>This is an HR-Open Standards open list.</td>
    <td>0..n</td>
    <td>BR-COM-38: Compulsory use of the “PositionOfferingCodeContentType” list.<br><br>BR-COM-43: Multiple entries of this code list are allowed.</td>
    <td>“DirectorHire”,<br>“Temporary”,<br>“TemporaryToHire”,<br>“ContractToHire”,<br>Etc.<br><br>Full code list: “HR-Open/EURES: PositionOfferingCodeContentType [CL37]”</td>
  </tr>
  <tr>
    <td><b>PositionScheduleTypeCode</b></td>
    <td>Describes a position’s general schedule<br>This is an HR-Open Standards open list.</td>
    <td>0..n</td>
    <td>BR-COM-39: Compulsory use of the “PositionScheduleCodeContentType” list.<br><br>BR-COM-43: Multiple entries of this code list are allowed.</td>
    <td>“FullTime”,<br>“PartTime”,<br>“FlexTime”,<br>“Any”<br><br>Full code list: “HR-Open/EURES: PositionScheduleCodeContentType [CL38]”</td>
  </tr>
  <tr>
    <td><b>ShiftDescription</b></td>
    <td>Descriptive information about a work shift. “Shift” refers to a portion or division of time during which employees or resources are scheduled to be engaged or on-duty.</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>“Description about a work shift”, etc.</td>
  </tr>
  <tr>
    <td><b>OfferedRemunerationPackage</b></td>
    <td>Remuneration offered</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/OfferedRemunerationPackage for more information</td>
  </tr>
  <tr>
    <td><b>TravelPreference</b></td>
    <td>Travel Preference details</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/TravelPreference for more information</td>
  </tr>
  <tr>
    <td><b>RelocationConsidered</b></td>
    <td>Indicates if a candidate would consider moving to a new city or location for a suitable position</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td></td>
    <td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/RelocationConsidered for more information</td>
  </tr>
  <tr>
    <td><b>WorkingLanguageCode</b></td>
    <td>A code classifying the language or languages used within the workplace or associated with work. This is intended to communicate general information about the language(s) used within the work</td>
    <td>0..n</td>
    <td>Compulsory use of Languages [ECV06] code list.<br><br>BR-COM-43: Multiple entries of this code list are allowed.</td>
    <td>Europass2: Languages [ECV06]</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 90 of 160&lt;/page_number&gt;

---


## Page 91

<table>
  <tr>
    <td></td>
    <td>environment or general information about a candidate's specific language preferences. This component might be offered as descriptive "pre-qualification" information on a position announcement. It might appear within the context of a Candidate Profile as a general statement of a candidate's general language capabilities or preferences. WorkingLanguageCode is not intended as a statement of language proficiency or specific requirement relating to language proficiency. Specific information regarding language proficiency should be covered either within PersonCompetency or as may be appropriate.</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Description of position preferences</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>"Description of the position preferences", etc.</td>
  </tr>
</table>

## 3.18.2 CandidatePositionPreferences Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>OfferedRemunerationPackage attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/OfferedRemunerationPackage for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PositionTitle attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to PositionTitleType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>ShiftDescription attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Description attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PositionOfferingTypeCode attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PositionScheduleTypeCode attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>WorkingLanguageCode attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td>typeCode</td>
      <td>It specifies type of the selected language: NORMAL, SIGN, CLASSSIC or FREETEXT</td>
      <td>0..1</td>
      <td>Values must be: NORMAL, SIGN, CLASSSIC or FREETEXT</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PreferredLocation attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 91 of 160&lt;/page_number&gt;

---


## Page 92

See section /CandidateProfile/CandidatePositionPreferences/PreferredLocation for more information

**RelocationConsidered attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/RelocationConsidered for more information</td>
</tr>
</tbody>
</table>

**TravelPreference attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/TravelPreference for more information</td>
</tr>
</tbody>
</table>

**JobCategory attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/CandidatePositionPreferences/OfferedRemunerationPackage/JobCategory for more information</td>
</tr>
</tbody>
</table>

3.18.3 Sub-element: /CandidateProfile/CandidatePositionPreference/PreferredLocation (level 3)

3.18.3.1 PreferredLocation Element Description

<mermaid>
graph TD
    subgraph " "
        A(PreferredLocationType)
        B(PreferredLocation)
        C(hr:MaximumCommuteDistanceMeasure)
        D(ReferenceLocation)
    end
    A -- "0..∞" --> B
    B -- "It contains location of the preferred position." --> B
    A -- "1..∞" --> C
    C -- "The maximum distance required or preferred to commute." --> C
    A -- "1..∞" --> D
    D -- "A base location from which a distance, commuting time, or travel directions, etc. is calculated." --> D
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>PreferredLocation</td>
<td>Location of the preferred position</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

**Sub-elements**

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>MaximumCommuteDistance</td>
<td>The maximum distance required or preferred to commute</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>ReferenceLocation</td>
<td>A base location from which a distance, commuting time, or travel directions, etc. is calculated<br><br>See section /CandidateProfile/CandidatePositionPreference/PreferredLocation/ReferenceLocation for more information</td>
<td>1..n</td>
<td></td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.18.3.2 PreferredLocation Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
</tbody>
</table>

**MaximumCommuteDistanceMeasure attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to MeasureType Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

**ReferenceLocation attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/CandidatePositionPreference/PreferredLocation/ReferenceLocation for more information</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 92 of 160&lt;/page_number&gt;

---


## Page 93

3.18.4 Sub-element:
/CandidateProfile/CandidatePositionPreference/PreferredLocation/ReferenceLocation (level 4)

3.18.4.1 ReferenceLocation Element Description

<mermaid>
graph TD
    A[ReferenceLocationType] --> B[oa:CityName]
    A --> C[oa:CountrySubDivisionCode]
    A --> D[CountryCode]
    A --> E[oa:PostalCode]

    subgraph ReferenceLocation
        F[ReferenceLocation]
    end

    A -- "A base location from which<br>a distance, commuting<br>time, or travel directions,<br>etc. is calculated." --> F
    F -- "A base location from which a distance, commuting time, or travel directions, etc. is calculated." --> A
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ReferenceLocation</strong></td>
<td>A base location from which a distance, commuting time, or travel directions, etc. is calculated</td>
<td>1..n</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>CityName</strong></td>
<td>Identifies the town or the city</td>
<td>0..1</td>
<td>N/A</td>
<td>"Brussels", "Barcelona", "London", etc.</td>
</tr>
<tr>
<td><strong>CountrySubdivisionCode</strong></td>
<td>Qualifies the further division of the Member States of Europe, which can be Districts, Regions, States, Provinces etc.</td>
<td>0..1</td>
<td>BR-COM-21: Compulsory use of the "EURES_CountrySubdivisionCodes-CodeList.gc" list defined by EURES. This is based on NUTS 2013 – Level 3.<br><br>BR-COM-53: If CountryCode is specified, CountrySubDivisionCode value must correspond to CountryCode value.</td>
<td>"BE07", "CS01", etc.<br><br>Full code list: "HR-Open/EURES: CountrySubdivisionCodes [CL08]"</td>
</tr>
<tr>
<td><strong>CountryCode</strong></td>
<td>Code of the country</td>
<td>0..1</td>
<td>Compulsory use of CountriesAndNationalities [ECV02], AuxCountriesAndNationalities [ECV10]</td>
<td>Europass2: CountriesAndNationalities [ECV02],<br>Europass2: AuxCountriesAndNationalities [ECV10]</td>
</tr>
<tr>
<td><strong>PostalCode</strong></td>
<td>The Address' Postal Code.</td>
<td>0..1</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 93 of 160&lt;/page_number&gt;

---


## Page 94

3.18.4.2 *ReferenceLocation Attributes*

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes</td>
</tr>
<tr>
<td colspan="4"><strong>CityName attributes</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to NameType Attributes section for additional attributes</td>
</tr>
<tr>
<td colspan="4"><strong>PostalCode attributes</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to CodeType Attribute section for additional attributes</td>
</tr>
<tr>
<td colspan="4"><strong>CountrySubdivision attributes</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to CodeListAttributeGroup section for additional attributes</td>
</tr>
<tr>
<td colspan="4"><strong>CountryCode attributes</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date as a resident of the country</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date as a resident of the country</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td colspan="4">Refer to CodeListAttributeGroup Attributes for additional attributes.</td>
</tr>
</tbody>
</table>

3.18.5 Sub-element: /CandidateProfile/CandidatePositionPreference/JobCategory (level 3)

3.18.5.1 *JobCategory Element Description*

&lt;img&gt;Diagram showing "JobCategoryType" with "hr:JobCategoryCode" and "oa:Description"&lt;/img&gt;

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>JobCategory</strong></td>
<td>Category of the job</td>
<td>1..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>JobCategoryCode</strong></td>
<td>A code classifying the type or category of a job. This may be used for its occupational classification. The JobCategoryCode will usually be repeatable so that a single job could be classified across multiple dimensions.<br>The JobCategoryCode could be used to classify the job by industry but note that an explicit IndustryCode is available in contexts such as PositionOrganizationDetails.</td>
<td>1</td>
<td>BR-COM-29: Compulsory use of the “ISCO2008-CodeList.gc” list defined by EURES and based on ISCO-08.<br>Alternatively, use of ESCO Occupations – version 1.0.<br><br>BR-COM-55: Compulsory use of the attributes “listVersionID”, “listName” and “listURI”.</td>
<td>“1” – Managers,<br>“12” – Administrative,<br>etc.<br><br>Full code list: “HR-Open/EURES:<br>ISCO2008 [CL20]<br>HR-Open/EURES:<br>ESCO_Occupations<br>[CL20]</td>
</tr>
<tr>
<td><strong>Description</strong></td>
<td>Job category Description</td>
<td>0..1</td>
<td>N/A</td>
<td>“Description of job category”, etc.</td>
</tr>
</tbody>
</table>

3.18.5.2 *JobCategory Attributes*

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>JobCategoryCode attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">Refer to CodeType Attributes section for additional attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Description attributes</strong></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 94 of 160&lt;/page_number&gt;

---


## Page 95

html
<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

3.18.6 Sub-element: /CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage (level 3)

3.18.6.1 OfferedRemunerationPackage Element Description

<mermaid>
graph TD
    subgraph OfferedRemunerationPackageType
        OfferedRemunerationPackage --> @Attributes
        OfferedRemunerationPackage --> hr:RemunerationBasisCode
        OfferedRemunerationPackage --> RemunerationRange
        OfferedRemunerationPackage --> eures:BenefitsSummary
        OfferedRemunerationPackage --> oa:Description
    end

    @Attributes --> OfferedRemunerationPackage
    hr:RemunerationBasisCode --> OfferedRemunerationPackage
    RemunerationRange --> OfferedRemunerationPackage
    eures:BenefitsSummary --> OfferedRemunerationPackage
    oa:Description --> OfferedRemunerationPackage

    OfferedRemunerationPackage -- "It contains the remuneration offered." --> OfferedRemunerationPackage
    hr:RemunerationBasisCode -- "Position Remuneration Basis. Code A code classifying the primary method of payment for the associated position or..." --> hr:RemunerationBasisCode
    RemunerationRange -- "It contains remuneration range details." --> RemunerationRange
    eures:BenefitsSummary -- "It contains summary of the benefits." --> eures:BenefitsSummary
    oa:Description -- "It contains description of the remuneration offered." --> oa:Description

    OfferedRemunerationPackage -- "Terms offered or agreed regarding remuneration for a position. May include pay as well as benefits in-kind." --> OfferedRemunerationPackage
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinalit</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OfferedRemunerationPackage</td>
      <td>Remuneration offered</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RemunerationBasisCode</td>
      <td>A code classifying the primary method of payment for the associated position or employment. This classifies the method by which remuneration for a position is provided or calculated.<br><br>This is an HR-Open Standards open list.</td>
      <td>0..1</td>
      <td>BR-COM-30: Compulsory use of the "RemunerationBasisCodeContentType" list.<br><br>Full code list: "HR-Open/EURES: RemunerationBasisCodeContentType [CL48]"</td>
      <td>"Hourly", "Salaried", "SalariedPlusComission", "ComissionOnly"</td>
    </tr>
    <tr>
      <td>RemunerationRange</td>
      <td>Remuneration range details</td>
      <td>0..n</td>
      <td>BR-COM-31: All its sub elements must be expressed using the same currency.</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 95 of 160&lt;/page_number&gt;

---


## Page 96

mermaid
erDiagram
    OfferedRemunerationPackageType ||--o{ OfferedRemunerationPackage : "It contains the remuneration offered."
    OfferedRemunerationPackage {
        @Attributes
        hr:EffectiveDateAttributeGroup
            @ validFrom
            @ validTo
    }
```

See section
/CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/RemunerationRange for more information

<table>
  <tr>
    <td><b>BenefitsSummary</b></td>
    <td>Summary of benefits</td>
    <td>0..n</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td colspan="5">See section:<br>/CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/BenefitsSummary for more information</td>
  </tr>
  <tr>
    <td><b>Description</b></td>
    <td>Description of the remuneration offered</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>N/A</td>
  </tr>
</table>

3.18.6.2 *OfferedRemunerationPackage Attributes*

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>validFrom</b></td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td><b>validTo</b></td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**BenefitsSummary attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section: /CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/BenefitsSummary for more information</td>
    </tr>
  </tbody>
</table>

**RemunerationRange attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/RemunerationRange for more information</td>
    </tr>
  </tbody>
</table>

**RemnuerationBasisCode attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

**Description attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 96 of 160&lt;/page_number&gt;

---


## Page 97

3.18.7 Sub-element:
/CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/RemunerationRange (level 4)

3.18.7.1 RemunerationRange Element Description

<mermaid>
graph TD
    subgraph RemunerationRangeType
        A[RemunerationRange] --> B[hr:RemunerationTypeCode]
        A --> C[RemunerationReferenceAmount]
        A --> D[RemunerationMinimumAmount]
        A --> E[RemunerationMaximumAmount]
        A --> F[hr:RemunerationRateIntervalCode]
    end

    B -- "Remuneration Type Code The type of remuneration (e.g. BasePay, Bonus). CodeList: RemunerationTypeCodeType" --> B_desc
    C -- "A reference to an associated monetary amount. A monetary quantity. An attribute is available to express the currency in..." --> C_desc
    D -- "The minimum amount a person is willing to accept or an organization is willing to pay for a position." --> D_desc
    E -- "The maximum amount a person is willing to accept or an organization is willing to pay for a position." --> E_desc
    F -- "Remuneration Rate Interval Code A code identifying at what rate the remuneration is made. CodeList:..." --> F_desc

    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px

    B_desc: It contains remuneration range details.
    C_desc: The minimum and maximum range of work compensation. OED: Range n, A series or scale extending between certain limits.
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>RemunerationRange</strong></td>
<td>Remuneration range details</td>
<td>0..n</td>
<td><strong>BR-COM-31:</strong> All its sub elements must be expressed using the same currency.</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>RemunerationTypCode</strong></td>
<td>A code classifying the type of pay or remuneration being described<br>This is an HR-Open Standards open list.</td>
<td>0..1</td>
<td><strong>BR-COM-32:</strong> Compulsory use of the “RemunerationCodeContentType” list.</td>
<td>“BasePay”, “Commission”, “Bonus”, “ShortTermIncentive”, “ShiftPremium”<br>Full code list: “HR-Open/EURES: RemunerationCodeContentType [CL49]”</td>
</tr>
<tr>
<td><strong>RemunerationReferenceAmount</strong></td>
<td>A reference to an associated monetary quantity. An attribute is available to express the currency in which the amount is expressed.</td>
<td>0..1</td>
<td>N/A</td>
<td>“20000”, “35000”, etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 97 of 160&lt;/page_number&gt;

---


## Page 98

html
<table>
  <thead>
    <tr>
      <th>RemunerationMinimumAmount</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.1</td>
      <td>The minimum amount a person is willing to accept, or an organization is willing to pay for a position.</td>
      <td>N/A</td>
      <td>"20000", "35000", etc.</td>
    </tr>
    <tr>
      <td>RemunerationMaximumAmount</td>
      <td>The maximum amount a person is willing to accept, or an organization is willing to pay for a position.</td>
      <td>0.1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>RemunerationRateIntervalCode</td>
      <td>An interval of time or other basis used to express a rate of pay or remuneration</td>
      <td>0.1</td>
      <td>BR-COM-33: Compulsory use of the "RemunerationRateIntervalCodeContent Type" list.<br><br>This is an HR-Open Standards open list.</td>
    </tr>
  </tbody>
</table>

Figure 139: Name Attributes Schema

3.18.7.2 RemunerationRange Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4">RemunerationMinimumAmount attributes</td>
    </tr>
    <tr>
      <td>currencyID</td>
      <td>The currency in which the maximal and minimal salary are indicated.</td>
      <td>1</td>
      <td>Compulsory use of the Europass2: Currency [ECV08]</td>
    </tr>
    <tr>
      <td colspan="4">RemunerationMaximumAmount attributes</td>
    </tr>
    <tr>
      <td colspan="4">The same as "RemunerationMinimumAmount"</td>
    </tr>
    <tr>
      <td colspan="4">RemunerationReferenceAmount attributes</td>
    </tr>
    <tr>
      <td colspan="4">The same as "RemunerationMinimumAmount"</td>
    </tr>
    <tr>
      <td colspan="4">RemunerationRateIntervalCode attributes</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4">RemunerationTypeCode attributes</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes for additional attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 98 of 160&lt;/page_number&gt;

---


## Page 99

3.18.8 Sub-element:
/CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/BenefitsSummary (level 4)

3.18.8.1 BenefitsSummary Element Description

<mermaid>
graph TD
    A[BenefitsSummaryType] --> B(eures:BenefitsSummary)
    B -- "It contains summary of the benefits." --> C
    A --> D(OtherBenefits)
    D -- "ABIE Benefits Summary. Details A summary of employee benefits ("fringe benefits," health, pension, etc.) associated..." --> E
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>BenefitsSummary</strong></td>
<td>Summary of benefits</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>OtherBenefits</strong></td>
<td>Details of benefits<br>See section /CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/BenefitsSummary/OtherBenefits for more information</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.18.8.2 BenefitsSummary Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>OtherBenefits attributes</strong></td>
</tr>
</tbody>
</table>

3.18.9 Sub-element:
/CandidateProfile/CandidatePositionPreference/OfferedRemunerationPackage/BenefitsSummary/OtherBenefits (level 5)

3.18.9.1 OtherBenefits Element Description

<mermaid>
graph TD
    A[BenefitsSummaryType] --> B(OtherBenefitsType)
    B --> C(OtherBenefits)
    C -- "ABIE Benefits Summary. Details A summary of employee benefits ("fringe benefits," health, pension, etc.) associated..." --> D
    B --> E(hr:OtherBenefitsTypeCode)
    B --> F(oa:Description)
    E -- "BR-COM-40: Compulsory use of the \"EURES_SocialBenefitsCodes-CodeList.gc\" list defined by EURES." --> G
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>OtherBenefits</strong></td>
<td>Details of the other benefits</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>OtherBenefitsTypeCode</strong></td>
<td>Code of benefits that the candidate would like</td>
<td>0..n</td>
<td>BR-COM-40: Compulsory use of the "EURES_SocialBenefitsCodes-CodeList.gc" list defined by EURES.</td>
<td>"0" = Accommodation included,<br>"1" = Meals included,<br>etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 99 of 160&lt;/page_number&gt;

---


## Page 100

html
<table>
  <tr>
    <td>Description</td>
    <td>Narrative details of benefits</td>
    <td>0..1</td>
    <td>N/A</td>
    <td>BR-COM-43: Multiple entries of this code list are allowed.<br>Full code list: "HR-Open/EURES: SocialBenefitsCodes [CL52]"<br>"Description of other benefits", etc.</td>
  </tr>
</table>
```

3.18.9.2 OtherBenefits Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>OtherBenefitsTypeCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes</td>
    </tr>
    <tr>
      <td colspan="4"><b>Description attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

3.18.10 Sub-element: /CandidateProfile/CandidatePositionPreference/TravelPreference (level 3)

3.18.10.1 TravelPreference Element Description

&lt;img&gt;Diagram showing TravelPreferenceType with sub-elements WillingToTravelIndicator, TravelPercentage, and Description.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TravelPreference</td>
      <td>Travel Preference Details</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>WillingToTravelIndicator</td>
      <td>Indicates that a person is willing to travel within the capacity of his or her position</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"True" or "False"</td>
    </tr>
    <tr>
      <td>TravelPercentage</td>
      <td>A rate, number or proportion per hundred. The percentage of time required for a position or the percentage of time a person is willing to travel for a particular position</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"25", "35", etc.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Description of the travel preference</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.18.10.2 TravelPreference Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>Description attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>WillingToTravelIndicator attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>TravelPercentage attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 100 of 160&lt;/page_number&gt;

---


## Page 101

3.18.11 Sub-element: /CandidateProfile/CandidatePositionPreference/RelocationConsidered (level 3)

3.18.11.1 RelocationConsidered Element Description

<mermaid>
graph TD
    subgraph RelocationConsideredType
        A[RelocationConsideredIndicator]
        B[Description]
    end
    C[eures:RelocationConsidered]
    D[It indicates if a candidate would consider moving to a new city or location for a suitable position.]

    C --> D
    C -- "*" --> A
    C -- "*" --> B
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>RelocationConsidered</td>
<td>Indicates if a candidate would consider moving to a new city or location for a suitable position</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>RelocationConsideredIndicator</td>
<td>Indicates whether relocation is an option for the candidate or considered by the hiring company</td>
<td>0..1</td>
<td>N/A</td>
<td>"True" or "False"</td>
</tr>
<tr>
<td>Description</td>
<td>Description of the relocation considered</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A.</td>
</tr>
</tbody>
</table>

3.18.11.2 RelocationConsidered Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
</tbody>
</table>

Description sub-element

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

RelocationConsidered sub-element

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This sub-element has no attributes.</td>
</tr>
</tbody>
</table>

3.19 /CandidateProfile/Licenses (level 2)

3.19.1 Licenses Element Description

<mermaid>
graph TD
    subgraph LicensesType
        A[Attributes]
        B[License]
        C[LicenseType]
    end
    D[eures:Licenses]
    E[Licenses History of Licenses.]
    F[ABIE License. Details Authoritative permission to hold a certain status or to do certain things , e.g. to practise some...]
    G[Licenses. Details Contains details on one or more licenses.]

    D --> E
    D -- "*" --> A
    D -- "0..*" --> B
    B -- "+" --> C
    B -- "0..*" --> F
    B -- "0..*" --> G
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>Licenses</td>
<td>Contains details on one or more licenses (driver's licences)</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>License</td>
<td>Driving permission or authorisation</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 101 of 160&lt;/page_number&gt;

---


## Page 102

See section /CandidateProfile/Licenses/License for more information

3.19.2 Licenses Attributes

<mermaid>
graph TD
    A[LicensesType] --> B[Attributes]
    B --> C[hr:EffectiveDateAttributeGroup]
    C --> D[@validFrom]
    C --> E[@validTo]
    subgraph "hr:EffectiveDateAttributeGroup"
        direction LR
        D --> E
    end
    A --> F[Licenses]
    F --> G[Licenses History of Licenses]
    F --> H[Licenses]
    H --> I[Licenses. Details Contains details on one or more licenses.]
</mermaid>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

License attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/Licenses/License for more information</td>
    </tr>
  </tbody>
</table>

3.19.3 Sub-element: /CandidateProfile/Licenses/License (level 3)

3.19.3.1 License Element Description

<mermaid>
graph TD
    A[LicensesType] --> B[Attributes]
    B --> C[Licenses]
    C --> D[Licenses]
    D --> E[Licenses]
    D --> F[Licenses]
    D --> G[Licenses]
    D --> H[Licenses]
    D --> I[Licenses]
    D --> J[Licenses]
    D --> K[Licenses]
    D --> L[Licenses]
    D --> M[Licenses]
    D --> N[Licenses]
    D --> O[Licenses]
    D --> P[Licenses]
    D --> Q[Licenses]
    D --> R[Licenses]
    D --> S[Licenses]
    D --> T[Licenses]
    D --> U[Licenses]
    D --> V[Licenses]
    D --> W[Licenses]
    D --> X[Licenses]
    D --> Y[Licenses]
    D --> Z[Licenses]
    D --> AA[Licenses]
    D --> BB[Licenses]
    D --> CC[Licenses]
    D --> DD[Licenses]
    D --> EE[Licenses]
    D --> FF[Licenses]
    D --> GG[Licenses]
    D --> HH[Licenses]
    D --> II[Licenses]
    D --> JJ[Licenses]
    D --> KK[Licenses]
    D --> LL[Licenses]
    D --> MM[Licenses]
    D --> NN[Licenses]
    D --> OO[Licenses]
    D --> PP[Licenses]
    D --> QQ[Licenses]
    D --> RR[Licenses]
    D --> SS[Licenses]
    D --> TT[Licenses]
    D --> UU[Licenses]
    D --> VV[Licenses]
    D --> WW[Licenses]
    D --> XX[Licenses]
    D --> YY[Licenses]
    D --> ZZ[Licenses]
    D --> AAA[Licenses]
    D --> BBB[Licenses]
    D --> CCC[Licenses]
    D --> DDD[Licenses]
    D --> EEE[Licenses]
    D --> FFF[Licenses]
    D --> GGG[Licenses]
    D --> HHH[Licenses]
    D --> III[Licenses]
    D --> JJJ[Licenses]
    D --> KKK[Licenses]
    D --> LLL[Licenses]
    D --> MMM[Licenses]
    D --> NNN[Licenses]
    D --> OOO[Licenses]
    D --> PPP[Licenses]
    D --> QQQ[Licenses]
    D --> RRR[Licenses]
    D --> SSS[Licenses]
    D --> TTT[Licenses]
    D --> UUU[Licenses]
    D --> VVV[Licenses]
    D --> WWW[Licenses]
    D --> XXX[Licenses]
    D --> YYY[Licenses]
    D --> ZZZ[Licenses]
    D --> AAAA[Licenses]
    D --> BBBB[Licenses]
    D --> CCCC[Licenses]
    D --> DDDD[Licenses]
    D --> EEEE[Licenses]
    D --> FFFF[Licenses]
    D --> GGGG[Licenses]
    D --> HHHH[Licenses]
    D --> IIII[Licenses]
    D --> JJJJ[Licenses]
    D --> KKKK[Licenses]
    D --> LLLL[Licenses]
    D --> MMMM[Licenses]
    D --> NNNN[Licenses]
    D --> OOOO[Licenses]
    D --> PPPP[Licenses]
    D --> QQQQ[Licenses]
    D --> RRRR[Licenses]
    D --> SSSS[Licenses]
    D --> TTTT[Licenses]
    D --> UUUU[Licenses]
    D --> VVVV[Licenses]
    D --> WWWW[Licenses]
    D --> XXXX[Licenses]
    D --> YYYY[Licenses]
    D --> ZZZZ[Licenses]
    D --> AAAAA[Licenses]
    D --> BBBBB[Licenses]
    D --> CCCCC[Licenses]
    D --> DDDDD[Licenses]
    D --> EEEEE[Licenses]
    D --> FFFFF[Licenses]
    D --> GGGGG[Licenses]
    D --> HHHHH[Licenses]
    D --> IIIII[Licenses]
    D --> JJJJJ[Licenses]
    D --> KKKKK[Licenses]
    D --> LLLLL[Licenses]
    D --> MMMMM[Licenses]
    D --> NNNNN[Licenses]
    D --> OOOOO[Licenses]
    D --> PPPPP[Licenses]
    D --> QQQQQ[Licenses]
    D --> RRRRR[Licenses]
    D --> SSSSS[Licenses]
    D --> TTTTT[Licenses]
    D --> UUUUU[Licenses]
    D --> VVVVV[Licenses]
    D --> WWWWW[Licenses]
    D --> XXXXX[Licenses]
    D --> YYYYY[Licenses]
    D --> ZZZZZ[Licenses]
    D --> AAAAAA[Licenses]
    D --> BBBBBB[Licenses]
    D --> CCCCCC[Licenses]
    D --> DDDDDD[Licenses]
    D --> EEEEEE[Licenses]
    D --> FFFFFF[Licenses]
    D --> GGGGGG[Licenses]
    D --> HHHHHH[Licenses]
    D --> IIIIII[Licenses]
    D --> JJJJJJ[Licenses]
    D --> KKKKKK[Licenses]
    D --> LLLLLL[Licenses]
    D --> MMMMMM[Licenses]
    D --> NNNNNN[Licenses]
    D --> OOOOOO[Licenses]
    D --> PPPPPP[Licenses]
    D --> QQQQQQ[Licenses]
    D --> RRRRRR[Licenses]
    D --> SSSSSS[Licenses]
    D --> TTTTTT[Licenses]
    D --> UUUUUU[Licenses]
    D --> VVVVVV[Licenses]
    D --> WWWWWW[Licenses]
    D --> XXXXXX[Licenses]
    D --> YYYYYY[Licenses]
    D --> ZZZZZZ[Licenses]
    D --> AAAAAAA[Licenses]
    D --> BBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFFFFF[Licenses]
    D --> GGGGGGGG[Licenses]
    D --> HHHHHHHH[Licenses]
    D --> IIIIIIII[Licenses]
    D --> JJJJJJJJ[Licenses]
    D --> KKKKKKKK[Licenses]
    D --> LLLLLLLL[Licenses]
    D --> MMMMMMMM[Licenses]
    D --> NNNNNNNN[Licenses]
    D --> OOOOOOOO[Licenses]
    D --> PPPPPPPP[Licenses]
    D --> QQQQQQQQ[Licenses]
    D --> RRRRRRRR[Licenses]
    D --> SSSSSSSS[Licenses]
    D --> TTTTTTTT[Licenses]
    D --> UUUUUUUU[Licenses]
    D --> VVVVVVVV[Licenses]
    D --> WWWWWWWW[Licenses]
    D --> XXXXXXXX[Licenses]
    D --> YYYYYYYY[Licenses]
    D --> ZZZZZZZZ[Licenses]
    D --> AAAAAAAA[Licenses]
    D --> BBBBBBBB[Licenses]
    D --> CCCCCCCC[Licenses]
    D --> DDDDDDDD[Licenses]
    D --> EEEEEEEE[Licenses]
    D --> FFFFF

---


## Page 103

html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>License</td>
      <td>Driving permission or authorisation</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>LicenseTypeCode</td>
      <td>A code classifying the type of driving license</td>
      <td>0..1</td>
      <td>BR-COM-41: Compulsory use of the "EURES_LicenseTypeCode-CodeList" list. This is based on Directive 2006/126/EC.</td>
      <td>"AM", "A1", "A2", "A", etc.<br>Full code list: "HR-Open: LicenseTypeCode [CL14]"</td>
    </tr>
    <tr>
      <td>LicenseName</td>
      <td>The name of the credential</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"A1", "B", etc.</td>
    </tr>
    <tr>
      <td>FirstIssuedDate</td>
      <td>Date of first issuing of the license</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.<br>See section /CandidateProfile/Licenses/License/FirstIssuedDate for more information</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>FreeFormPeriod</td>
      <td>Provides Freeform options for representing the period during which a license, credential, or other related entity is effective<br>See section /CandidateProfile/Licenses/License/FreeFormPeriod for more information</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```

3.19.3.2 *License Attributes*

<mermaid>
graph TD
    A[LicensesType] --> B{Attributes}
    B --> C[Licenses]
    C --> D(License)
    D --> E{Attributes}
    E --> F[hr:EffectiveDateAttributeGroup]
    F --> G[@ validFrom]
    F --> H[@ validTo]
    E --> I[ABIE License. Details Authoritative permission to hold a certain status or to do certain things, e.g. to practise some...]
    C --> J[Attributes]
    J --> K[Refer to CodeListAttributeGroup Attributes for additional attributes.]
    C --> L[Attributes]
    L --> M[FirstIssuedDate attributes]
    M --> N[Attributes]
    N --> O[See section /CandidateProfile/Licenses/License/FirstIssuedDate for more information]
    C --> P[Attributes]
    P --> Q[FreeFormPeriod attributes]
    Q --> R[Attributes]
    R --> S[See section /CandidateProfile/Licenses/License/FreeFormPeriod for more information]
    C --> T[Attributes]
    T --> U[LicenseName attributes]
    U --> V[Attributes]
</mermaid>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td colspan="4"><b>LicenseTypeCode attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>FirstIssuedDate attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Licenses/License/FirstIssuedDate for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>FreeFormPeriod attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/Licenses/License/FreeFormPeriod for more information</td>
    </tr>
    <tr>
      <td colspan="4"><b>LicenseName attributes</b></td>
    </tr>
    <tr>
      <td><b>Attributes</b></td>
      <td><b>Description</b></td>
      <td><b>Card.</b></td>
      <td><b>Rule</b></td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 103 of 160&lt;/page_number&gt;

---


## Page 104

<table>
  <tr>
    <td>languageID</td>
    <td>Identifier of the language used in the license name</td>
    <td>0..1</td>
    <td></td>
  </tr>
</table>

3.19.4 Sub-element: /CandidateProfile/Licenses/License/FirstIssuedDate (level 4)

3.19.4.1 FirstIssuedDate Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FirstIssuedDate</td>
      <td>The first date issued</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements must be provided.</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

The same as: /EducationOrganizationAttendance/EducationDegree/DegreeDate

3.19.4.2 FirstIssuedDate Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The same as /EducationOrganizationAttendance/EducationDegree/DegreeDate</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.19.5 Sub-element: /CandidateProfile/Licenes/License/FreeFormPeriod (level 4)

3.19.5.1 FreeFormPeriod Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FreeFormPeriod</td>
      <td>Provides freeform options for representing the period during which a license, credential, or other related entity is effective</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

The same as /EducationOrganizationAttendance/AttendancePeriod excluding Ongoing element.

3.19.5.2 FreeFormPeriod Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The same as /EducationOrganizationAttendance/AttendancePeriod excluding Ongoing element.</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.20 /CandidateProfile/MilitaryHistory (level 2)

3.20.1 MilitaryHistory Element Description

&lt;img&gt;A diagram showing a class "MilitaryHistory" with attributes "MilitaryHistoryType" and "@Attributes". It also shows a relationship to "hr:MilitaryHistoryID" and "MilitaryService".&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MilitaryHistory</td>
      <td>Information about the person's military service</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MilitaryHistoryID</td>
      <td>Identifier of military history</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"MIL-1234", "344", etc.</td>
    </tr>
    <tr>
      <td>MilitaryService</td>
      <td>Description of military service</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

See section /CandidateProfile/MilitaryHistory/MilitaryService for more information

DG EMPL 2020
&lt;page_number&gt;Page 104 of 160&lt;/page_number&gt;

---


## Page 105

3.20.2 MilitaryHistory Attributes

&lt;img&gt;A diagram showing a class "MilitaryHistoryType" with attributes "validFrom" and "validTo". It also shows a relationship to "MilitaryHistory" which represents military history records.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

**MilitaryHistoryID attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

**MilitaryService attributes**

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">See section /CandidateProfile/MilitaryHistory/MilitaryService for more information</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 105 of 160&lt;/page_number&gt;

---


## Page 106

3.20.3 Sub-element: /CandidateProfile/MilitaryHistory/MilitaryService (level 3)

3.20.3.1 MilitaryService Element Description

<mermaid>
graph TD
    subgraph " "
        A[hr:MilitaryServiceID]
        B[CountryCode]
        C[hr:MilitaryBranch]
        D[hr:MilitaryDivision]
        E[eures:ServicePeriod]
        F[hr:StartingRank]
        G[hr:CurrentOrEndingRank]
    end

    subgraph " "
        H[MilitaryServiceType]
        I[MilitaryServiceBaseType (extension base)]
        J[Attributes]
    end

    subgraph " "
        K[MilitaryService]
    end

    A --> H
    B --> H
    C --> H
    D --> H
    E --> H
    F --> H
    G --> H

    H --> I
    I --> J

    J --> K

    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px

    style H fill:#e0e0e0,stroke:#333,stroke-width:2px
    style I fill:#e0e0e0,stroke:#333,stroke-width:2px
    style J fill:#fff,stroke:#333,stroke-width:2px

    style K fill:#e0e0e0,stroke:#333,stroke-width:2px
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>MilitaryService</td>
<td>Description of military service</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>MilitaryServiceID</strong></td>
<td>Identifier of military service</td>
<td>0..1</td>
<td>N/A</td>
<td>"MS-291", "MS-121", etc.</td>
</tr>
<tr>
<td><strong>CountryCode</strong></td>
<td>A code specifying the country where the candidate did/does military service</td>
<td>0..1</td>
<td>Compulsory use of CountriesAndNationalities [ECV02], AuxCountriesAndNationalities [ECV10] code list.</td>
<td>Europass2: CountriesAndNationalities [ECV02], Europass2: AuxCountriesAndNationalities [ECV10]</td>
</tr>
<tr>
<td><strong>MilitaryBranch</strong></td>
<td>The military office or department in which the person served</td>
<td>0..1</td>
<td>N/A</td>
<td>"Army", "Navy", etc.</td>
</tr>
<tr>
<td><strong>MilitaryDivision</strong></td>
<td>A portion of an army or fleet, consisting of a definite number</td>
<td>0..1</td>
<td>N/A</td>
<td>"Air assault", "Armoured", "Infantry", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 106 of 160&lt;/page_number&gt;

---


## Page 107

mermaid
erDiagram
    MilitaryService ||--o{ MilitaryServiceType : "It contains description of military service."
    MilitaryServiceBaseType ||--|{ Attributes : "Attributes"
    Attributes ||--|{ hr:EffectiveDateAttributeGroup : "HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral..."
```

3.20.3.2 *MilitaryService* attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity’s information</td>
<td>0..1</td>
<td><strong>BR-COM-05</strong>: If not specified, the “validFrom” date will default to “assigned by EURES on reception”.<br><strong>BR-COM-06</strong>: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity’s information</td>
<td>0..1</td>
<td><strong>BR-COM-07</strong>: If not specified, the “validTo” date will be decided by EURES depending on the transaction context.<br><strong>BR-COM-06</strong>: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

**MilitaryServiceID attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

**ServicePeriod attributes**

See section /CandidateProfile/MilitaryHistory/MilitaryService/ServicePeriod for more information

**CountryCode attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity’s information</td>
<td>0..1</td>
<td><strong>BR-COM-05</strong>: If not specified, the “validFrom” date will default to “assigned by EURES on reception”.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 107 of 160&lt;/page_number&gt;

---


## Page 108

html
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
  </tr>
  <tr>
    <td><b>validTo</b></td>
    <td>Validity end date for this entity's information</td>
    <td>0..1</td>
    <td>BR-COM-07: If not specified, the "validTo" date will be decided by EURES depending on the transaction context.<br>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
  </tr>
</table>

Refer to CodeListAttributeGroup Attributes section for additional attributes.

### StartingRank attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

### CurrentOrEndingRank attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

### MilitaryDivision attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

### MilitaryBranch attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

## 3.20.4 Sub-element: /CandidateProfile/MilitaryHistory/MilitaryService/ServicePeriod (level 4)

### 3.20.4.1 ServicePeriod Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ServicePeriod</td>
      <td>The period of military service</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

### Sub-elements

The same as /EducationOrganizationAttendance/AttendancePeriod excluding <b>Ongoing</b> element.

### 3.20.4.2 ServicePeriod Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">The same as /EducationOrganizationAttendance/AttendancePeriod excluding <b>Ongoing</b> element.</td>
    </tr>
  </tbody>
</table>

## 3.21 /CandidateProfile/PatentHistory (level 2)

### 3.21.1 PatentHistory Element Description

&lt;img&gt;Diagram showing eures:PatentHistory with attributes, PatentHistoryType, and sub-elements hr:PatentHistoryID and Patent.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PatentHistory</td>
      <td>Information about the Patents owned by the Person</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

### Sub-elements

<table>
  <thead>
    <tr>
      <th>PatentHistoryID</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PatentHistoryID</td>
      <td>Identifier of the patent history</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>"PT-1234", "344", etc.</td>
    </tr>
    <tr>
      <td>Patent</td>
      <td>A licence from a government conferring for a set period the sole right to make, use, or sell some process or invention<br>See section /CandidateProfile/PatentHistory/Patent for more information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 108 of 160&lt;/page_number&gt;

---


## Page 109

3.21.2 Patent History Attributes

<mermaid>
graph TD
    subgraph "PatentHistoryType"
        direction LR
        A(( )) -- Attributes --> B(@ Attributes)
        B -- hr:EffectiveDateAttributeGroup --> C(hr:EffectiveDateAttributeGroup)
        C -- @ validFrom --> D[@ validFrom]
        C -- @ validTo --> E[@ validTo]
        F[HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...]
        G(eures:PatentHistory)
        H[It contains information about the patents owned by the candidate.]

        A --- B
        B --- C
        C --- D
        C --- E
        D --- F
        E --- F
        G --- H
        G --- A
    end
</mermaid>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>validFrom</td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td>validTo</td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

**PatentHistoryID attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
</tr>
</tbody>
</table>

**Patent attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/PatentHistory/Patent for more information</td>
</tr>
</tbody>
</table>

3.21.3 Sub-element: /CandidateProfile/PatentHistory/Patent (level 3)

3.21.3.1 Patent Element Description

<mermaid>
graph TD
    subgraph "PatentType"
        direction LR
        A(( )) -- Attributes --> B(@ Attributes)
        B -- hr:PatentID --> C(hr:PatentID)
        B -- hr:PatentTitle --> D(hr:PatentTitle)
        D -- The name of the patent. --> E
        B -- oa:Description --> F(oa:Description)
        F -- 0..∞ --> G(hr:InventorName)
        G -- The person or corporate body that applies for the patent and intends to make, use, or sell some process or invention. --> H
        B -- IssuingAuthority --> I(IssuingAuthority)
        I -- An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or persons... --> J
        B -- PatentStatus --> K(PatentStatus)
        B -- AttachmentReference --> L(AttachmentReference)
        L -- ABIE Patent. Details A licence from a government conferring for a set period the sole right to make, use, or sell some... --> M
    end
</mermaid>

DG EMPL 2020
&lt;page_number&gt;Page 109 of 160&lt;/page_number&gt;

---


## Page 110

html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Patent</strong></td>
      <td>A licence from a government conferring for a set period the sole right to make, use, or sell some process or invention</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><strong>Sub-elements</strong></td>
    </tr>
    <tr>
      <td><strong>PatentID</strong></td>
      <td>Identifier of the patent</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"PT-1234", "344", etc.</td>
    </tr>
    <tr>
      <td><strong>PatentTitle</strong></td>
      <td>The name of the patent</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Tray Device", "Carton", etc.</td>
    </tr>
    <tr>
      <td><strong>Description</strong></td>
      <td>Description of the patent</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"A tray device applied in a server is provided. The server includes a housing.", etc.</td>
    </tr>
    <tr>
      <td><strong>InventorName</strong></td>
      <td>The name of the person who devised or produced the patented item</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>"John K., Sarah H.", etc.</td>
    </tr>
    <tr>
      <td><strong>IssuingAuthority</strong></td>
      <td>An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or people exercising power or command. An issuing authority is often a government agency or official authority but can sometimes be a private organization.<br><br>See section /CandidateProfile/PatentHistory/Patent/IssuingAuthority for more information</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>PatentStatus</strong></td>
      <td>The status of the patent. This stages or steps would generally be set by the government agency administering patent applications, for example, "patent pending".<br><br>See section /CandidateProfile/PatentHistory/Patent/PatentStatus for more information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td><strong>AttachmentReference</strong></td>
      <td>Reference to external documents attached<br><br>See section /CandidateProfile/PatentHistory/Patent/AttachmentReference for more information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

### 3.21.3.2 Patent Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PatentID sub-element</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PatentTitle sub-element</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>IssuingAuthority sub-element</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/PatentHistory/Patent/IssuingAuthority for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>AttachmentReference sub-element</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/PatentHistory/Patent/AttachmentReference for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Description sub-element</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>PatentStatus sub-element</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td colspan="4">See section /CandidateProfile/PatentHistory/Patent/PatentStatus for more information</td>
    </tr>
    <tr>
      <td colspan="4"><strong>InventorName attributes</strong></td>
    </tr>
    <tr>
      <td><strong>Attributes</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Card.</strong></td>
      <td><strong>Rule</strong></td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in inventor's name</td>
      <td>0..1</td>
      <td></td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 110 of 160&lt;/page_number&gt;

---


## Page 111

3.21.4 Sub-element: /CandidateProfile/PatentHistory/Patent/IssuingAuthority (level 4)

3.21.4.1 IssuingAuthority Element Description

<mermaid>
graph TD
    A[IssuingAuthority] --> B[IssuingAuthorityType]
    A --> C[Name]
    subgraph IssuingAuthority
        direction LR
        A -- "An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or persons..." --> A_desc
    end
    subgraph IssuingAuthorityType
        direction LR
        B -- "Identifies the Name of the object in which associated." --> B_desc
    end
    subgraph Name
        direction LR
        C -- "Issuing Authority. Details The country and organization or persons with the authority to issue a license or certificate." --> C_desc
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>IssuingAuthority</strong></td>
<td>An agency, bureau, or other organization issuing an associated identifier, license, or certificate; the body or people exercising power or command. An issuing authority is often a government agency or official authority, but sometimes might be a private organization.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>Name</strong></td>
<td>Identifies the Name of the associated object</td>
<td>0..1</td>
<td>N/A</td>
<td>"Organization", etc.</td>
</tr>
</tbody>
</table>

3.21.4.2 IssuingAuthority Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Name attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">Refer to NameType Attribute section for additional attributes.</td>
</tr>
</tbody>
</table>

3.21.5 Sub-element: /CandidateProfile/PatentHistory/Patent/PatentStatus (level 4)

3.21.5.1 PatentStatus Element Description

<mermaid>
graph TD
    A[PatentStatus] --> B[PatentStatusID]
    A --> C[PatentStatusCode]
    subgraph PatentStatus
        direction LR
        A -- "The status of the patent. These stages or steps would generally be set by the government agency administering patent applications, for example, \"patent pending\"." --> A_desc
    end
    subgraph PatentStatusID
        direction LR
        B -- "The identifier of the patent status." --> B_desc
    end
    subgraph PatentStatusCode
        direction LR
        C -- "A code classifying the current or reported status of the associated patent. This is an HR-XML Open List." --> C_desc
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>PatentStatus</strong></td>
<td>The status of the patent. These stages or steps would generally be set by the government agency administering patent applications, for example, "patent pending".</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>PatentStatusID</strong></td>
<td>The identifier of the patent status</td>
<td>0..1</td>
<td>N/A</td>
<td>"PS-1234", "344", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 111 of 160&lt;/page_number&gt;

---


## Page 112

mermaid
erDiagram
    PublicationHistory ||--o{ Publication : It contains information about one or more publications text by the person.
    PublicationHistory {
      @attributes
      PublicationHistoryType
      Attributes
    }
    Publication {
      @attributes
      A book, map, engraving, photograph, piece of music, or other work
    }
```

<table>
  <thead>
    <tr>
      <th>PatentStatusCode</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PatentStatusCode</td>
      <td>A code classifying the current or reported status of the associated patent<br><br>This is an HR-Open Standards open list.</td>
      <td>0..1</td>
      <td>BR-CV-26: Compulsory use of the "PatentStatusCode" list.<br><br>"PatentIssued", "PatentPending", "PatentFiled"<br><br>Full code list: "HR-Open/EURES: PatentStatusCode [CL36]."</td>
      <td></td>
    </tr>
  </tbody>
</table>

### 3.21.5.2 PatentStatus Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>PatentStatusID attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to IdentifierType Attributes section for additional attributes</td>
    </tr>
    <tr>
      <td colspan="4"><b>PatentStatusCode attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to CodeListAttributeGroup Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

### 3.21.6 Sub-element: /CandidateProfile/PatentHistory/Patent/AttachmentReference (level 4)

### 3.21.6.1 AttachmentReference Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AttachmentReference</td>
      <td>Reference to the external documents attached</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

#### Sub-elements

The same as /CandidateProfile/EmploymentHistory/AttachmentReference

### 3.21.6.2 AttachmentReference Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">The same as /CandidateProfile/EmploymentHistory/AttachmentReference</td>
    </tr>
  </tbody>
</table>

### 3.22 /CandidateProfile/PublicationHistory (level 2)

#### 3.22.1 PublicationHistory Element Description

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PublicationHistory</td>
      <td>A collection of information about one or more text publications by the Candidate</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

#### Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Publication</td>
      <td>A book, map, engraving, photograph, piece of music, or other work<br><br>See section /CandidateProfile/PublicationHistory/Publication for more information</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 112 of 160&lt;/page_number&gt;

---


## Page 113

3.22.2 PublicationHistory Attributes

&lt;img&gt;Diagram showing PublicationHistoryType with attributes validFrom and validTo, and a note about HR-XML's 3.0 architecture making a distinction between effective-date meta data and effective dating that is an integral part of the entity.&lt;/img&gt;

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td><strong>BR-COM-06:</strong> Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

**Publication attributes**

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">See section /CandidateProfile/PublicationHistory/Publication for more information</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 113 of 160&lt;/page_number&gt;

---


## Page 114

3.22.3 Sub-element: /CandidateProfile/PublicationHistory/Publication (level 3)

3.22.3.1 Publication Element Description

<mermaid>
graph TD
    A[PublicationHistoryType] --> B[Attributes]
    B --> C[PublicationType]
    C --> D[eures:PublicationType (extension base)]
    D --> E[hr:FormattedPublicationDescription]
    E --> F[Title]
    E --> G[Year]
    E --> H[Reference]
    E --> I[Link]
    E --> J[DOI]

    subgraph PublicationType
        direction LR
        D -- "ABIE Publication. Details A book, map, engraving, photograph, piece of music, or other work." --> E
        E --> F
        E --> G
        E --> H
        E --> I
        E --> J
    end

    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
    style I fill:#fff,stroke:#333,stroke-width:2px
    style J fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Publication</strong></td>
<td>A book, map, engraving, photograph, piece of music, or other work</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>FormattedPublicationDescription</strong></td>
<td>An unfiled or formatted description of a publication</td>
<td>0..n</td>
<td>N/A</td>
<td>“Article about Machine Learning in the Weekend Magazine”</td>
</tr>
<tr>
<td><strong>Title</strong></td>
<td>Specifies Title of the publication.</td>
<td>0..1</td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Year</strong></td>
<td>Specifies the year of publication.</td>
<td>0..1</td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Reference</strong></td>
<td>Specifies reference used in the publication.</td>
<td>0..1</td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>Link</strong></td>
<td>Specifies website link for the publication.</td>
<td>0..n</td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>DOI</strong></td>
<td>A Digital Object Identifier (DOI), a unique alphanumeric string to permanently identify a publication.<br>Refer to section /CandidateProfile/PublicationHistory/Publication/DOIChoice for more information</td>
<td>0..1</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

3.22.3.2 Publication Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>This element has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td colspan="4"><strong>FormattedPublicationDescription attributes</strong></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 114 of 160&lt;/page_number&gt;

---


## Page 115

mermaid
erDiagram
    subgraph DOIChoiceType
        DOI ||--o{ Value : It is an offline choice.
        DOI ||--o{ Link : It is an online choice.
    end
```

3.22.4 Sub-element: /CandidateProfile/PublicationHistory/Publication/DOIChoice

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DOI Choice</td>
      <td>A Digital Object Identifier (DOI), a unique alphanumeric string to permanently identify a publication.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td colspan="5"><b>Choice 1</b></td>
    </tr>
    <tr>
      <td>Value</td>
      <td>Offline DOI: alphanumeric string to identify the publication offline ().</td>
      <td>1</td>
      <td>N/A</td>
      <td>"Article about Machine Learning in the Weekend Magazine"</td>
    </tr>
    <tr>
      <td colspan="5"><b>Choice 2</b></td>
    </tr>
    <tr>
      <td>Link</td>
      <td>Online DOI: Link to identify the publication online</td>
      <td>1</td>
      <td></td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 115 of 160&lt;/page_number&gt;

---


## Page 116

3.23 /CandidateProfile/OrganizationAffiliations (level 2)

3.23.1 OrganizationAffiliations Element Description

<mermaid>
graph TD
    subgraph OrganizationAffiliationsType
        A[OrganizationAffiliations]
        B[Attributes]
        C[OrganizationAffiliation]
        D[History of Affiliations to Organizations of the related entity.]
        E[It contains information about a person's affiliation with a trade, professional, or similar organization or group...]
        F[Contains details on one or more organization affiliations. For example, membership in a trade or civic organization,...]

        A --> B
        A -- "0..∞" --> C
        B --> C
        D --> A
        E --> C
        F --> C
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>OrganizationAffiliations</strong></td>
<td>Contains details on one or more organization affiliations. For example, membership in a trade or civic organization, seat on an organization’s board of directors, membership in a union, etc.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th>OrganizationAffiliation</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>Contains information about a person's affiliation with a trade, professional, or similar organization or group formed around a common purpose or cause<br>See section /CandidateProfile/OrganizationAffiliations/OrganizationAffiliation for more information</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.23.2 OrganizationAffiliations Attributes

<mermaid>
graph TD
    subgraph OrganizationAffiliationsType
        A[OrganizationAffiliations]
        B[Attributes]
        C[hr:EffectiveDateAttributeGroup]
        D[validFrom]
        E[validTo]
        F[HR-XML's 3.0 architecture makes a distinction between effective-date meta data and effective dating that is an integral...]
        G[Contains details on one or more organization affiliations. For example, membership in a trade or civic organization,...]

        A --> B
        B --> C
        C --> D
        C --> E
        D --> A
        E --> A
        F --> C
        G --> A
    end
</mermaid>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
</tbody>
</table>

OrganizationAffiliations attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4 more information</td>
<td>See section /CandidateProfile/OrganizationAffiliations/OrganizationAffiliation for more information</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 116 of 160&lt;/page_number&gt;

---


## Page 117

3.23.3 Sub-element: /CandidateProfile/OrganizationAffiliations/OrganizationAffiliation (level 3)

3.23.3.1 OrganizationAffiliation Element Description

<mermaid>
graph TD
    subgraph OrganizationAffiliationsType
        OA[OrganizationAffiliation]
        OA -- "It contains information about a person's affiliation with a trade, professional, or similar organization or group..." --> OA_desc
    end

    subgraph OrganizationAffiliationType
        OA_type[ABIE Organization Affiliation. Details Contains information about a person's affiliation with a trade, professional, or...]
        OA_type -- "Contains details on one or more organization affiliations. For example, membership in a trade or civic organization,..." --> OA_type_desc
    end

    subgraph Attributes
        OA_attr[Attributes]
    end

    subgraph hr:OrganizationName
        OA_hr_name[hr:OrganizationName]
        OA_hr_name -- "Usually an official or legal name by which to refer to an organization." --> OA_hr_name_desc
    end

    subgraph Location
        OA_loc[Location]
        OA_loc -- "It specifies location." --> OA_loc_desc
    end

    subgraph Link
        OA_link[Link]
        OA_link -- "It specifies website link." --> OA_link_desc
    end

    OA --- OA_attr
    OA_attr --- OA_type
    OA_type --- OA_hr_name
    OA_hr_name --- OA_loc
    OA_loc --- OA_link
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>OrganizationAffiliation</strong></td>
<td>Contains information about a person's affiliation with a trade, professional, or similar organization or group formed around a common purpose or cause</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>OrganizationName</strong></td>
<td>Usually an official or legal name by which to refer to an organization</td>
<td>0..1</td>
<td>N/A</td>
<td>"Name", etc.</td>
</tr>
<tr>
<td><strong>Location</strong></td>
<td>Location of the Organisation</td>
<td>0..1</td>
<td></td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Link</strong></td>
<td>Link to the organisation's related websites.</td>
<td>0..n</td>
<td></td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.23.3.2 OrganizationAffiliation Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
</tbody>
</table>

OrganizationName attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>languageID</strong></td>
<td>Identifier of the language used in the organisation name</td>
<td>0..1</td>
<td></td>
</tr>
</tbody>
</table>

Location attributes

<table>
<thead>
<tr>
<th>languageID</th>
<th>Identifier of the language used in the location name</th>
<th>0..1</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

Link attributes

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 117 of 160&lt;/page_number&gt;

---


## Page 118

3.24 /CandidateProfile/SpeakingHistory (level 2)

3.24.1 SpeakingHistory Element Description

<mermaid>
graph TD
    subgraph "eures:SpeakingHistory"
        direction LR
        A(SpeakingHistoryType) --> B(Attributes)
        B --> C(SpeakingEvent)
    end
    subgraph "It contains information about one or more events in which the person has spoken (as keynote speaker, for example)."
        direction LR
        D(eures:SpeakingHistory) -- "0..∞" --> C
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SpeakingHistory</strong></td>
<td>A collection of information about one or more speaking events (as keynotes, for example) given by the person</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>SpeakingEvent</strong></td>
<td>Contains a set of details about an event in which the person was a lecturer or presenter<br>See section /CandidateProfile/SpeakingHistory/SpeakingEvent for more information</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.24.2 SpeakingHistory Attributes

<mermaid>
graph TD
    subgraph "eures:SpeakingHistory"
        direction LR
        A(SpeakingHistoryType) --> B(Attributes)
        B --> C(hr:EffectiveDateAttributeGroup)
        C --> D(validFrom)
        C --> E(validTo)
    end
    subgraph "It contains information about one or more events in which the person has spoken (as keynote speaker, for example)."
        direction LR
        F(eures:SpeakingHistory) -- "+" --> A
    end
</mermaid>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>validFrom</strong></td>
<td>Validity start date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td><strong>validTo</strong></td>
<td>Validity end date for this entity's information</td>
<td>0..1</td>
<td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td colspan="4"><strong>SpeakingEvent attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">See section /CandidateProfile/SpeakingHistory/SpeakingEvent for more information</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 118 of 160&lt;/page_number&gt;

---


## Page 119

3.24.3 Sub-element: /CandidateProfile/SpeakingHistory/SpeakingEvent (level 3)

3.24.3.1 SpeakingEvent Element Description

<mermaid>
graph TD
    A[SpeakingHistoryType] --> B{Attributes}
    B --> C(SpeakingEvent)
    C --> D(SpeakingEventType)
    D --> E[hr:EventName]
    D --> F[oa:Description]
    E -- "The name of the speaking event." --> E
    F -- "Description of the speaking event" --> F
    subgraph "ABIE Speaking Event Details"
        E
        F
    end
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>SpeakingEvent</strong></td>
<td>Contains a set of details about an event in which the associated person was a lecturer or presenter.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>EventName</strong></td>
<td>The name of the speaking event</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Description</strong></td>
<td>Description of the speaking event</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.24.3.2 SpeakingEvent Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Description attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>EventName attributes</strong></td>
</tr>
<tr>
<td><strong>Attributes</strong></td>
<td><strong>Description</strong></td>
<td><strong>Card.</strong></td>
<td><strong>Rule</strong></td>
</tr>
<tr>
<td>languageID</td>
<td>Identifier of the language used in the code name</td>
<td>0..1</td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 119 of 160&lt;/page_number&gt;

---


## Page 120

3.25 /CandidateProfile/Attachment (level 2)

3.25.1 Attachment Element Description

<mermaid>
graph TD
    subgraph "AttachmentType"
        A[Attributes]
        B(eures:Attachment)
    end
    A --> C[oa:EmbeddedData]
    A --> D[hr:EmbeddedText]
    A --> E[oa:URI]
    A --> F[oa:FileName]
    A --> G[hr:DocumentDateTime]
    A --> H[oa:Description]
    A --> I[oa:FileType]
    A --> J[hr:DocumentTitle]
    A --> K[hr:AttachmentXPath]
    A --> L[hr:Instructions]

    B -- "0..∞" --> C
    B -- "0..∞" --> D
    B -- "0..∞" --> E
    B -- "0..∞" --> F
    B -- "0..∞" --> G
    B -- "0..∞" --> H
    B -- "0..∞" --> I
    B -- "0..∞" --> J
    B -- "0..∞" --> K
    B -- "0..∞" --> L

    style A fill:#fff,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style F fill:#fff,stroke:#333,stroke-width:2px
    style G fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
    style I fill:#fff,stroke:#333,stroke-width:2px
    style J fill:#fff,stroke:#333,stroke-width:2px
    style K fill:#fff,stroke:#333,stroke-width:2px
    style L fill:#fff,stroke:#333,stroke-width:2px
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Attachment</strong></td>
<td>Allows for embedding or referencing external documents or digital objects</td>
<td>0..n</td>
<td>BR-COM-42: An Attachment shall not embed and simultaneously refer to an URI that contains the same document. External references to documents, using the URI element, are the recommended method (when possible) for attaching documents.</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>EmbeddedData</strong></td>
<td>Allows the data to be embedded directly into the BOD instance</td>
<td>0..1</td>
<td>N/A</td>
<td>-</td>
</tr>
<tr>
<td><strong>EmbeddedText</strong></td>
<td>Embedded text</td>
<td>0..1</td>
<td>N/A</td>
<td>"Embedded text"</td>
</tr>
<tr>
<td><strong>URI</strong></td>
<td>Represents a Uniform Resource Identifier Reference (URI). An URI value can be absolute or relative, and may have an optional</td>
<td>0..1</td>
<td>N/A</td>
<td>"http://uri.org", etc.</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 120 of 160&lt;/page_number&gt;

---


## Page 121

html
<table>
  <thead>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fragment identifier (i.e., it may be a URI Reference). This type should be used to specify the intention that the value fulfils the role of a URI, as defined by [RFC 2396] and as amended by [RFC 2732].</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><b>FileName</b></td>
      <td>Indicates the name of the File being referenced</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"File Name"</td>
    </tr>
    <tr>
      <td><b>DocumentDateTime</b></td>
      <td>The date and/or time associated with the current or referenced version of a document</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"2012/12/23", etc.</td>
    </tr>
    <tr>
      <td><b>Description</b></td>
      <td>Description of the attachment</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Description of the attachment"</td>
    </tr>
    <tr>
      <td><b>FileType</b></td>
      <td>Identifies the type of the file type of the attachment</td>
      <td>1</td>
      <td>BR-COM-35: Compulsory use of the "EURES_FileTypeCode-CodeList.gc" list defined by EURES.</td>
      <td>"PDF", "DOC", etc.<br>Full code list: "HR-Open/EURES: FileTypeCode [CL17]"</td>
    </tr>
    <tr>
      <td><b>DocumentTitle</b></td>
      <td>The name of the associated document</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>"Photo", "Europass CV", etc.</td>
    </tr>
    <tr>
      <td><b>AttachmentPath</b></td>
      <td>Path to the external documents attached</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>"/Candidate/CandidatePerson", etc.</td>
    </tr>
    <tr>
      <td><b>Instructions</b></td>
      <td>Identifies the type of attachment uploaded</td>
      <td>1</td>
      <td>BR-CV-29: Compulsory use of the "EURES_AttachmentInstructionCVCode" list defined by EURES.</td>
      <td>"CV", "ProfilePicture", "Other", etc.<br>Full code list: "HR-Open/EURES: AttachmentInstructionCVCode [CL61]"</td>
    </tr>
  </tbody>
</table>
```
DG EMPL 2020
&lt;page_number&gt;Page 121 of 160&lt;/page_number&gt;

---


## Page 122

3.25.2 Attachment Attributes

&lt;img&gt;Diagram showing AttachmentType with attributes validFrom, validTo, eures:Attachment, and a note about effective-date meta data and effective dating.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validFrom</td>
      <td>Validity start date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity end date for this entity's information</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

### EmbeddedData attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>mimeCode</td>
      <td>Codes that specify the data MIME code.</td>
      <td>1</td>
      <td>BR-COM-50: Compulsory use of Mime Codes [CL56]. HR-Open/EURES: MimeCodes [CL56]</td>
    </tr>
    <tr>
      <td>encodingCode</td>
      <td>The data encoding type</td>
      <td>1</td>
      <td>BR-COM-51: Only ‘base64Binary’ is allowed. If not present it is considered as encoded in base64Binary.</td>
    </tr>
    <tr>
      <td>uri</td>
      <td>The URI of the file.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>filename</td>
      <td>The name of the file.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>format</td>
      <td>The format of the binary content</td>
      <td>0..1</td>
      <td></td>
    </tr>
    <tr>
      <td>characterSetCode</td>
      <td>The character set of the binary object if the mime type is text</td>
      <td>0..1</td>
      <td></td>
    </tr>
  </tbody>
</table>

### URI attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

### FileName attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to NameType Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

### DocumentDateTime attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This sub-element has no attributes.</td>
    </tr>
  </tbody>
</table>

### Description attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

### FileType attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to CodeType Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

### Instructions attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 122 of 160&lt;/page_number&gt;

---


## Page 123

3.26 /CandidateProfile/HobbiesAndInterests

3.26.1 HobbiesAndInterests Element Description

<mermaid>
graph TD
    subgraph HobbiesAndInterestsType
        HobbyOrInterest(HobbyOrInterest)
    end
    HobbiesAndInterests --> HobbyOrInterest
    HobbyOrInterest -- "It contains information about candidate's hobbies and interests." --> HobbiesAndInterests
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HobbiesAndInterests</td>
      <td>Information about candidate's Hobbies & Interests</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>HobbyOrInterest</td>
      <td>Information about candidate's Hobbies & Interests</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>Refer to ActivityType Elements for sub-elements</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.26.2 HobbiesAndInterests Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>HobbyOrInterest attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to ActivityType Attributes for attributes</td>
    </tr>
  </tbody>
</table>

3.27 /CandidateProfile/CreativeWorks

3.27.1 CreativeWorks Element Description

<mermaid>
graph TD
    subgraph CreativeWorksType
        CreativeWork(CreativeWork)
    end
    CreativeWorks --> CreativeWork
    CreativeWork -- "It contains information abut candidate's creative works and the context they were acquired." --> CreativeWorks
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CreativeWorks</td>
      <td>Information about candidate's creative works and the context they were acquired.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>CreativeWork</td>
      <td>Information about candidate's creative works.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td></td>
      <td>Refer to ActivityType Elements for sub-elements</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

3.27.2 CreativeWorks Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>CreativeWork attributes</b></td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>Description</td>
      <td>Card.</td>
      <td>Rule</td>
    </tr>
    <tr>
      <td colspan="4">Refer to ActivityType Attributes for attributes</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 123 of 160&lt;/page_number&gt;

---


## Page 124

3.28 /CandidateProfile/Projects

3.28.1 Projects Element Description

&lt;img&gt;UML Diagram showing a class "CreativeWorksType" with a multiplicty of 0..∞, connected to a class "Projects" which has a multiplicty of 0..1.&lt;/img&gt;

It contains information about candidate's creative works and the context they were acquired.

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Projects</strong></td>
<td>Information about candidate's projects.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>Project</strong></td>
<td>Information about candidate's project.<br/>Refer to ActivityType Elements for sub-elements</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.28.2 Projects Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>Project attributes</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to ActivityType Attributes for attributes</td>
</tr>
</tbody>
</table>

3.29 /CandidateProfile/CommunicationAndInterpersonalSkills

3.29.1 CommunicationAndInterpersonalSkills Element Description

&lt;img&gt;UML Diagram showing a class "CommunicationAndInterpersonalSkillsType" with a multiplicty of 0..∞, connected to a class "CommunicationAndInterpersonalSkills" which has a multiplicty of 0..1.&lt;/img&gt;

It contains information about communication and interpersonal skills. It also specifies in what context they were...

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CommunicationAndInterpersonalSkills</strong></td>
<td>Information about communication and Interpersonal skills. Specify in what context they were acquired.</td>
<td>0..1</td>
<td>N/A</td>
<td>good communication skills gained through my experience as sales manager</td>
</tr>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>CommunicationAndInterpersonalSkill</strong></td>
<td>Information about a communication and interpersonal skills<br/>Refer to SkillsType Elements for sub-elements</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.29.2 CommunicationAndInterpersonalSkills Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>CommunicationAndInterpersonalSkill attributes</strong></td>
</tr>
<tr>
<td>Attributes</td>
<td>Description</td>
<td>Card.</td>
<td>Rule</td>
</tr>
<tr>
<td colspan="4">Refer to SkillsType Attributes for attributes</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 124 of 160&lt;/page_number&gt;

---


## Page 125

3.30 /CandidateProfile/ManagementAndLeadershipSkills

3.30.1 ManagementAndLeadershipSkills Element Description

<mermaid>
graph TD
    subgraph "ManagementAndLeadershipSkillsType"
        A[ManagementAndLeadershipSkills]
        B[ManagementAndLeadershipSkill]
    end
    A -- 0..∞ --> B
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
</mermaid>

It contains information about candidate's management and leadership skills and the context they were acquired.

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>ManagementAndLeadershipSkills</td>
<td>Information about candidate's management/leadership skills and the context they were acquired</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th>ManagementAndLeadershipSkill</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>Information about candidate's management/leadership skills.<br>Refer to SkillsType Elements for sub-elements</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.30.2 ManagementAndLeadershipSkills Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
</tbody>
</table>

ManagementAndLeadershipSkill attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to SkillsType Attributes for attributes</td>
</tr>
</tbody>
</table>

3.31 /CandidateProfile/OrganisationalSkills

3.31.1 OrganisationalSkills Element Description

<mermaid>
graph TD
    subgraph "OrganisationalSkillsType"
        A[OrganisationalSkills]
        B[OrganisationalSkill]
    end
    A -- 0..∞ --> B
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
</mermaid>

It contains information about candidate's organisational skills and the context they were acquired.

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrganisationalSkills</td>
<td>Information about candidate's organisational skills and the context they were acquired</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

Sub-elements

<table>
<thead>
<tr>
<th>OrganisationalSkill</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>Information about organisational skills acquired by a candidate.<br>Refer to SkillsType Elements for sub-elements</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.31.2 OrganisationalSkills Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
</tbody>
</table>

OrganisationalSkill attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to SkillsType Attributes for attributes</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 125 of 160&lt;/page_number&gt;

---


## Page 126

3.32 /CandidateProfile/DigitalSkills

3.32.1 DigitalSkills Element Description

<mermaid>
graph TD
    A(DigitalSkillsType) --> B(DigitalSkills)
    B --> C(DigitalSkillsGroup)
    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#ccf,stroke:#f66,stroke-width:2px
    style C fill:#f9f,stroke:#333,stroke-width:4px
    C -- "0..*" --> C
    subgraph "It contains information about candidate's digital skills. For example, they may write \"blogging\" under this section in..."
        direction LR
    end
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DigitalSkills</td>
      <td>Digitall skills acquired by a candidate.<br>Provided as free text.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DigitalSkillsGroup</td>
      <td>Digitall skills acquired by a candidate.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>Candidate may write “blogging” under this section in their profile. This can be used to suggest relevant ESCO skills such as “WordPress” or “create online news content”</td>
    </tr>
  </tbody>
</table>

Refer to DigitalSkillsGroupType Elements for sub-elements

3.32.2 DigitalSkills Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
  </tbody>
</table>

DigitalSkill attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DigitalSkillsGroupType Attributes for attributes</td>
    </tr>
  </tbody>
</table>

3.33 /CandidateProfile/NetworksAndMemberships

3.33.1 NetworksAndMemberships Element Description

<mermaid>
graph TD
    A(NetworksAndMembershipsType) --> B(NetworksAndMemberships)
    B --> C(NetworkAndMembership)
    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#ccf,stroke:#f66,stroke-width:2px
    style C fill:#f9f,stroke:#333,stroke-width:4px
    C -- "0..*" --> C
    subgraph "It contains information about the candidate's memberships and involvement in professional associations, societies, etc..."
        direction LR
    end
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NetworksAndMemberships</td>
      <td>Specify candidate’s memberships/involvement in professional associations, societies, political parties, sports clubs, etc.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Sub-elements

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NetworkAndMembership</td>
      <td>candidate’s memberships/involvement in professional associations, societies, political parties, sports clubs, etc.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>&lt;page_number&gt;Page 126 of 160&lt;/page_number&gt;

---


## Page 127

Refer to SocialAndNetworkingActivityType for more information about the sub-elements of sub-element NetworkAndMembership.

### 3.33.2 NetworksAndMemberships Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>NetworkAndMembership attributes</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to SocialAndNetworkingActivityType for more information</td>
</tr>
</tbody>
</table>

### 3.34 /CandidateProfile/ConferencesAndSeminars

#### 3.34.1 ConferencesAndSeminars Element Description

&lt;img&gt;Diagram showing "ConferencesAndSeminars" with cardinality 0..n and "ConferencesAndSeminar" with cardinality 0..∞&lt;/img&gt;

It contains information about any conferences and seminars that the candidate may have participated in.
For example,...

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ConferencesAndSeminars</strong></td>
<td>Describe any conferences and seminars that they may have participated in. For example, they may have presented their own work or projects, facilitated a workshop, been a panellist or an event organiser yourself, or been a member of a scientific committee, etc.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

**Sub-elements**

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ConferenceAndSeminar</strong></td>
<td>Describe any conferences and seminars that they may have participated in. For example, they may have presented their own work or projects, facilitated a workshop, been a panellist or an event organiser yourself, or been a member of a scientific committee, etc.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td></td>
<td>Refer to EventType Elements for sub-elements</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

#### 3.34.2 ConferencesAndSeminars Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">This element has no attributes.</td>
</tr>
<tr>
<td colspan="4"><strong>ConferenceAndSeminar attributes</strong></td>
</tr>
<tr>
<td colspan="4"></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4">Refer to EventType Attributes for attributes</td>
</tr>
</tbody>
</table>

### 3.35 /CandidateProfile/SocialAndPoliticalActivities

#### 3.35.1 SocialAndPoliticalActivities Element Description

&lt;img&gt;Diagram showing "SocialAndPoliticalActivities" with cardinality 0..n and "SocialAndPoliticalActivity" with cardinality 0..∞&lt;/img&gt;

It contains information about participation in social and political activities.

&lt;page_number&gt;DG EMPL 2020&lt;/page_number&gt; &lt;page_number&gt;Page 127 of 160&lt;/page_number&gt;

---


## Page 128

mermaid
erDiagram
    VoluntaryWorksType ||--o{ VoluntaryWork : "It contains information about any voluntary work done by the candidate."
```

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SocialAndPoliticalActivities</td>
      <td>Information about participation in Social and political activities.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>SocialAndPoliticalActivity</td>
      <td>Information about participation in Social and political activities.<br>Refer to SocialAndNetworkingActivityType for more information about the sub-elements of sub-element SocialAndPoliticalActivity.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

### 3.35.2 SocialAndPoliticalActivities Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>ConferenceAndSeminar attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to SocialAndNetworkingActivityType for more information.</td>
    </tr>
  </tbody>
</table>

## 3.36 /CandidateProfile/VoluntaryWorks

### 3.36.1 VoluntaryWorks Element Description

&lt;img&gt;Diagram showing VoluntaryWorksType with elements VoluntaryWorks and VoluntaryWork, and a note that it contains information about any voluntary work done by the candidate.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VoluntaryWorks</td>
      <td>Contains information about any voluntary work done by the candidate.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>VoluntaryWork</td>
      <td>Contains information about any voluntary work done by the candidate.<br>Refer to EventType Elements for sub-elements.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

### 3.36.2 VoluntaryWorks Attributes

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><b>VoluntaryWork attributes</b></td>
    </tr>
    <tr>
      <td colspan="4">Refer to EventType Attributes for attributes.</td>
    </tr>
  </tbody>
</table>

## 3.37 /CandidateProfile/Others

### 3.37.1 Others Element Description

&lt;img&gt;Diagram showing OthersType with elements Title and Other, and a note that it specifies the title of the Others section, and another note that it contains additional information that has not been captured anywhere else.&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Others</td>
      <td>It specifies the title of the Others section.<br>It contains additional information that has not been captured anywhere else.</td>
      <td>0..∞</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

<footer>DG EMPL 2020</footer>
&lt;page_number&gt;Page 128 of 160&lt;/page_number&gt;

---


## Page 129

html
<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Others</strong></td>
      <td>Additional information about the candidate that has not been captured anywhere in the provided sections.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td colspan="5"><strong>Sub-elements</strong></td>
    </tr>
    <tr>
      <td>Title</td>
      <td>It specifies the title of the Others section.</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Other</td>
      <td>Title and description of the additional information.<br/>Refer to OtherType Elements for sub-elements.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.37.2 <span style="color:#8B4513;">Others Attributes</span>

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">This element has no attributes.</td>
    </tr>
    <tr>
      <td colspan="4"><strong>Title attributes</strong></td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the title</td>
      <td>0..1</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4"><strong>Other attributes</strong></td>
    </tr>
    <tr>
      <td colspan="4">Refer to OtherType for attributes.</td>
    </tr>
  </tbody>
</table>

3.38 <span style="color:#8B4513;">Common DataType Elements with Attributes</span>

3.38.1 <span style="color:#8B4513;">ActivityType</span>

3.38.1.1 <span style="color:#8B4513;">ActivityType Elements</span>

&lt;img&gt;Diagram showing ActivityType with Title, Date, Description, Link elements&lt;/img&gt;

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5"><strong>Sub-elements</strong></td>
    </tr>
    <tr>
      <td>Title</td>
      <td>Specifies title of the the activity.</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Date</td>
      <td>Specifies a time period when an activity took place.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Specifies description of the activity.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>Specifies URI link related to the activity.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.38.1.2 <span style="color:#8B4513;">ActivityType Attributes</span>

DG EMPL 2020
&lt;page_number&gt;Page 129 of 160&lt;/page_number&gt;

---


## Page 130

mermaid
classDiagram
    class TimeSpanType {
        - startDate : Date
        - endDate : Date
        - duration : Duration
        - ongoing : boolean
    }
```

# 3.38.2 TimeSpanType

## 3.38.2.1 TimeSpanType Elements

### Sub-elements

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>StartDate</strong></td>
<td>Specifies the start date.</td>
<td>1</td>
<td>BR-COM-16: At least one of its sub-elements must be provided.</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>EndDate</strong></td>
<td>Specifies the end date</td>
<td>0..1</td>
<td>BR-COM-16: At least one of its sub-elements must be provided</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Duration</strong></td>
<td>Specifies the duration</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Ongoing</strong></td>
<td>Specifies if the duration is ongoing</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

## 3.38.2.2 TimeSpanType Attributes

### StartDate attributes

Refer to /EducationOrganizationAttendance/EducationDegree/DegreeDate attributes.

### EndDate attributes

Refer to /EducationOrganizationAttendance/EducationDegree/DegreeDate attributes.

### Duration attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>It has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### Ongoing attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td>It has no attributes.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 130 of 160&lt;/page_number&gt;

---


## Page 131

3.38.3 SkillsType

3.38.3.1 SkillsType Elements

<mermaid>
graph TD
    A(SkillsType) --> B(TitleAndDescriptionType (extension base))
    B --> C[Title]
    B --> D[Description]
    B --> E[Link]
    C -- "It specifies the title." --> C
    D -- "It specifies a description." --> D
    E -- "It specifies website link." --> E
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5"><b>Sub-elements</b></td>
    </tr>
    <tr>
      <td>Title</td>
      <td>Specifies title of the activity.</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Specifies description of the activity.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>Specifies URI link related to the activity.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.38.3.2 SkillsType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4"><b>Title attributes</b></th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the title</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4"><b>Description attributes</b></th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4"><b>Link attributes</b></th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">It has no attributes.</td>
    </tr>
  </tbody>
</table>

3.38.4 EventType

3.38.4.1 EventType Elements

<mermaid>
graph TD
    A(EventType) --> B[Title]
    A --> C[Date]
    A --> D[Location]
    A --> E[Description]
    A --> F[Link]
    B -- "It specifies the title." --> B
    C -- "It represents a time period when a particular event or activity took place." --> C
    D -- "It specifies location." --> D
    E -- "It specifies a description." --> E
    F -- "It specifies website link." --> F
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <!-- No specific elements listed under EventType -->
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 131 of 160&lt;/page_number&gt;

---


## Page 132

mermaid
erDiagram
    Event {
        Title
        Date
        Description
        Location
        Link
    }
```

<table>
  <thead>
    <tr>
      <th colspan="5">Sub-elements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Title</td>
      <td>Specifies title of the event.</td>
      <td>1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Date</td>
      <td>Specifies a time period when a particular event took place.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>It specifies description of the event.</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>Specifies the location where the event took place</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>It specifies website link.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.38.4.2 EventType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">Title attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in title</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Refer to TimeSpanType Attributes for additional information

<table>
  <thead>
    <tr>
      <th colspan="4">Date attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

Refer to DescriptionType Attributes section for additional attributes.

<table>
  <thead>
    <tr>
      <th colspan="4">Description attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">Location attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used to specify location</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="4">Link attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

It has no attributes.

3.38.5 SocialAndNetworkingActivityType

3.36.5.1 SocialAndNetworkingActivityType Element Description

<mermaid>
graph TD
    subgraph SocialAndNetworkingActivityType
        A[Activity] --> B[Activity]
        B -- "It contains further information about the activity done, like title, date, description, etc." --> B
        C[Location] --> D[Location]
        D -- "It specifies location." --> D
        E[HonourAwardDate] --> F[HonourAwardDate]
        F -- "It specifies a date when an award or honour was received." --> F
    end
</mermaid>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Description</th>
      <th>Cardinality</th>
      <th>Rule</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5">Sub-elements</td>
    </tr>
    <tr>
      <td>Activity</td>
      <td>Specifies further information about the activity done, like title, date, description, etc.<br>Refer to ActivityType Elements for sub-elements</td>
      <td>0..1</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>Specifies location where the activity took place.</td>
      <td>0..n</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>HonourAwardDate</td>
      <td>Specifies a date when an award or honour was received for a selected activity.</td>
      <td>0..1</td>
      <td>BR-COM-16: At least one of its sub-elements</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 132 of 160&lt;/page_number&gt;

---


## Page 133

must be provided.

3.36.5.2 SocialAndNetworkingActivityType Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4"><strong>Activity attributes</strong></td>
</tr>
<tr>
<td colspan="4"><strong>Location attributes</strong></td>
</tr>
<tr>
<td>languageID</td>
<td>Identifier of the language used in the location description.</td>
<td>0..1</td>
<td></td>
</tr>
<tr>
<td colspan="4"><strong>HonourAwardDate attributes</strong></td>
</tr>
<tr>
<td colspan="4">The same as /CandidateProfile/EducationHistory/EducationOrganizationAttendance/EducationDegree/DegreeDate</td>
</tr>
</tbody>
</table>

3.38.6 OtherType

3.38.6.1 OtherType Elements

<mermaid>
graph TD
    A[OtherType] --> B[ActivityType (restriction base)]
    B --> C[Title]
    B --> D[Date]
    B --> E[Description]
    B --> F[Link]

    C -- "It specifies the title." --> C
    D -- "It represents a time period when a particular event or activity took place." --> D
    E -- "It specifies a description." --> E
    F -- "It specifies website link." --> F
</mermaid>

<table>
<thead>
<tr>
<th>Element</th>
<th>Description</th>
<th>Cardinality</th>
<th>Rule</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="5"><strong>Sub-elements</strong></td>
</tr>
<tr>
<td><strong>Title</strong></td>
<td>Specifies title of the the activity.</td>
<td>1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Date</strong></td>
<td>Specifies a time period when an activity took place.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Description</strong></td>
<td>Specifies description of the activity.</td>
<td>0..1</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Link</strong></td>
<td>Specifies URI link related to the activity.</td>
<td>0..n</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

3.38.6.2 OtherType Attributes

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
<th>Card.</th>
<th>Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4"><strong>Title attributes</strong></td>
</tr>
<tr>
<td>languageID</td>
<td>Identifier of the language used in the title</td>
<td>0..1</td>
<td>N/A</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 133 of 160&lt;/page_number&gt;

---


## Page 134

html
<table>
  <thead>
    <tr>
      <th colspan="5">Date attributes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5">Refer to TimeSpanType Attributes for additional information</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="5">Description attributes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th colspan="2">Rule</th>
    </tr>
    <tr>
      <td colspan="5">Refer to DescriptionType Attributes section for additional attributes.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="5">Link attributes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th colspan="2">Rule</th>
    </tr>
    <tr>
      <td colspan="5">It has no attributes.</td>
    </tr>
  </tbody>
</table>

## 3.39 Common Attributes

### 3.39.1 IdentifierType Attributes

<table>
  <thead>
    <tr>
      <th colspan="5">IdentifierType attributes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th colspan="2">Rule</th>
    </tr>
    <tr>
      <td>schemID</td>
      <td>Identification of the identifier scheme</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeName</td>
      <td>The identification scheme name</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeAgencyID</td>
      <td>Identification of the agency that maintains the scheme</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeAgencyName</td>
      <td>The name of the agency that maintains the scheme</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeVersionID</td>
      <td>The version of the EURES HR Standards.</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeDataURI</td>
      <td>The Uniform Resource Identifier that identifies where the data scheme is located</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeURI</td>
      <td>The Uniform Resource Identifier that identifies where the scheme is located</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>validFrom</td>
      <td>Validity starting date for this ID</td>
      <td>0..1</td>
      <td colspan="2">BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>validTo</td>
      <td>Validity ending date for this ID</td>
      <td>0..1</td>
      <td colspan="2">BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
  </tbody>
</table>

### 3.38.2 CodeListAttributeGroup Attributes

<table>
  <thead>
    <tr>
      <th colspan="5">CodeListAttributeGroup attributes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th colspan="2">Rule</th>
    </tr>
    <tr>
      <td>listID</td>
      <td>The code list identification</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>listAgencyID</td>
      <td>The identifier of an agency that maintains one or more lists of codes</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>listAgencyName</td>
      <td>The name of the agency that maintains the list of codes.</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>listName</td>
      <td>The name of a list of codes.</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>The identification of a list of codes</td>
      <td>0..1</td>
      <td colspan="2">BR-COM-45: Compulsory use of EURES HR Standard version Version Codes [CL63]</td>
    </tr>
    <tr>
      <td>name</td>
      <td>The textual equivalent of the code content component</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the code name</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>The Uniform Resource Identifier that identifies where the code list is located</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <td>schemeURI</td>
      <td>The Uniform Resource Identifier that identifies where the code list scheme is located</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
  </tbody>
</table>

### 3.38.3 CodeType Attributes

<table>
  <thead>
    <tr>
      <th colspan="5">CodeType attributes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th colspan="2">Rule</th>
    </tr>
    <tr>
      <td>listID</td>
      <td>The code list identification</td>
      <td>0..1</td>
      <td colspan="2">N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 134 of 160&lt;/page_number&gt;

---


## Page 135

html
<table>
  <thead>
    <tr>
      <th>listAgencyID</th>
      <th>The identifier of an agency that maintains one or more lists of codes</th>
      <th>0..1</th>
      <th>N/A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listAgencyName</td>
      <td>The name of the agency that maintains the list of codes.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>listName</td>
      <td>The name of a list of codes.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>The identification of a list of codes</td>
      <td>0..1</td>
      <td>BR-COM-45: Compulsory use of EURES HR Standard version Version Codes [CL63]</td>
    </tr>
    <tr>
      <td>name</td>
      <td>The textual equivalent of the code content component</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the code name</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>The Uniform Resource Identifier that identifies where the code list is located</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>schemeURI</td>
      <td>The Uniform Resource Identifier that identifies where the code list scheme is located</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```

## 3.38.4 NoteType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">NoteType attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>The comment type</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>author</td>
      <td>The author of the comment</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>entryDateTime</td>
      <td>The date when the comment was entered or last modified</td>
      <td>0..1</td>
      <td>BR-COM-06: Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
    </tr>
    <tr>
      <td>status</td>
      <td>The status of the comment</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the code name</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## 3.38.5 MeasureType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">MeasureType attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>unitCode</td>
      <td>Code indicating the type of unit measure, such as "minutes" or "hours" (full code list "4.28.37 Unit Codes [CL54]")</td>
      <td>0..1</td>
      <td>BR-COM-36: Compulsory use of the Unit Codes [CL54].</td>
    </tr>
    <tr>
      <td>type</td>
      <td>The type of measure</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## 3.38.6 DescriptionType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">DescriptionType attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the description.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>type</td>
      <td>The type of description.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## 3.38.7 DateText Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">DateText attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>typeCode</td>
      <td>The type of date text</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>languageCodeType</td>
      <td>The language in which the date is mentioned.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## 3.38.8 ScoreText Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">ScoreText attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>scoreTextCode</td>
      <td>The score text</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>minimumScoreText</td>
      <td>The minimum score</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>maximumScoreText</td>
      <td>The maximum score</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## 3.38.9 ScoreNumeric Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">ScoreNumeric attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>scoreNumericCode</td>
      <td>The score numeric</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>minimumScoreNumeric</td>
      <td>The minimum score</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>maximumScoreNumeric</td>
      <td>The maximum score</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 135 of 160&lt;/page_number&gt;

---


## Page 136

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>scoreNumericCode</td>
      <td>The numeric type of scoring scheme</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>minimumScoreNumeric</td>
      <td>The minimum score</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>maximumScoreNumeric</td>
      <td>The maximum score</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.38.10 PositionTitleType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">PositionTitleType attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>typeCode</td>
      <td>It indicates if the value of the title is: FREETEXT or URI</td>
      <td>0..1</td>
      <td>Value must be: FREETEXT or URI</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Identifier of the language used in the position title.</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

3.38.11 NameType Attributes

<table>
  <thead>
    <tr>
      <th colspan="4">NameType attributes</th>
    </tr>
    <tr>
      <th>Attributes</th>
      <th>Description</th>
      <th>Card.</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sequence</td>
      <td>Establishes the name order as an integer</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>sequenceName</td>
      <td>Establishes the name order as a string</td>
      <td>0..1</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>languageID</td>
      <td>Language in which the GivenName is mentioned</td>
      <td>0..1</td>
      <td>"en"</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 136 of 160&lt;/page_number&gt;

---


## Page 137

3.39 Code Lists

Code Lists are tables containing codes or values representing concepts that have been agreed amongst several parties as having the same meaning for all.

HR-Open Standards 3.1 provides many Code Lists for many different concepts. HR-Open Standards Code Lists are based on W3C XSD Enumeration Schemas. The EURES CV specifications re-use a large number of these Code Lists. EURES also defines several different Code Lists based on the OASIS Code Lists specification, another representation method that is compatible with the HR-Open Standards specification. Detailed information about this specification can be found here:

https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=codelist

EUROPASS2 makes extensive use of HR-Open Standards and EURES Code Lists along with extension/modification.

Thus, these code lists could be defined as:

*   **EUROPASS2 [ECV]**: New code list used by the EUROPASS Schema and defined by international entities, such as NUTS or ISO. As well as extended version of existing EURES codelists
*   **HR-Open/EURES standard [CL]**: code lists defined and maintained by HR-Open/EURES Standards organisation.

A set of attributes might be filled in for each code list not representing the HR-Open Standards.

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>listName</strong></td>
<td>Code list name</td>
</tr>
<tr>
<td><strong>listVersionID</strong></td>
<td>Code list identification</td>
</tr>
<tr>
<td><strong>name</strong></td>
<td>Text equivalent of the code content component</td>
</tr>
<tr>
<td><strong>listURI</strong></td>
<td>The Uniform Resource Identifier that identifies where the code list is located</td>
</tr>
<tr>
<td><strong>listSchemeURI</strong></td>
<td>The Uniform Resource Identifier that identifies where the code list scheme is located</td>
</tr>
</tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 137 of 160&lt;/page_number&gt;

---


## Page 138

3.39.1 **EUROPASS [ECV] codelist**

**3.39.1.1 GenderType Code [ECV01]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-01GenderType sheet. It replaces EURES’ CL19-GenderEnumType codelist.

**3.39.1.2 CountriesAndNationalities Code [ECV02]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-02CountriesAndNationalities sheet. It replaces EURES’ CL07-Countires codelist.

**3.39.1.3 ContactUseCodeContentType Code [ECV03]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-03ContactUseCodeContentType sheet. It replaces EURES’ CL06-ContactUseCodeContentType codelist.

**3.39.1.4 ChannelCodeContentType Code [ECV04]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-04ChannelCodeContentType sheet. It replaces EURES’ CL05-ChannelCodeContentType codelist.

**3.39.1.5 FieldOfStudy Code [ECV05]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-05FieldOfStudy sheet. It replaces EURES’ CL60-ISCEDEducationField codelist.

**3.39.1.6 Languages Code [ECV06]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-06Languages sheet. It replaces EURES’ CL24-LanguageCodes and CL33-EURES_EULanguageCodes codelist.

**3.39.1.7 PhonePrefix Code [ECV07]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-07PhonePrefix sheet.

**3.39.1.8 Currency Code [ECV08]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-08Currency sheet. It replaces EURES’ CL09-EURES_CurrencyCodes codelist.

**3.39.1.9 Version Code [ECV09]**

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-09VersionCodes sheet. It replaces EURES’ CL63-VersionCodes codelist.

DG EMPL 2020 &lt;page_number&gt;Page 138 of 160&lt;/page_number&gt;

---


## Page 139

3.39.1.10 AuxCountriesAndNationalities Code [ECV10]

The values can be found in ECV-ControlledVocabularyList[version].xlsx file in ECV-10Aux CountriesAndNationalities sheet.

DG EMPL 2020
&lt;page_number&gt;Page 139 of 160&lt;/page_number&gt;

---


## Page 140

3.39.2 HR-Open/EURES Codelist

3.39.2.1 Attachment Instruction Codes [CL61]
These codes classify the type of the attachment uploaded.

The New EURES Standard is used.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CV</td>
      <td>CV of the candidate</td>
    </tr>
    <tr>
      <td>CoverLetter</td>
      <td>Cover letter of the candidate</td>
    </tr>
    <tr>
      <td>ProfilePicture</td>
      <td>Picture of the candidate</td>
    </tr>
    <tr>
      <td>Other</td>
      <td>Other type of attachment</td>
    </tr>
  </tbody>
</table>

3.39.2.2 Candidate Source Type Codes [CL04]
These codes classify the source that supplied the CV’s candidate.

The values come from a HR-Open Standards list, and the values can be:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JobBoard</td>
      <td>Website advertising job vacancies</td>
    </tr>
    <tr>
      <td>StaffingAgency</td>
      <td>Employment Services</td>
    </tr>
    <tr>
      <td>Intermediary</td>
      <td>Intermediary supplier</td>
    </tr>
    <tr>
      <td>Referrer</td>
      <td>Recommendation supplier</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>CandidateSourceCodeType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

3.39.2.3 Channel Type Codes [CL05]
These codes classify the communication channel used to contact a person or organisation.

Their values come from a HR-Open Standards list, and the values could be:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Telephone</td>
      <td>The communication channel is the telephone number.</td>
    </tr>
    <tr>
      <td>MobileTelephone</td>
      <td>The communication channel is the cell phone number.</td>
    </tr>
    <tr>
      <td>Fax</td>
      <td>The communication channel is the fax number.</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>The communication channel is the email address.</td>
    </tr>
    <tr>
      <td>InstantMessage</td>
      <td>The communication channel is the instant message.</td>
    </tr>
    <tr>
      <td>Web</td>
      <td>The communication channel is the web address.</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>ChannelCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 140 of 160&lt;/page_number&gt;

---


## Page 141

3.30.2.4 *Contact Use Type Codes [CL06]*
These codes classify the type of use given to the communication channel to contact a person or an organisation.

Their values come from a **HR-Open Standards list**, and the values could be:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>personal</td>
      <td>The communication channel is for personal use.</td>
    </tr>
    <tr>
      <td>business</td>
      <td>The communication channel is for business communication.</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>ContactUseCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

3.39.2.5 *Country Codes [CL07]*
The standard used is **EURES Standards: ISO 3166-1-alpha-2 code (ISO adapted to EC codification)**.

The Country codes are given in the following file: EURES ReferenceData File [RD02]

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>Countries</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>3166-1-alpha-2</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://ec.europa.eu/esco/ConceptScheme/country</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>PENDING DEFINITION</td>
    </tr>
  </tbody>
</table>

3.39.2.6 *Country Subdivision Codes [CL08]*
These codes are the regions of the European Union countries and the European Free Trade Association (EFTA) countries.

The standard used is the **EURES Standards: NUTS 2013 – Level 3³**.

The Country Subdivision codes are given in the following file: EURES ReferenceData File [RD02]

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_CountrySubdivisionCodes</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>2013-Level-3</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://ec.europa.eu/eurostat</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>PENDING DEFINITION</td>
    </tr>
  </tbody>
</table>

---
³ NUTS 2013: http://epp.eurostat.ec.europa.eu/portal/page/portal/nuts nomenclature/introduction

DG EMPL 2020
&lt;page_number&gt;Page 141 of 160&lt;/page_number&gt;

---


## Page 142

3.39.2.7 *Currency Codes [CL09]*
These codes specify the types of currency in the EEA / EFTA and Switzerland.

The standard used is the **EURES Standards: ISO 4217:2008**⁴, adapted to **EEA/EFTA**⁵ and including Switzerland.

<table>
<thead>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>EUR</td>
<td>Euro</td>
</tr>
<tr>
<td>BGN</td>
<td>Lev</td>
</tr>
<tr>
<td>CHF</td>
<td>Swiss franc</td>
</tr>
<tr>
<td>CZK</td>
<td>Czech koruna</td>
</tr>
<tr>
<td>DKK</td>
<td>Danish krone</td>
</tr>
<tr>
<td>GBP</td>
<td>Pound sterling</td>
</tr>
<tr>
<td>HRK</td>
<td>Kuna</td>
</tr>
<tr>
<td>HUF</td>
<td>Forint</td>
</tr>
<tr>
<td>ISK</td>
<td>Króna</td>
</tr>
<tr>
<td>LTL</td>
<td>Litas</td>
</tr>
<tr>
<td>NOK</td>
<td>Norwegian krone</td>
</tr>
<tr>
<td>PLN</td>
<td>Zloty</td>
</tr>
<tr>
<td>RON</td>
<td>Romanian leu</td>
</tr>
<tr>
<td>SEK</td>
<td>Krona</td>
</tr>
</tbody>
</table>

The code attribute values are as follows:

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>listName</td>
<td>EURES_CurrencyCodes</td>
</tr>
<tr>
<td>listVersionID</td>
<td>4217:2008</td>
</tr>
<tr>
<td>name</td>
<td>{Code name or description}</td>
</tr>
<tr>
<td>listURI</td>
<td>http://www.iso.org/iso/</td>
</tr>
<tr>
<td>listSchemeURI</td>
<td>PENDING DEFINITION</td>
</tr>
</tbody>
</table>

3.39.2.8 *Degree Codes [CL10]*
Codes used to specify the degree certification obtained.

**EURES Standards: ESCO Qualifications** are the standard used. The values are in the ESCO official website:

*   https://ec.europa.eu/ESCO/portal/browse?type=Qualification

The code attribute values are as follows:

---
⁴ ISO – ISO-4217:2008: http://www.iso.org/iso/catalogue_detail?csnumber=46121
⁵ Official currencies of the Member States of EU: http://publications.europa.eu/code/en/en-370302.htm

DG EMPL 2020
&lt;page_number&gt;Page 142 of 160&lt;/page_number&gt;

---


## Page 143

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>ESCO_Qualifications</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>ESCOv1</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>https://ec.europa.eu/esco/portal</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>https://ec.europa.eu/esco/portal</td>
    </tr>
  </tbody>
</table>

3.39.2.9 Dimension Codes [CL11]
These are the codes used to classify the language competency dimension

The EURES Standard, based on CEFR⁶:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CEF-Understanding-Listening</td>
      <td>Listening comprehension</td>
    </tr>
    <tr>
      <td>CEF-Understanding-Reading</td>
      <td>Reading comprehension</td>
    </tr>
    <tr>
      <td>CEF-Speaking-Interaction</td>
      <td>Spoken interaction</td>
    </tr>
    <tr>
      <td>CEF-Speaking-Production</td>
      <td>Spoken production</td>
    </tr>
    <tr>
      <td>CEF-Writing-Interaction</td>
      <td>Written interaction</td>
    </tr>
    <tr>
      <td>CEF-Writing-Production</td>
      <td>Written production</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_Dimension</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.coe.int</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>PENDING DEFINITION</td>
    </tr>
  </tbody>
</table>

3.39.2.10 Disability Level Code [CL12]
These are the codes used to classify the level of disability.

The New EURES Standard is used.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Needs another person's assistance with daily life tasks</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Inability to perform one or more sensory or physical functions</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Experiences difficulties in multiple sensory or physical functions</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Experiences difficulty in just one function</td>
    </tr>
    <tr>
      <td>5</td>
      <td>No limitations in functioning</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_DisabilityLevelCode</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>https://ec.europa.eu/eures</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>PENDING DEFINITION</td>
    </tr>
  </tbody>
</table>

---
⁶ CEFR: http://www.coe.int/t/dg4/linguistic/CADRE1_EN.asp

DG EMPL 2020
&lt;page_number&gt;Page 143 of 160&lt;/page_number&gt;

---


## Page 144

3.39.2.11 *Drivers License Codes [CL14]*
Codes used to specify a type of drivers licence.

The EURES Standards: Directive 2006/126/EC (EU)⁷ standard is used.

<table>
<thead>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>AM</td>
<td>Mopeds</td>
</tr>
<tr>
<td>A1</td>
<td>Motorcycles and motor tricycles not exceeding a certain power level<br>The minimum age for category A1 is 16 years.</td>
</tr>
<tr>
<td>A2</td>
<td>Motorcycles not exceeding a certain power level<br>The minimum age for category A2 is 18 years.</td>
</tr>
<tr>
<td>A</td>
<td>Motor tricycles not exceeding a certain power level and a minimum age of 21 years.</td>
</tr>
<tr>
<td>B1</td>
<td>Quadricycles<br>The minimum age for category B1 is 16 years,</td>
</tr>
<tr>
<td>B</td>
<td>Motor vehicles not exceeding certain authorised mass.<br>The minimum age for category B is 18 years.</td>
</tr>
<tr>
<td>BE</td>
<td>A combination of vehicles consisting of a tractor vehicle in category B and a trailer or semi-trailer not exceeding a certain mass<br>The minimum age for category BE is 18 years.</td>
</tr>
<tr>
<td>C1</td>
<td>Motor vehicles which are between mass<br>The minimum age for category C1 is 18 years.</td>
</tr>
<tr>
<td>C1E</td>
<td>A combination of vehicles consisting of a tractor vehicle in category B or C1 and a trailer or semi-trailer which are between mass<br>The minimum age for category C1E is 18 years.</td>
</tr>
<tr>
<td>C</td>
<td>Motor vehicles whose maximum authorised exceed a mass and carriage of no more than eight passengers, including the driver<br>Motor vehicles in this category may be combined with a trailer not exceeding a maximum authorised mass.<br>The minimum age for category C is 21 years.</td>
</tr>
<tr>
<td>CE</td>
<td>A combination of vehicles where the tractor vehicle is category C and its trailer or semi-trailer does not exceed a maximum authorised mass<br>The minimum age for categories CE is 21 years.</td>
</tr>
<tr>
<td>D</td>
<td>Motor vehicles designed and constructed for the carriage of more than eight passengers in addition to the driver.<br>Motor vehicles which may be driven with a category D licence may be combined with a trailer having a maximum authorised mass which does not exceed 750 kg.</td>
</tr>
<tr>
<td>D1</td>
<td>Motor vehicles or carriage of no more than 16 passengers including the driver and with a maximum length<br>Motor vehicles in this category may be combined with a trailer not exceeding a maximum authorised mass.<br>The minimum age for categories D1 is 21 years.</td>
</tr>
<tr>
<td>D1E</td>
<td>A combination of vehicles where the tractor vehicle is category C1 and its trailer does not exceed a maximum authorised mass.<br>The minimum age for categories D1E is fixed at 21 years.</td>
</tr>
<tr>
<td>DE</td>
<td>Combination of vehicles where the tractor vehicle is in category D and its trailer not exceeds a maximum authorised mass.<br>The minimum age for categories DE is fixed at 24 years.</td>
</tr>
</tbody>
</table>

The code attribute values are as follows:

<table>
<thead>
<tr>
<th>Attributes</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>listName</td>
<td>EURES_LicenceTypeCode</td>
</tr>
<tr>
<td>listVersionID</td>
<td>2006/126/EC</td>
</tr>
<tr>
<td>name</td>
<td>{Code name or description}</td>
</tr>
<tr>
<td>listURI</td>
<td>https://ec.europa.eu/eures</td>
</tr>
<tr>
<td>listSchemeURI</td>
<td>Placeholder</td>
</tr>
</tbody>
</table>

3.39.2.12 *Education Level Codes [CL15]*
The Education level the jobseeker has completed.

---
⁷ EU – Directive 2006/126/EU: http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2006:403:0018:0060:EN:PDF

DG EMPL 2020
&lt;page_number&gt;Page 144 of 160&lt;/page_number&gt;

---


## Page 145

Two standards can be used to classify the education level:

*   The **EURES Standards: ISCED-2011 (UNESCO)**⁸.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Early childhood education</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Primary education</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Lower secondary education</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Upper secondary education</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Post-secondary non-tertiary education</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Short-cycle tertiary education</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Bachelor or equivalent level</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Masters or equivalent level</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Doctoral or equivalent level</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_ISCEDIEducationLevel</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>2011</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>https://ec.europa.eu/eures</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>Placeholder</td>
    </tr>
  </tbody>
</table>

*   The **EURES Standards: EQF (European Qualifications Framework)**⁹

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Basic general knowledge.<br>Basic skills required to carry out simple tasks.<br>Work or study under direct supervision in a structured context.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Basic factual knowledge of a field of work or study.<br>Basic cognitive and practical skills required to use relevant information in order to carry out tasks and to solve routine problems using simple rules and tools.<br>Work or study under supervision with some autonomy.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Knowledge of facts, principles, processes and general concepts, in a field of work or study.<br>A range of cognitive and practical skills required to accomplish tasks and solve problems by selecting and applying basic methods, tools, materials and information.<br>Take responsibility for completion of tasks in work or study; adapt own behaviour to circumstances in solving problems.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Factual and theoretical knowledge in broad contexts within a field of work or study.<br>A range of cognitive and practical skills required to generate solutions to specific problems in a field of work or study.<br>Exercise self-management within the guidelines of work or study contexts that are usually predictable, but are subject to change; supervise the routine work of others, taking some responsibility for the evaluation and improvement of work or study activities.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Comprehensive, specialised, factual and theoretical knowledge within a field of work or study and an awareness of the boundaries of that knowledge.<br>A comprehensive range of cognitive and practical skills required to develop creative solutions to abstract problems.<br>Exercise management and supervision in contexts of work or study activities where there is unpredictable change review and develop performance of self and others.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Advanced knowledge of a field of work or study, involving a critical understanding of theories and principles.<br>Advanced skills, demonstrating mastery and innovation, required to solve complex and unpredictable problems in a specialised field of work or study.<br>Manage complex technical or professional activities or projects, taking responsibility for decision making in unpredictable work or study contexts; take responsibility for managing professional development of individuals and groups.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Highly specialised knowledge, some of which is at the forefront of knowledge in a field of work or study, as the basis for original thinking and/or research; critical awareness of knowledge issues in a field and at the interface between different fields.</td>
    </tr>
  </tbody>
</table>

⁸ UNESCO – ISCED 2011: http://www.uis.unesco.org/EDUCATION/Pages/international-standard-classification-of-education.aspx
⁹ EQF: http://ec.europa.eu/eqf/home_en.htm

DG EMPL 2020
&lt;page_number&gt;Page 145 of 160&lt;/page_number&gt;

---


## Page 146

<table>
  <tr>
    <td></td>
    <td>Specialised problem-solving skills required in research and/or innovation in order to develop new knowledge and procedures and to integrate knowledge from different fields.<br>Manage and transform work or study contexts that are complex, unpredictable and require new strategic approaches; take responsibility for contributing to professional knowledge and practice and/or for reviewing the strategic performance of teams.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Knowledge at the most advanced frontier of a field of work or study and at the interface between fields.<br>The most advanced and specialised skills and techniques, including synthesis and evaluation, required to solve critical problems in research and/or innovation and to extend and redefine existing knowledge or professional practice.<br>Demonstrate substantial authority, innovation, autonomy, scholarly and professional integrity and sustained commitment to the development of new ideas or processes at the forefront of work or study contexts including research.</td>
  </tr>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_EQF</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>2008/C11/01</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://ec.europa.eu/esco/ConceptScheme/EQF2012/ConceptScheme</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://ec.europa.eu/esco/ConceptScheme/EQF2012/ConceptScheme</td>
    </tr>
  </tbody>
</table>

The relationship between these code lists is as follows:

<table>
  <thead>
    <tr>
      <th>EQF</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ISCED 2011</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
  </tbody>
</table>

As can be seen, the ISCED 2011 codes from 0 to 4 do not match the EQF.

**3.39.2.13 File-Type Codes [CL17]**
Codes used to identify the file type of the attachment

The **EURES Standard** is used.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>photo</td>
      <td>Image</td>
    </tr>
    <tr>
      <td>doc</td>
      <td>Word document</td>
    </tr>
    <tr>
      <td>pdf</td>
      <td>Adobe PDF</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_FileTypeCode</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>https://ec.europa.eu/eures</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>Placeholder</td>
    </tr>
  </tbody>
</table>

**3.39.2.14 Job Category Codes [CL20]**
These are the codes classifying the type of job, which may be used for occupational classification.

The Job Category codes are given in the following file: EURES ReferenceData File [RD02]

Two standards can be use to classify the education level:

DG EMPL 2020
&lt;page_number&gt;Page 146 of 160&lt;/page_number&gt;

---


## Page 147

* The **EURES Standards: ISCO-08 (ISCO)**¹⁰ taxonomy

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>ISCO2008</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>2008</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://ec.europa.eu/esco/ConceptScheme/ISCO2008</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://ec.europa.eu/esco/ConceptScheme/ISCO2008</td>
    </tr>
  </tbody>
</table>

* The **EURES Standards: ESCO Occupations**¹¹ taxonomy

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>ESCO_Occupations</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>ESCOv1</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>https://ec.europa.eu/esco/portal</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>https://ec.europa.eu/esco/portal</td>
    </tr>
  </tbody>
</table>

3.39.2.15 Language Codes [CL24]
These codes include all languages of the world, because the candidate can speak any of them.

The standard used is **EURES Standards: ISO-639-1:2002 Alpha 2 (ISO)**¹², because:
* It is more restrictive
* It focuses on languages for which specialized terminologies have been developed.

The Language codes are given in the following file: EURES ReferenceData File [RD02]

a) If the element is CompetencyID, the code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>schemeID</td>
      <td>ISO-639-1/2-Languages</td>
    </tr>
    <tr>
      <td>schemeAgencyID</td>
      <td>ISO</td>
    </tr>
    <tr>
      <td>schemeAgencyName</td>
      <td>ISO</td>
    </tr>
    <tr>
      <td>schemeVersionID</td>
      <td>639-1:2002 Alpha 2</td>
    </tr>
    <tr>
      <td>schemeDataURI</td>
      <td>http://www.loc.gov</td>
    </tr>
  </tbody>
</table>

b) If the element is PrimaryLanguageCode, the code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>ISO-639-1/2-Languages</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>639-1:2002 Alpha 2</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.loc.gov</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>Placeholder</td>
    </tr>
  </tbody>
</table>

---
¹⁰ ISCO – ISCO-08: http://www.ilo.org/public/english/bureau/stat/isco/isco08/
¹¹ ESCO: https://ec.europa.eu/esco/portal/home
¹² ISO – ISO-639-1:2002 Alpha 2: http://www.iso.org/iso/catalogue_detail?csnumber=22109

DG EMPL 2020
&lt;page_number&gt;Page 147 of 160&lt;/page_number&gt;

---


## Page 148

3.39.2.16 Language Proficiency Codes [CL25]
Language Proficiency is the level of proficiency in a language.

The standard used is the EURES Standards: CEFR (Common European Framework of Reference for Language)¹³.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A1</td>
      <td>Beginner</td>
    </tr>
    <tr>
      <td>A2</td>
      <td>Elementary</td>
    </tr>
    <tr>
      <td>B1</td>
      <td>Intermediate</td>
    </tr>
    <tr>
      <td>B2</td>
      <td>Upper intermediate</td>
    </tr>
    <tr>
      <td>C1</td>
      <td>Advanced</td>
    </tr>
    <tr>
      <td>C2</td>
      <td>Proficiency</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>EURES_ProficiencyLevel</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.coe.int</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>Placeholder</td>
    </tr>
  </tbody>
</table>

3.39.2.17 Members Countries from Europe [CL29]
These codes are the European Union countries and the European Free Trade Association (EFTA) countries.

The standard used is the European Union countries based on EURES Standards: ISO 3166 alpha-2¹⁴, adapted to Member States¹⁵. Note that, for two countries (Greece (EL) and United Kingdom (UK))¹⁶ the code used differs from the ISO code.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AT</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>BE</td>
      <td>Belgium</td>
    </tr>
    <tr>
      <td>BG</td>
      <td>Bulgaria</td>
    </tr>
    <tr>
      <td>CY</td>
      <td>Cyprus</td>
    </tr>
    <tr>
      <td>CZ</td>
      <td>Czech Republic</td>
    </tr>
    <tr>
      <td>DK</td>
      <td>Denmark</td>
    </tr>
    <tr>
      <td>EE</td>
      <td>Estonia</td>
    </tr>
    <tr>
      <td>FI</td>
      <td>Finland</td>
    </tr>
    <tr>
      <td>FR</td>
      <td>France</td>
    </tr>
    <tr>
      <td>DE</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>EL</td>
      <td>Greece</td>
    </tr>
    <tr>
      <td>HR</td>
      <td>Croatia</td>
    </tr>
    <tr>
      <td>HU</td>
      <td>Hungary</td>
    </tr>
    <tr>
      <td>IS</td>
      <td>Iceland</td>
    </tr>
    <tr>
      <td>IE</td>
      <td>Ireland</td>
    </tr>
    <tr>
      <td>IT</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>LV</td>
      <td>Latvia</td>
    </tr>
    <tr>
      <td>LI</td>
      <td>Liechtenstein</td>
    </tr>
    <tr>
      <td>LT</td>
      <td>Lithuania</td>
    </tr>
    <tr>
      <td>LU</td>
      <td>Luxembourg</td>
    </tr>
    <tr>
      <td>MT</td>
      <td>Malta</td>
    </tr>
  </tbody>
</table>

---
¹³ CEFR: http://www.coe.int/t/dg4/linguistic/CADRE1_EN.asp
¹⁴ ISO-3166 Alpha-2: http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm
¹⁵ Member States of the European Union: http://publications.europa.eu/code/en/en-370100.htm
¹⁶ Country names of the Member States of EU: http://publications.europa.eu/code/en/en-370100.htm

DG EMPL 2020
&lt;page_number&gt;Page 148 of 160&lt;/page_number&gt;

---


## Page 149

<table>
  <tr>
    <td>NL</td>
    <td>Netherlands</td>
  </tr>
  <tr>
    <td>NO</td>
    <td>Norway</td>
  </tr>
  <tr>
    <td>PL</td>
    <td>Poland</td>
  </tr>
  <tr>
    <td>PT</td>
    <td>Portugal</td>
  </tr>
  <tr>
    <td>RO</td>
    <td>Romania</td>
  </tr>
  <tr>
    <td>SK</td>
    <td>Slovakia</td>
  </tr>
  <tr>
    <td>SI</td>
    <td>Slovenia</td>
  </tr>
  <tr>
    <td>ES</td>
    <td>Spain</td>
  </tr>
  <tr>
    <td>SE</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>CH</td>
    <td>Switzerland</td>
  </tr>
  <tr>
    <td>UK</td>
    <td>United Kingdom</td>
  </tr>
</table>

The code attribute values are as follows:

<table>
  <tr>
    <th>Attributes</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>listName</td>
    <td>EURES_MemberCountries</td>
  </tr>
  <tr>
    <td>listVersionID</td>
    <td>3166-1-alpha-2</td>
  </tr>
  <tr>
    <td>name</td>
    <td>{Code name or description}</td>
  </tr>
  <tr>
    <td>listURI</td>
    <td>http://www.iso.org/iso/</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td>PENDING DEFINITION</td>
  </tr>
</table>

**3.39.2.18 NACE Codes [CL31]**
NACE Codes (Statistical classification of economic activities in the European Community) identify the current or past job’s business sector or industry.

The **EURES Standards: EU¹⁷** is the standard used.

The NACE codes are given in the following file: EURES ReferenceData File [RD02]

The code attribute values are as follows:

<table>
  <tr>
    <th>Attributes</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>listName</td>
    <td>NACE_r2</td>
  </tr>
  <tr>
    <td>listVersionID</td>
    <td>NACE REVISION 2</td>
  </tr>
  <tr>
    <td>name</td>
    <td>{Code name or description}</td>
  </tr>
  <tr>
    <td>listURI</td>
    <td>http://ec.europa.eu/esco/ConceptScheme/NACErev2/cs</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td>Placeholder</td>
  </tr>
</table>

**3.39.2.19 Name Enum-Type Codes [CL32]**
These codes classify the type of name.

Their values come from an **HR-Open Standards list**, and it is an enumeration:

<table>
  <tr>
    <th>Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>CurrentName</td>
    <td>The name indicated is the current name.</td>
  </tr>
  <tr>
    <td>FormerName</td>
    <td>The name indicated is prior to marriage.</td>
  </tr>
  <tr>
    <td>BirthName</td>
    <td>The name indicated is the name given at birth.</td>
  </tr>
  <tr>
    <td>Alias</td>
    <td>The name indicated is a pseudonym.</td>
  </tr>
</table>

The code attribute values are as follows:

---
¹⁷ EU – NACE: http://ec.europa.eu/competition/mergers/cases/index/nace_all.html

DG EMPL 2020
&lt;page_number&gt;Page 149 of 160&lt;/page_number&gt;

---


## Page 150

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>listName</b></td>
      <td>NameTypeCodeEnumType</td>
    </tr>
    <tr>
      <td><b>listVersionID</b></td>
      <td>1.0</td>
    </tr>
    <tr>
      <td><b>name</b></td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td><b>listURI</b></td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td><b>listSchemeURI</b></td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

**3.39.2.20 Organization Ownership Codes [CL34]**
These codes classify the organisation ownership.

Their values come from an **HR-Open Standards list**:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>public</b></td>
      <td></td>
    </tr>
    <tr>
      <td><b>private</b></td>
      <td></td>
    </tr>
    <tr>
      <td><b>non-profit</b></td>
      <td></td>
    </tr>
    <tr>
      <td><b>government</b></td>
      <td></td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>listName</b></td>
      <td>OrganizationOwnershipTypeCodeContentType</td>
    </tr>
    <tr>
      <td><b>listVersionID</b></td>
      <td>1.0</td>
    </tr>
    <tr>
      <td><b>name</b></td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td><b>listURI</b></td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td><b>listSchemeURI</b></td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

**3.39.2.21 Organization Size Codes [CL35]**
These codes classify an organisation’s size or business scope.

The standards used to classify small and medium-sized enterprises are **EURES Standards: EU – C (2003) 1422¹⁸**. Large enterprises have been added, as described in **Eurostat¹⁹**, to cover all sizes.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>microenterprise</b></td>
      <td>0 to 9 people</td>
    </tr>
    <tr>
      <td><b>smallenterprise</b></td>
      <td>10 to 49 people</td>
    </tr>
    <tr>
      <td><b>medium-sizedenterprise</b></td>
      <td>50 to 249 people</td>
    </tr>
    <tr>
      <td><b>largeenterprise</b></td>
      <td>More than 250 people</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>listName</b></td>
      <td>EURES_OrganizationSize</td>
    </tr>
    <tr>
      <td><b>listVersionID</b></td>
      <td>(2003)1422</td>
    </tr>
    <tr>
      <td><b>name</b></td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td><b>listURI</b></td>
      <td>https://ec.europa.eu/eures</td>
    </tr>
    <tr>
      <td><b>listSchemeURI</b></td>
      <td>Placeholder</td>
    </tr>
  </tbody>
</table>

---
¹⁸ EU – C (2003) 1422: http://publications.europa.eu/code/en/en-5000300.htm
¹⁹ Eurostat – Enterprise size: http://epp.eurostat.ec.europa.eu/statistics_explained/index.php/Glossary:Large_enterprises

DG EMPL 2020
&lt;page_number&gt;Page 150 of 160&lt;/page_number&gt;

---


## Page 151

3.39.2.22 *Patent Status Enum-Type Codes [CL36]*
These codes describe the status of the patent.

Their values come from an **HR-Open Standards list**, and it is an enumeration:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PatentIssued</td>
      <td>The patent has been issued.</td>
    </tr>
    <tr>
      <td>PatentPending</td>
      <td>The patent’s processing is pending.</td>
    </tr>
    <tr>
      <td>PatentFiled</td>
      <td>The patent has been filed.</td>
    </tr>
  </tbody>
</table>

3.39.2.23 *Position Offering Codes [CL37]*
These codes classify the preferred contract type.

Their values come from an **HR-Open Standards list** and **EURES Standard**:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DirectHire</td>
      <td>Hired directly by the employee, without any external staffing</td>
    </tr>
    <tr>
      <td>Temporary</td>
      <td>Position only for certain period</td>
    </tr>
    <tr>
      <td>TemporaryToHire</td>
      <td>Position starting as a temporary job, with the option of a permanent job</td>
    </tr>
    <tr>
      <td>ContractToHire</td>
      <td>Position starting as a contract job, with the option of a permanent job</td>
    </tr>
    <tr>
      <td>Contract</td>
      <td>Contract hire</td>
    </tr>
    <tr>
      <td>Internship</td>
      <td>Period of job training</td>
    </tr>
    <tr>
      <td>Apprenticeship</td>
      <td>Combines job training with academic education</td>
    </tr>
    <tr>
      <td>Seasonal</td>
      <td>Temporary and short-term job</td>
    </tr>
    <tr>
      <td>OnCall</td>
      <td>Position on an “as needed” basis</td>
    </tr>
    <tr>
      <td>RecruitmentReserve</td>
      <td>Candidate is on the waiting list for the job vacancy</td>
    </tr>
    <tr>
      <td>SelfEmployed</td>
      <td>Self-employed person</td>
    </tr>
    <tr>
      <td>Volunteer</td>
      <td>Volunteer work</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>PositionOfferingTypeCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

3.39.2.24 *Position Schedule Codes [CL38]*
These codes classify the general schedule.

Their values come from an **HR-Open Standards list**:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FullTime</td>
      <td>Minimum number of hours defined by the employer</td>
    </tr>
    <tr>
      <td>PartTime</td>
      <td>Fewer hours per week than a full-time job</td>
    </tr>
    <tr>
      <td>FlexTime</td>
      <td>Variable work schedule</td>
    </tr>
    <tr>
      <td>Any</td>
      <td>Any type of schedule is allowed</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>PositionScheduleCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 151 of 160&lt;/page_number&gt;

---


## Page 152

<table>
  <tr>
    <td>listURI</td>
    <td>http://www.hr-xml.org/</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
  </tr>
</table>

**3.39.2.25 Position Seeking Status Enum Type [CL39]**
The position seeking statuses are given in the following table.

These values come from an HR-Open Standards list:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active</td>
      <td>The candidate is actively engaged in a job search.</td>
    </tr>
    <tr>
      <td>Passive</td>
      <td>The candidate is passively considering opportunities.</td>
    </tr>
    <tr>
      <td>NotConsideringPositions</td>
      <td>The candidate is not considering job opportunities.</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>PositionSeekingCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

**3.39.2.26 Precedence Enum-Type Codes [CL41]**
This enumeration indicates the priority of the supplier, among others.

Its values come from an HR-Open Standards list:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Primary</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Secondary</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tertiary</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Quaternary</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Quinary</td>
    </tr>
  </tbody>
</table>

**3.39.2.27 Publication Enum-Type Codes [CL59]**
This enumeration indicates the type of publication.

Its values come from an HR-Open Standards list:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Article</td>
      <td>Article</td>
    </tr>
    <tr>
      <td>Book</td>
      <td>Book</td>
    </tr>
    <tr>
      <td>Conference</td>
      <td>Conference</td>
    </tr>
    <tr>
      <td>Other</td>
      <td>Other type of publication</td>
    </tr>
  </tbody>
</table>

**3.39.2.28 Referee Enum-Type Codes [CL46]**
These codes classify the references.

Their values come from an HR-Open Standards list, and it is an enumeration:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- No data provided in the image for this table -->
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 152 of 160&lt;/page_number&gt;

---


## Page 153

<table>
  <tr>
    <td>Professional</td>
    <td>It is a professional reference.</td>
  </tr>
  <tr>
    <td>Personal</td>
    <td>It is a personal reference.</td>
  </tr>
  <tr>
    <td>Verification</td>
    <td>It verifies the CV.</td>
  </tr>
</table>

3.39.2.29 Remuneration Basis Codes [CL48]
These codes classify the primary or fundamental basis upon which pay is calculated for the position.

Their values come from an HR-Open Standards list:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hourly</td>
      <td>The candidate is paid according to the work done.</td>
    </tr>
    <tr>
      <td>Salaried</td>
      <td>Fix base paid</td>
    </tr>
    <tr>
      <td>SalariedPlusCommission</td>
      <td>Fix base paid, plus commission</td>
    </tr>
    <tr>
      <td>CommissionOnly</td>
      <td>Commissions paid</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>RemunerationBasisCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

3.39.2.30 Remuneration Type Codes [CL49]
These codes classify the type of pay or remuneration.

Their values come from an HR-Open Standards list:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BasePay</td>
      <td>Initial rate of compensation</td>
    </tr>
    <tr>
      <td>Commission</td>
      <td>Commission paid</td>
    </tr>
    <tr>
      <td>Bonus</td>
      <td>Extra salary paid</td>
    </tr>
    <tr>
      <td>ShortTermIncentive</td>
      <td>Bonus to encourage the employee</td>
    </tr>
    <tr>
      <td>ShfitPremium</td>
      <td>Additional pay for working split shifts</td>
    </tr>
  </tbody>
</table>

The code attribute values are as follows:

<table>
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>listName</td>
      <td>RemunerationTypeCodeContentType</td>
    </tr>
    <tr>
      <td>listVersionID</td>
      <td>1.0</td>
    </tr>
    <tr>
      <td>name</td>
      <td>{Code name or description}</td>
    </tr>
    <tr>
      <td>listURI</td>
      <td>http://www.hr-xml.org/</td>
    </tr>
    <tr>
      <td>listSchemeURI</td>
      <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
    </tr>
  </tbody>
</table>

3.39.2.31 Remuneration Rate Interval Codes [CL50]
An interval of time is used to express a rate of pay or remuneration.

Their values come from a HR-Open Standards list:

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hour</td>
      <td>Remuneration per hour.</td>
    </tr>
    <tr>
      <td>Day</td>
      <td>Remuneration per day.</td>
    </tr>
  </tbody>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 153 of 160&lt;/page_number&gt;

---


## Page 154

<table>
  <tr>
    <td><b>Week</b></td>
    <td>Remuneration per week.</td>
  </tr>
  <tr>
    <td><b>TwoWeeks</b></td>
    <td>Remuneration per two weeks.</td>
  </tr>
  <tr>
    <td><b>FourWeeks</b></td>
    <td>Remuneration per four weeks.</td>
  </tr>
  <tr>
    <td><b>HalfMonth</b></td>
    <td>Remuneration per half month.</td>
  </tr>
  <tr>
    <td><b>Month</b></td>
    <td>Remuneration per month.</td>
  </tr>
  <tr>
    <td><b>TwoMonths</b></td>
    <td>Remuneration per two months.</td>
  </tr>
  <tr>
    <td><b>Quarter</b></td>
    <td>Remuneration per quarter.</td>
  </tr>
  <tr>
    <td><b>SeasonalTerm</b></td>
    <td>Remuneration per seasonal term.</td>
  </tr>
  <tr>
    <td><b>HalfYear</b></td>
    <td>Remuneration per half year.</td>
  </tr>
  <tr>
    <td><b>Year</b></td>
    <td>Remuneration per year.</td>
  </tr>
  <tr>
    <td><b>QuarterToDate</b></td>
    <td>Remuneration per quarter to date.</td>
  </tr>
  <tr>
    <td><b>YearToDate</b></td>
    <td>Remuneration per year to date.</td>
  </tr>
  <tr>
    <td><b>Once</b></td>
    <td>Whole remuneration.</td>
  </tr>
</table>

The code attribute values are as follows:

<table>
  <tr>
    <td><b>Attributes</b></td>
    <td><b>Value</b></td>
  </tr>
  <tr>
    <td><b>listName</b></td>
    <td>PayRateIntervalCodeContentType</td>
  </tr>
  <tr>
    <td><b>listVersionID</b></td>
    <td>1.0</td>
  </tr>
  <tr>
    <td><b>name</b></td>
    <td>{Code name or description}</td>
  </tr>
  <tr>
    <td><b>listURI</b></td>
    <td>http://www.hr-xml.org/</td>
  </tr>
  <tr>
    <td><b>listSchemeURI</b></td>
    <td>http://www.hr-xml.org/3 ../Developer/Common/CodeLists.xsd</td>
  </tr>
</table>

**3.39.2.32 Social Benefits Codes [CL52]**

Social benefits codes specify an additional benefit beyond the salary.

The **EURES standard New** is used:

<table>
  <tr>
    <td><b>Code</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Accommodation included</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Meals included</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Relocation assisted</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Travel expenses</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Medical insurance</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Dental insurance</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Vision insurance</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Life insurance</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Short-term disability insurance</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Long-term disability insurance</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Retirement plan</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Vehicle consideration</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Relocation assistance</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Expatriate benefits</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Other benefits</td>
  </tr>
</table>

The code attribute values are as follows:

<table>
  <tr>
    <td><b>Attributes</b></td>
    <td><b>Value</b></td>
  </tr>
  <tr>
    <td><b>listName</b></td>
    <td>EURES_SocialBenefitsCodes</td>
  </tr>
  <tr>
    <td><b>listVersionID</b></td>
    <td>1.0</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 154 of 160&lt;/page_number&gt;

---


## Page 155

<table>
  <tr>
    <td>name</td>
    <td>{Code name or description}</td>
  </tr>
  <tr>
    <td>listURI</td>
    <td>https://ec.europa.eu/eures</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td>PENDING DEFINITION</td>
  </tr>
</table>

**3.39.2.33 Unit Codes [CL54]**
These codes classify the type of unit measurement.

The standard used is **EU – Units of Measurement**:

<table>
  <tr>
    <td>Code</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>km</td>
    <td>Kilometre</td>
  </tr>
  <tr>
    <td>day</td>
    <td>Day</td>
  </tr>
  <tr>
    <td>week</td>
    <td>Week</td>
  </tr>
  <tr>
    <td>month</td>
    <td>Month</td>
  </tr>
  <tr>
    <td>year</td>
    <td>Year</td>
  </tr>
</table>

The code attribute values are as follows:

<table>
  <tr>
    <td>Attributes</td>
    <td>Value</td>
  </tr>
  <tr>
    <td>listName</td>
    <td>EURES_UnitCodes</td>
  </tr>
  <tr>
    <td>listVersionID</td>
    <td>1.0</td>
  </tr>
  <tr>
    <td>name</td>
    <td>{Code name or description}</td>
  </tr>
  <tr>
    <td>listURI</td>
    <td>https://ec.europa.eu/eures</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td>PENDING DEFINITION</td>
  </tr>
</table>

**3.39.2.34 Mime Codes [CL56]**
These codes specify the data mime code of an attachment.

The **EURES standard New** is used:

<table>
  <tr>
    <td>Code</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>application/msword</td>
    <td>Mime type for Word documents (.doc)</td>
  </tr>
  <tr>
    <td>application/vnd.openxmlformats-officedocument.wordprocessingml.document</td>
    <td>Mime type for Word documents (.docx)</td>
  </tr>
  <tr>
    <td>application/pdf</td>
    <td>Mime type for PDF documents</td>
  </tr>
  <tr>
    <td>image/gif</td>
    <td>Mime type for GIF's images</td>
  </tr>
  <tr>
    <td>image/jpeg</td>
    <td>Mime type for JPEG's images</td>
  </tr>
  <tr>
    <td>image/png</td>
    <td>Mime type for PNG's images</td>
  </tr>
  <tr>
    <td>image/tiff</td>
    <td>Mime type for TIFF's images</td>
  </tr>
  <tr>
    <td>image/bmp</td>
    <td>Mime type for BPM's images</td>
  </tr>
</table>

The code attribute values are as follows:

<table>
  <tr>
    <td>Attributes</td>
    <td>Value</td>
  </tr>
  <tr>
    <td>listName</td>
    <td>EURES_MimeCodes</td>
  </tr>
  <tr>
    <td>listVersionID</td>
    <td>1.0</td>
  </tr>
  <tr>
    <td>name</td>
    <td>{Code name or description}</td>
  </tr>
  <tr>
    <td>listURI</td>
    <td>https://ec.europa.eu/eures</td>
  </tr>
  <tr>
    <td>listSchemeURI</td>
    <td></td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 155 of 160&lt;/page_number&gt;

---


## Page 156

# Annex 1. Treatment of Unfulfilled Business Rules

This annex provides that an action be carried out for each Business Rule that is not met:

<table>
<thead>
<tr>
<th>Business Rule</th>
<th>Treatment of the BR unfulfilled</th>
</tr>
</thead>
<tbody>
<tr>
<td>BR-COM-01 : If not otherwise specified, “EN” (English) is used as the default language.</td>
<td>English is taken as the default language.</td>
</tr>
<tr>
<td>BR-COM-02 : Multiple profiles are allowed, but it must be expressed in different languages.</td>
<td>N/A</td>
</tr>
<tr>
<td>BR-COM-04 : If not specified, the “validFrom” date will default to “assigned by EURES on reception”.</td>
<td>The date is assigned by EURES on reception.</td>
</tr>
<tr>
<td>BR-COM-05 : Compulsory Date Format is: YYYY-MM-DD, YYYY-MM, YYYY or YYYY-MM-DDThh:mm:ss.</td>
<td>The value is not saved, the document is rejected. The timezone considered is always UTC=0;</td>
</tr>
<tr>
<td>BR-COM-06 : If not specified, the “validTo” date will be decided by EURES depending on the transaction context.</td>
<td>The date is assigned by EURES on reception.</td>
</tr>
<tr>
<td>BR-COM-07 : If not specified, the “validTo” date will be decided by EURES depending on the transaction context.</td>
<td>The date is assigned by EURES on reception.</td>
</tr>
<tr>
<td>BR-COM-09 : Compulsory use of the Name Enum Type Codes [CL32].<br><br>Reference: Use Code List Name Enum-Type Codes [CL32]</td>
<td>The value is not saved, the document is rejected.</td>
</tr>
<tr>
<td>BR-COM-10 : If the Communication element is filled in, at least one of its sub elements should be filled in too.</td>
<td>The Communication element and its sub elements are not saved.</td>
</tr>
<tr>
<td>BR-COM-11 : The Open HR-Open Standards Code List “ChannelCodeContentType” must be used to codify the /ChannelCode element.<br><br>Reference: Use Code List Channel Type Codes [CL05]</td>
<td>N/A</td>
</tr>
<tr>
<td>BR-COM-12 : The Open HR-Open Standards Code List “ContactUseCodeContentType” must be used to codify the /UseCode element.<br><br>Reference: Use Code List Contact Use Type Codes [CL06]</td>
<td>N/A</td>
</tr>
<tr>
<td>BR-COM-13 : Compulsory use of the “EURES_ISCEDEducationLevel-CodeList.gc” list defined by EURES. This is based on ISCED-2011 (UNESCO). Or “EURES_EQF-CodeList.gc”, list defined by EURES and based on EQF (EU).<br><br>Reference: Use Code List Education Level Codes [CL15]</td>
<td>The value is not saved, the document is rejected.</td>
</tr>
<tr>
<td>BR-COM-14 : At least one of its sub-elements must be provided.</td>
<td>The value is not saved, the document is rejected.</td>
</tr>
<tr>
<td>BR-COM-15 : Compulsory use of the “EURES_DegreeType-CodeList.gc” list defined by EURES. This is based on ESCO Qualifications.<sup>20</sup><br><br>Reference: Use Code List Degree Codes [CL10]</td>
<td>The value is not saved, the document is rejected.</td>
</tr>
</tbody>
</table>

---
<sup>20</sup> There is currently no validation as the list of qualifications is incomplete. The rule may become active only when the ESCO team finalizes the code list.

DG EMPL 2020
&lt;page_number&gt;Page 156 of 160&lt;/page_number&gt;

---


## Page 157

<table>
  <tr>
    <td>BR-COM-20</td>
    <td>: Compulsory use of the “NACE-CodeList.gc” list defined by EURES. This is based on EU NACE.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List NACE Codes [CL31]</td>
  </tr>
  <tr>
    <td>BR-COM-21</td>
    <td>: Compulsory use of the “EURES_CountrySubdivisionCodes-CodeList.gc” list defined by EURES. This is based on NUTS 2013 – Level 3.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Country Subdivision Codes [CL08]</td>
  </tr>
  <tr>
    <td>BR-COM-26</td>
    <td>: Compulsory use of the “EURES_OrganizationSize-CodeList.gc” list defined by EURES. This is based on EU – C (2003) 1422, including Large enterprises.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Organization Size Codes [CL35]</td>
  </tr>
  <tr>
    <td>BR-COM-27</td>
    <td>: Compulsory use of the “OrganizationOwnershipTypeCodeContentType” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Organization Ownership Codes [CL34]</td>
  </tr>
  <tr>
    <td>BR-COM-29</td>
    <td>: Compulsory use of the “ISCO2008-CodeList.gc” list defined by EURES and based on ISCO-08. Alternatively, use of ESCO Occupations – version 1.0.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Job Category Codes [CL20]</td>
  </tr>
  <tr>
    <td>BR-COM-30</td>
    <td>: Compulsory use of the “RemunerationBasisCodeContentType” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Remuneration Basis Codes [CL48]</td>
  </tr>
  <tr>
    <td>BR-COM-31</td>
    <td>: All its sub elements must be expressed using the same currency.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3"></td>
  </tr>
  <tr>
    <td>BR-COM-32</td>
    <td>: Compulsory use of the “RemunerationCodeContentType” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Remuneration Type Codes [CL49]</td>
  </tr>
  <tr>
    <td>BR-COM-33</td>
    <td>: Compulsory use of the “RemunerationRateIntervalCodeContentType” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Remuneration Rate Interval Codes [CL50]</td>
  </tr>
  <tr>
    <td>BR-COM-34</td>
    <td>: Compulsory use of the Currency Codes [CL09].</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Currency Codes [CL09]</td>
  </tr>
  <tr>
    <td>BR-COM-35</td>
    <td>: Compulsory use of the “EURES_FileTypeCode-CodeList.gc” list defined by EURES.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List File-Type Codes [CL17]</td>
  </tr>
  <tr>
    <td>BR-COM-36</td>
    <td>: Compulsory use of the Unit Codes [CL54].</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td colspan="3">Reference: Use Code List Unit Codes [CL54]</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 157 of 160&lt;/page_number&gt;

---


## Page 158

<table>
  <tr>
    <td>BR-COM-37</td>
    <td>: Compulsory use of the “EURES_Dimension-CodeList.gc” list defined by EURES. This is based on CEFR, if TaxonomyID’s value is “language”.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Dimension Codes [CL11]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-38</td>
    <td>: Compulsory use of the “PositionOfferingCodeContentType” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Position Offering Codes [CL37]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-39</td>
    <td>: Compulsory use of the “PositionScheduleCodeContentType” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Position Schedule Codes [CL38]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-40</td>
    <td>: Compulsory use of the “EURES_SocialBenefitsCodes-CodeList.gc” list defined by EURES.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Social Benefits Codes [CL52]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-41</td>
    <td>: Compulsory use of the “EURES_LicenseTypeCode-CodeList” list. This is based on Directive 2006/126/EC.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Drivers License Codes [CL14]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-42</td>
    <td>: An Attachment shall not embed and simultaneously refer to an URI that contains the same document. External references to documents, using the URI element, are the recommended method (when possible) for attaching documents.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>BR-COM-43</td>
    <td>: Multiple entries of this code list are allowed.</td>
    <td>If the values come from a different code list, they will not be saved., the document will be rejected.</td>
  </tr>
  <tr>
    <td>BR-COM-44</td>
    <td>: One value for each code list is allowed.</td>
    <td>If multiple entries for the same code list are added, only the first value of that code list will be saved.</td>
  </tr>
  <tr>
    <td>BR-COM-45</td>
    <td>: Compulsory use of EURES HR Standard version Version Codes [CL63].</td>
    <td>The document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Version Codes [CL63]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-46</td>
    <td>: Compulsory use of Language Code [CL24], based on ISO-639-1:2002 Alpha 2 (ISO), if TaxonomyID’s value is “language”. Or the Skills and Competences Codes defined by ESCO, if TaxonomyID’s value is “other”.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td colspan="2">Reference: If taxonomy is language, use Code List Language Codes [CL24] . Else, use Code List Skills and Competences Codes [CL58]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-447</td>
    <td>: Compulsory use of Language Proficiency Codes [CL25], if TaxonomyID’s value is “language”.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td colspan="2">Reference: Use Code List Language Proficiency Codes [CL25]</td>
    <td></td>
  </tr>
  <tr>
    <td>BR-COM-48</td>
    <td>: If "CompetencyDimension" element is specified, "TypeCode" and "Score" are mandatory elements.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>BR-COM-49</td>
    <td>: If “CompetencyDimension / TypeCode” is specified, “ProficiencyLevel” is mandatory.</td>
    <td>The document is rejected.</td>
  </tr>
  <tr>
    <td>BR-COM-50</td>
    <td>: Compulsory use of Mime Codes [CL56].</td>
    <td>The document is rejected.</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 158 of 160&lt;/page_number&gt;

---


## Page 159

<table>
  <tr>
    <td>Reference: Use Code List Mime Codes [CL56]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-COM-51</strong> : Only ‘base64Binary’ is allowed. If not present it is considered as encoded in base64Binary.</td>
    <td>‘base64Binary’ is taken as the default encoding type.</td>
  </tr>
  <tr>
    <td><strong>BR-COM-52</strong> : Compulsory use of the “EURES_MemberCountries-CodeList.gc” list defined by EURES. This is based on ISO 3166-1 Alpha-2, adapted to the Member States and EFTA countries.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Members Countries from Europe [CL29]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-COM-53</strong> : If CountryCode is specified, CountrySubDivisionCode value must correspond to CountryCode value.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td><strong>BR-COM-54</strong> : TaxonomyID’s value should be “language” if the CompetencyID is a language or “other”, in the other competencies.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td><strong>BR-COM-55</strong> : Compulsory use of the attributes “listVersionID”, “listName” and “listURI”.</td>
    <td>The document is rejected.</td>
  </tr>
  <tr>
    <td><strong>BR-COM-56</strong> : The attributes “majorVersionID” and “minorVersionID” are mandatory.</td>
    <td>The document is rejected.</td>
  </tr>
  <tr>
    <td><strong>BR-COM-57</strong> : Compulsory use of the version 3.2 of HR-OS (“majorVersionID” is 3 and “minorVersionID” is 2).</td>
    <td>The document is rejected.</td>
  </tr>
  <tr>
    <td><strong>BR-CV-02</strong>: Only One Candidate (CV) per XML document instance is allowed.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td><strong>BR-CV-04</strong>: The “PositionSeekingCodeContentType” HR-Open Standards Code List must be used to codify the /Candidate /Position Seeking Status.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Position Seeking Status Enum Type [CL39]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-CV-07</strong>: The HR-Open Standards Code List “CandidateSourceCodeType” must be used to codify the /Candidate /Supplier /Source.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Candidate Source Type Codes [CL04]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-CV-08</strong>: The HR-Open Standards Code List “PrecedenceEnumType” must be used to codify the /Candidate /Supplier /Precedence.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Precedence Enum-Type Codes [CL41]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-CV-09</strong>: If the identifier is not provided an automatic ID will be provided by the Interoperability Platform.</td>
    <td>The identifier is provided by the Interoperability Platform.</td>
  </tr>
  <tr>
    <td><strong>BR-CV-10</strong>: Compulsory use of HR-Open Standards “GenderEnumType” to specify a Person’s Gender.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Gender Enum-Type Codes [CL18]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-CV-17</strong>: Compulsory use of the “EURES_DisabilityLevelCode-CodeList.gc” list defined by EURES.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Disability Level Code [CL12]</td>
    <td></td>
  </tr>
  <tr>
    <td><strong>BR-CV-22</strong>: The HR-Open Standards Code List “RefereeTypeCode”.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 159 of 160&lt;/page_number&gt;

---


## Page 160

<table>
  <tr>
    <td>Reference: Use Code List Referee Enum-Type Codes [CL46]</td>
    <td></td>
  </tr>
  <tr>
    <td><b>BR-CV-26</b>: Compulsory use of the “PatentStatusCode” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Patent Status Enum-Type Codes [CL36]</td>
    <td></td>
  </tr>
  <tr>
    <td><b>BR-CV-27</b>: Compulsory use of the “PublicationCode” list.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Publication Enum-Type Codes [CL59]</td>
    <td></td>
  </tr>
  <tr>
    <td><b>BR-CV-28</b>: Compulsory use of the “EURES_ISCEDEducationField” list defined by EURES.</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Reference: Use Code List ISCED Education Field [CL60]</td>
    <td></td>
  </tr>
  <tr>
    <td><b>BR-CV-29</b>: Compulsory use of the “EURES_AttachmentInstructionCVCCode” list defined by EURES.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td>Reference: Use Code List Attachment Instruction Codes [CL61]</td>
    <td></td>
  </tr>
  <tr>
    <td><b>BR-CV-30</b>: At least one of the following sub-elements (either Address or URI or DialNumber) must be provided.</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td><b>BR-CV-31</b>: If URI element is provided, ChannelCode element must contain either "Email" or "Web".</td>
    <td>The value is not saved, the document is rejected.</td>
  </tr>
  <tr>
    <td><b>BR-CV-32</b>: The Xpath must be valid</td>
    <td>The value is not saved. The document is rejected.</td>
  </tr>
  <tr>
    <td colspan="2">Trigger: The Xpath is considered invalid when<br>1. It does not respect the syntax of the XPath language;<br>2. It returns anything else than a node or a list of nodes (e.g. a number);<br>3. It does not return any node present in the XML<br>4. It returns a node part of the Technical Minimum layer, or its ancestors<br><br>(!) The Xpath must not contain any namespace references. The Xpath will be considered as invalid if it is the case. For example:<br>“Candidate/CandidatePerson/Communication/oa:DialNumber” is invalid, it must be written as “/CandidatePerson/Communication/DialNumber” to be valid.</td>
  </tr>
</table>

DG EMPL 2020
&lt;page_number&gt;Page 160 of 160&lt;/page_number&gt;