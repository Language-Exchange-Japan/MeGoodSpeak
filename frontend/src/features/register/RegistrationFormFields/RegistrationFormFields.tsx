import React from "react";
import { useFormContext } from "react-hook-form";

import { Input, Select, TextArea, FormSection } from "../../../components/ui";
import {
	PROFICIENCY_OPTIONS,
	GENDER_OPTIONS,
	LANGUAGE_OPTIONS,
	COUNTRY_OPTIONS
} from "../../../constants/formConstants";

import type { RegistrationFormData } from "../hooks/validations/registrationShema";

export function RegistrationFormFields() {
	const { register, formState: { errors: formErrors } } = useFormContext<RegistrationFormData>(); 
	return (
		<div className="space-y-6">
			<FormSection title="Personal Information" useGrid>
				<Input
					label="Username"
					error={formErrors?.username?.message as string}
					required
					autoComplete="username"
					{...register("username")}
				/>
				<Input
					label="Email"
					type="email"
					error={formErrors?.email?.message as string}
					required
					autoComplete="email"
					{...register("email")}
				/>
				<Input
					label="Password"
					type="password"
					error={formErrors?.password?.message as string}
					required
					autoComplete="new-password"
					{...register("password")}
				/>
				<Input
					label="First Name"
					error={formErrors?.firstName?.message as string}
					required
					autoComplete="given-name"
					{...register("firstName")}
				/>
				<Input
					label="Family Name"
					error={formErrors?.familyName?.message as string}
					required
					autoComplete="family-name"
					{...register("familyName")}
				/>
			</FormSection>

			<FormSection title="Language Preferences" useGrid>
				<Select
					label="Native Language"
					options={LANGUAGE_OPTIONS}
					placeholder="Select your native language"
					error={formErrors?.profileOptions?.nativeLanguage?.message as string}
					required
					{...register("profileOptions.nativeLanguage")}
				/>
				<Select
					label="Language to Practice"
					{...register("profileOptions.practicingLanguage.language")}
					options={LANGUAGE_OPTIONS}
					placeholder="Select language to practice"
					error={formErrors?.profileOptions?.practicingLanguage?.language?.message as string}
					required
				/>
				<Select
					label="Proficiency Level"
					{...register("profileOptions.practicingLanguage.proficiency")}
					options={PROFICIENCY_OPTIONS}
					error={formErrors?.profileOptions?.practicingLanguage?.proficiency?.message as string}
					required
				/>
			</FormSection>

			<FormSection title="Location & Personal Details" useGrid>
				<Select
					label="Country"
					options={COUNTRY_OPTIONS}
					placeholder="Select your country"
					error={formErrors?.profileOptions?.country?.message as string}
					{...register("profileOptions.country")}
					required
				/>
				<Input
					label="City"
					error={formErrors?.profileOptions?.city?.message as string}
					required
					autoComplete="address-level2"
					{...register("profileOptions.city")}
				/>
				<Select
					label="Gender"
					{...register("profileOptions.gender")}	
					options={GENDER_OPTIONS}
					error={formErrors?.profileOptions?.gender?.message as string}
					required
				/>
				<Input
					label="Age"
					type="number"
					min="13"
					max="120"
					error={formErrors?.profileOptions?.age?.message as string}
					required
					{...register("profileOptions.age")}
				/>
			</FormSection>

			<FormSection title="About You">
				<TextArea
					label="Bio"
					error={formErrors?.bio?.message as string}
					helperText="Optional - help others get to know you better"
					{...register("bio")}
				/>
			</FormSection>
		</div>
	);
}
