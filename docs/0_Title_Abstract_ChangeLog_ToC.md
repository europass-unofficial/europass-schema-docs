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


&lt;img&gt;europass&lt;/img&gt; Europass2 CV XML Schema Documentation

## Abstract

The purpose of this document is to describe in detail the Europass Curriculum Vitae (ECV) Data Standard Specification,
which is the format used for the exchanges of CVs in Europass e-portfolio, a free web-based tools that foster mobility
and employment in the EU. This document defines the structure, the code lists to be used and the Business Rules that
apply for each of the elements in the ECV schema.

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


## Table of Contents

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


## Reference and Applicable Documents

The following contents or documents may be relevant for better understanding the project and the contents of this
document.

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


## Abbreviations and Acronyms

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

