<template>
    <div class="from-transcript">
        <h4 style="margin:0;">Current transcript</h4>
        {{$store.getters.strTranscript}}

        <textarea placeholder="Paste your transcript here in this form: e6,f4,c3,e7"></textarea>
        <div class="center-horizontal">
            <button @click="playTranscript">Load transcript</button>
        </div>
    </div>
</template>
