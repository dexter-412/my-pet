<template>
  <AuthFormWrapper>
    <template #header>
      Already have an account? {{ v$ }}
      <RouterLink
        class="accent-color"
        :to="{ name: RouteName.Login }"
      >
        Login
      </RouterLink>
    </template>

    <FormRow>
      <AppInput
        v-model="state.email"
        :size="Sizes.Large"
        :error="v$.email"
        label="Email"
        name="email"
        required
        type="email"
      >
        <template #error>
          <div v-if="!isUndefined(validationErrors?.username_or_phone)">
            {{ validationErrors?.username_or_phone?.[0] }}
          </div>
        </template>
      </AppInput>
    </FormRow>

    <FormRow>
      <PasswordInput
        v-model="state.password"
        :size="Sizes.Large"
        :error="!isUndefined(validationErrors?.password)"
        label="Password"
        name="password"
        required
      >
        <template #errorMessage>
          <div v-if="!isUndefined(validationErrors?.password)">
            {{ validationErrors?.password?.[0] }}
          </div>
        </template>
      </PasswordInput>
    </FormRow>
    <template #footer>
      <AppButton
        label="Register"
        type="submit"
        class="submit-btn"
        :loading="isLoading"
        @click.prevent="register"
      />
    </template>
  </AuthFormWrapper>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import { isUndefined } from 'lodash';
import { reactive, ref } from 'vue';

import { auth } from '@/plugins/firebase';

import type { LoginValidationErrors } from '@/application/types/api/resources/auth';
import { RouteName, Sizes } from '@/application/types/app/enums';
import AuthFormWrapper from '@/components/auth/AuthFormWrapper.vue';
import AppInput from '@/components/form/AppInput.vue';
import FormRow from '@/components/form/FormRow.vue';
import PasswordInput from '@/components/form/PasswordInput.vue';
import AppButton from '@/components/ui/AppButton.vue';

// const router = useRouter();

// const apiClient = useApiClient()
// const authClient = new AuthClient(apiClient)

// const token = useStorage<string | undefined>(Store.AuthToken, undefined)

// const email = ref<string>('');
// const password = ref<string>('');

const state = reactive({
  email: '',
  password: '',
})

const rules = {
  email: { required: true, message: 'Email is required' },
  password: { required: true, message: 'Password is required' },
}

const v$ = useVuelidate(rules,  state )

const validationErrors = ref<LoginValidationErrors | undefined>(undefined);

const isLoading = ref<boolean>(false)

// const $q = useQuasar()

function clearErrors() {
  validationErrors.value = undefined
}

function register() {
  isLoading.value = true
  clearErrors()

  createUserWithEmailAndPassword(auth, state.email, state.password)
    .then((response) => {
      console.log(response);

      console.log(auth);
    })
    .finally(() => {
      isLoading.value = false
    })

  // const requestBody = {
  //   username_or_phone: email.value,
  //   password: password.value,
  //   device: device.value,
  // }
  //
  // authClient.login(requestBody)
  //   .then(response => {
  //     if (response.user.role !== UserRole.Administrator) {
  //       $q.notify({
  //         type: 'negative',
  //         message: 'You are not an administrator.',
  //       })
  //
  //       return
  //     }
  //
  //     token.value = response.token
  //     router.push({ name: 'distributors' })
  //   })
  //   .catch((error: ErrorWithResponse): void => {
  //     if (error.status === 422 && !isUndefined(error.data.errors)) {
  //       validationErrors.value = error.data?.errors
  //
  //       return
  //     }
  //
  //     const errorMessage = error.data.message || 'Something went wrong'
  //
  //     $q.notify({
  //       type: 'negative',
  //       message: errorMessage,
  //     })
  //   })
  //   .finally(() => {
  //     isLoading.value = false
  //   })
}
</script>

