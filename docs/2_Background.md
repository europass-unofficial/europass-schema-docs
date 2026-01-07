# 2 Background

The Europass CV model is based on the HR-Open Standards and EURES specifications.

## 2.1 Design Approach

The **tec**nical solution is designed to take advantage of the information contained in the ECV.

The approach was to:

* Reuse existing interoperability solutions.
* Reuse an existing business language.
* Select an international standard (HR-Open)
* Extend already existing EURES schema.
* Have an open and royalty-free standard.

The standards adopted are **HR-Open Standards** and **EURES**, as:

* HR-Open Standards is an open and free international standard.
* HR-Open Standards is not a merely generic business language.
* HR-Open Standards covers a large part of the Europass business domain.
* HR-Open Standards is already being used by EURES.


## 2.2 Namespaces

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

Europass CV builds further on the EURES schema by adding own elements and constraining or extending further the elements
and attributes of the EURES schema.

Moreover, the EURES schema is largely based on the adaptation of HR-Open schemata. While the EURES xsd itself is an
edited version of the HR-Open xsd, we did find it cleaner to explicitly indicate and assign the EURES made modifications
to an own namespace, so it becomes clear what is properties are taken from HR-Open and what is EURES specific.

Figure 1 shows the overall picture where:

* Europass XSD imports the namespaced version of the EURES XSD,
* EURES XSD imports the official HR-Open XSD
* HR-Open¹ XSD is reusing OAGI² elements, attributes and datatypes.

---
¹ https://hropenstandards.org/
² The Open Applications Group (OAGi) is a not-for-profit open standards development organization.
https://oagi.org/AboutOAGi/tabid/84/Default.aspx


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

### 2.2.1 **XSD structure per namespace**

Every namespace follows the structure as used by HR-Open.

The main entry xsd’s (e.g. Candidate.xsd) is in the Nouns folder, which define the global structure of the respective
documents to be validated.

These main xsd’s **include** the elements, attributes and datatypes from 4 supporting schemas all to be found in the
Common folder of the same namespace:

* Components.xsd
* Fields.xsd
* Codelists.xsd
* Meta.xsd

And **import** the schema artefacts of the other relevant namespaces.

## 2.2.2 **Structure on the filesystem**

The ECV XSD follows the file and folder structure mirrored from HR-Open:

&lt;img&gt;Screenshot 1: Folder structure of Europass&lt;/img&gt;
Screenshot 1: Folder structure of Europass

&lt;img&gt;Screenshot 2 Folder structure of HR-Open&lt;/img&gt;
Screenshot 2 Folder structure of HR-Open

The figure above indicates the folder name and namespaces used by the applications. The XSD to be used for Europass
validation is Candidate.xsd within org_europass/1.0/Developer/Nouns. All other xsd’s are automatically imported and
included from there.


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