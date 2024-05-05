import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder,FormArray, Validators } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume-layer',
  templateUrl: './resume-layer.component.html',
  styleUrl: './resume-layer.component.css'
})
export class ResumeLayerComponent implements OnInit{

  @ViewChild('resumePrint', { static: false }) resumePrint!: ElementRef;
  userDetailsForm! : FormGroup;
  experienceForm! : FormGroup;
  educationForm! : FormGroup;
  certificationForm! : FormGroup;
  skillForm! : FormGroup;
  projectForm! : FormGroup;
  softSkillForm! : FormGroup;
  languageForm! : FormGroup;
  interestForm! : FormGroup;

  userDetailsFormValue : any;
  experienceFormValue : any;
  educationFormValue : any;
  certificationFormValue : any;
  skillFormValue : any;
  projectFormValue : any;
  softSkillFormValue : any;
  languageFormValue : any;
  interestFormValue : any;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    
    this.userDetailsForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      phone: ['', Validators.required],
      mail: ['', Validators.required],
      linkedIn: ['', Validators.required],
      location: ['', Validators.required],
      jobDescription: ['', Validators.required]
    }) 

    this.experienceForm = this.fb.group({
      experiences: this.fb.array([this.createExperienceGroup()])
    });

    this.educationForm = this.fb.group({
      education: this.fb.array([this.createEductionGroup()])
    });

    this.certificationForm = this.fb.group({
      certifications: this.fb.array([this.createCertificationGroup()])
    });

    this.skillForm = this.fb.group({
      skills: this.fb.array([this.createskillGroup()])
    });

    this.projectForm = this.fb.group({
      projects: this.fb.array([this.createProjectGroup()])
    });

    this.softSkillForm = this.fb.group({
      softSkills: this.fb.array([this.createSoftSkillGroup()])
    });

    this.languageForm = this.fb.group({
      languages: this.fb.array([this.createLanguageGroup()])
    });

    this.interestForm = this.fb.group({
      interests: this.fb.array([this.createInterestGroup()])
    });

  }

  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  get education(): FormArray {
    return this.educationForm.get('education') as FormArray;
  }

  get certifications(): FormArray {
    return this.certificationForm.get('certifications') as FormArray;
  }

  get skills(): FormArray {
    return this.skillForm.get('skills') as FormArray;
  }

  get projects(): FormArray {
    return this.projectForm.get('projects') as FormArray;
  }

  get softSkills(): FormArray {
    return this.softSkillForm.get('softSkills') as FormArray;
  }

  get languages(): FormArray {
    return this.languageForm.get('languages') as FormArray;
  }

  get interests(): FormArray {
    return this.interestForm.get('interests') as FormArray;
  }

  createExperienceGroup(): FormGroup {
    return this.fb.group({
      designation: ['', Validators.required],
      company: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      location: ['', Validators.required],
      rolesAndResponsibility: ['', Validators.required]
    });
  }

  createEductionGroup(): FormGroup {
    return this.fb.group({
      level: ['', Validators.required],
      percentage: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      instuition: ['', Validators.required],
    });
  }

  createCertificationGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      percentage: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      instuition: ['', Validators.required],
      link:['',Validators.required],
      certificateNumber:['',Validators.required],
    });
  }

  createskillGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      skillScore: ['', Validators.required],
    });
  }

  createProjectGroup(): FormGroup {
    return this.fb.group({
      projectName: ['', Validators.required],
      periodFrom: ['', Validators.required],
      periodTo: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
    });
  }

  createSoftSkillGroup(): FormGroup {
    return this.fb.group({
      softSkillName: ['', Validators.required],
      softSkillScore: ['', Validators.required],
    });
  }

  createLanguageGroup(): FormGroup {
    return this.fb.group({
      languageName: ['', Validators.required],
    });
  }

  createInterestGroup(): FormGroup {
    return this.fb.group({
      interestName: ['', Validators.required],
    });
  }

  addExperience(): void {
    this.experiences.push(this.createExperienceGroup());
  }

  removeExperience(index: number): void {
    this.experiences.removeAt(index);
  }

  addEducation(): void {
    this.education.push(this.createEductionGroup());
  }

  removeEducation(index: number): void {
    this.education.removeAt(index);
  }

  addCertification(): void {
    this.certifications.push(this.createCertificationGroup());
  }

  removeCertification(index: number): void {
    this.certifications.removeAt(index);
  }

  addSkill(): void {
    this.skills.push(this.createskillGroup());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  addProject(): void {
    this.projects.push(this.createProjectGroup());
  }

  removeProject(index: number): void {
    this.projects.removeAt(index);
  }

  addSoftSkill(): void {
    this.softSkills.push(this.createSoftSkillGroup());
  }

  removeSoftSkill(index: number): void {
    this.softSkills.removeAt(index);
  }

  addLanguage(): void {
    this.languages.push(this.createLanguageGroup());
  }

  removeLanguage(index: number): void {
    this.languages.removeAt(index);
  }

  addInterest(): void {
    this.interests.push(this.createInterestGroup());
  }

  removeInterest(index: number): void {
    this.interests.removeAt(index);
  }

  submitUserDetailsForm(){
    console.log('userDetailsForm value : \n', this.userDetailsForm.value);
  }

  submitExperienceForm(){
    console.log('experienceForm value : \n', this.experienceForm.value);
  }

  submitEducationForm(){
    console.log('educationForm value : \n', this.educationForm.value);
  }

  submitCertificationForm(){
    console.log('certificationForm value : \n', this.certificationForm.value);
  }

  submitSkillForm(){
    console.log('certificationForm value : \n', this.certificationForm.value);
  }

  submitProjectForm(){
    console.log('skillForm value : \n', this.skillForm.value);
  }

  submitSoftSkillForm(){
    console.log('softSkillForm value : \n', this.softSkillForm.value);
  }

  submitLanguageForm(){
    console.log('languageForm value : \n', this.languageForm.value);
  }

  submitInterestForm(){
    console.log('interestForm value : \n', this.interestForm.value);
  }

  downloadAsPDF() {
    const doc = new jspdf.jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
  
    const content = this.resumePrint.nativeElement;
  
    html2canvas(content, {
      scale: 2,
      logging: false,
      width: content.offsetWidth,
      height: content.offsetHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 0.8);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      // Check if content exceeds the height of one A4 page
      const maxA4Height = 297; // Height of one A4 page in mm
      let yOffset = 0;
      let currentPage = 1;
  
      while (yOffset < imgHeight) {
        // Add image to PDF
        doc.addImage(imgData, 'JPEG', 0, -yOffset, imgWidth, imgHeight);
  
        // Add new page if content exceeds the height of one A4 page
        if (yOffset + maxA4Height < imgHeight) {
          doc.addPage();
          currentPage++;
        }
  
        yOffset += maxA4Height;
      }
  
      // Reset yOffset for adding text
      yOffset = maxA4Height * (currentPage - 1);
  
      // Adjust text position if it breaks between pages
      const remainingTextHeight = imgHeight - yOffset;
      const scale = remainingTextHeight / imgHeight;
  
      // Get text position and size
      const textX = 0;
      const textY = -(content.offsetHeight * (1 - scale));
      const textWidth = content.offsetWidth;
      const textHeight = content.offsetHeight * scale;
  
      // Convert text to base64
      const textData = canvas.toDataURL('image/jpeg', 0.8);
      
      // Add text to PDF
      doc.addImage(textData, 'JPEG', textX, textY, textWidth, textHeight);
  
      // Optimize PDF
      doc.output('dataurlnewwindow');
  
      // Save PDF
      doc.save(this.userDetailsForm.value.name + ' Resume');
    });
  }

}
