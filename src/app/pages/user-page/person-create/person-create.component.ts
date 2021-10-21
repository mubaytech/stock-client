import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	forwardRef,
	Input,
	OnInit,
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer } from "@angular/forms";
import {
	CreatePersonneInput,
	Role,
	TypeRole,
} from "../../../../generated/types.graphql-gen";
import { IFormGroup } from "@rxweb/types";
import { PersonneCreateForm } from "./personne-create-form";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { takeUntil } from "rxjs/operators";
import { BaseControlValueAccessor } from "../../../shared/base-control-value-accessor";
import { IS_FORM_VALID } from "../../../core/form/utils";
import { AnimationBuilder } from "@ionic/core";
import { INPUT_MASKS } from "../../../core/form/form-validation.service";
import { timer } from "rxjs";

@Component({
	selector: "app-person-create",
	templateUrl: "./person-create.component.html",
	styleUrls: ["./person-create.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PersonCreateComponent),
			multi: true,
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCreateComponent
	extends BaseControlValueAccessor<CreatePersonneInput>
	implements OnInit {
	private model: PersonneCreateForm;

	@Input() set value(value: CreatePersonneInput) {
		if (this.checkDiff(value)) {
			this.val = value;
			this.onChange(value);
			this.onTouched(value);
		}
	}

	@Input() set role(role: Role | null) {
		this.model.role = role?.slug || null;

		// console.log(role);

		this.controls.role.setValue(role?.slug || null, {
			emitEvent: false,
			onlySelf: true,
		});
		timer(50)
			.pipe(takeUntil(this.onDestroy$))
			.subscribe(() =>
				this.formGroup.setValue({
					...this.formGroup.getRawValue(),
				})
			);
	}

	get controls() {
		return this.formGroup.controls as IFormGroup<
			PersonneCreateForm
		>["controls"];
	}

	constructor(
		private formBuilder: RxFormBuilder,
		changeDetectorRef: ChangeDetectorRef
		// private controlContainer: ControlContainer,
	) {
		super(changeDetectorRef);
		this.model = new PersonneCreateForm();
		this.formGroup = this.formBuilder.formGroup<PersonneCreateForm>(
			this.model
		) as IFormGroup<PersonneCreateForm>;
	}

	formGroup: IFormGroup<PersonneCreateForm>;
	inputMasks = INPUT_MASKS;
	datePickerOptions:
		| undefined
		| {
				columns?: any[] | undefined;
				buttons?: any[] | undefined;
				cssClass?: string | string[] | undefined;
				showBackdrop?: boolean | undefined;
				backdropDismiss?: boolean | undefined;
				animated?: boolean | undefined;
				mode?: "android" | "ios";
				keyboardClose?: boolean | undefined;
				id?: string | undefined;
				enterAnimation?: AnimationBuilder | undefined;
				leaveAnimation?: AnimationBuilder | undefined;
		  };

	ngOnInit() {
		this.formGroup.valueChanges
			.pipe(takeUntil(this.onDestroy$))
			.subscribe((value) => {
				// console.log('Personne_form', value);
				if (this.formGroup.valid) {
					this.value = value;
				} else {
					this.value = null;
				}
			});
	}

	onSubmit() {
		if (
			IS_FORM_VALID(this.formGroup, {
				emitEvent: true,
			})
		) {
			//
		}
	}
}
