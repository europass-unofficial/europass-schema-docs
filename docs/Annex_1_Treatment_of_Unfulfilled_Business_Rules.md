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