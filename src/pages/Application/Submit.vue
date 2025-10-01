<template>
    <el-card class="mt-12 mx-auto mx-[50px]">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" class="mt-12 mx-auto">
            <el-row>
                <el-col :xs="24" :md="12">
                    <el-form-item label="PIN" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :md="12">
                    <el-form-item label="Passport" prop="passport">
                        <el-input v-model="ruleForm.passport" />
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :md="12">q
                    <el-form-item label="Birth Date" required>
                        <el-date-picker v-model="ruleForm.birthDate" type="date" aria-label="Pick a date"
                            placeholder="Pick a date" :teleported="false" style="width: 100%" />
                    </el-form-item> 
                </el-col>

                <el-col :xs="24" :md="12"> 
                    <el-form-item label="University" props="university" required>
                        <el-input v-model="ruleForm.university" />
                    </el-form-item> 
                </el-col>
                <el-col :xs="24" :md="12"> 
                    <el-form-item label="Field" props="field" required>
                        <el-input v-model="ruleForm.field" />
                    </el-form-item> 
                </el-col>
                <el-col :xs="24" :md="12">
                    <el-form-item label="Activity form" prop="desc">
                        <el-input v-model="ruleForm.desc" type="textarea" />
                    </el-form-item> 
                </el-col>

                <el-col :xs="24" md="12">
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        Create
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                </el-form-item> 
            </el-col>
            </el-row>
        </el-form>

    </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    name: string
    passport: string
    birthDate: string
    university: string
    field: string
    date2: string
    delivery: boolean
    location: string
    type: string[]
    resource: string
    desc: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    passport: '',
    birthDate: '',
    university: '',
    field: '',
    date2: '',
    delivery: false,
    location: '',
    type: [],
    resource: '',
    desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    passport: [
        { required: true, message: 'Please input passport series', trigger: 'blur' },
        { min: 7, max: 9, message: 'Passport series invalid!', trigger: 'blur' }
    ],
    birthDate: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    location: [
        {
            required: true,
            message: 'Please select a location',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            alert('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>